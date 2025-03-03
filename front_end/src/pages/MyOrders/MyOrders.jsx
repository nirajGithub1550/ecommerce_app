import React, { useContext,useState, useEffect } from 'react'
import {StoreContext} from '../../context/StoreContext';
import axios from 'axios'
import './MyOrders.css';
import {assets} from '../../assets/assets'
const MyOrders = () => {
    const {url,token} = useContext(StoreContext)
    const [data, setData] = useState([])

    const fetchOrder= async()=>{
        const response = await axios.post(url+"/api/order/userorders", {}, {headers:{token}});
        console.log(response.data.data);
        setData(response.data.data);
        
    }

    useEffect(() => {
      if(token){
        fetchOrder();
      }
    }, [token])
    

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {
          data.map((order, index)=>{
            return (
              <div key={index} className="my-orders-order">
                <img src={assets.parcel_icon}  alt="parcel-icon"/>
                <p>{order.items.map((item,index)=>{
                  console.log("index ==> ", index)
                  console.log("order ==> ", order.items.length-1)
                  
                  if(index=== order.items.length-1){ // 0 
                    return item.name+" ✕ " + item.quantity
                  }
                  else{
                    return item.name+" ✕ "+ item.quantity + " , "
                  }
                })}</p>
                <p>₹ {order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                <button onClick={fetchOrder}>Track Order</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MyOrders
