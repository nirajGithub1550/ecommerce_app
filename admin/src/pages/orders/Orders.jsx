import React, {useEffect, useState} from 'react'
import './Order.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import {assets} from '../../assets/assets'
const Orders = ({url}) => {
  
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async()=>{
    const response = await axios.get( url+'/api/order/list');
    console.log("response ==> "+response)
    if(response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else{
      toast.error("error");
    }
  }
  const statusHandler =async(event, orderId)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId, 
      status: event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }
useEffect(() => {
fetchAllOrders();
}, [])
  return (
    <div className='order add'>
      <h2>Order</h2>
      <div className="order-list">
        {
          orders.map((order, index)=>(
            <div className='order-item' key={index}>
              <img src={assets.parcel_icon} alt="parcel_icon" />
              <div>
                <p className='order-item-food'>
                  {
                    order.items.map((item, index)=>{
                      if(index===order.items.length-1){
                        return item.name + " x "+ item.quantity
                      }
                      else{
                        return item.name +" x "+item.quantity+" , "
                      }
                    })
                  }
                </p>
                  <p className='order-item-name'>
                      {order.address.firstName+" " + order.address.lastName}
                  </p>
                  <div className="order-item-address">
                    <p>{order.address.street}</p>
                    <p>{order.address.city + " " + order.address.state + " " +" "+ order.address.country +" "+ order.address.pinCode}</p>

                  </div>
                  <p className='order-item-phone'><span>&#9743;</span>{order.address.phone}</p>
              </div>
              <p>Item: {order.items.length}</p>
              <p>₹ {order.amount}</p>
              <select  onChange={(event)=>statusHandler(event, order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
