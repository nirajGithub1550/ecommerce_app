import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const {getTotalCartAmount, token, food_list, cartItem, url} = useContext(StoreContext);

  const [data, setData] = React.useState({
    firstName : "",
    lastName : "",
    email : "",
    street : "",
    city : "",
    state : "",
    pinCode : "",
    country : "",
    phone : ""
  })

  const onChangeHandler =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}));
  }
  const placeOrder = async(event)=>{
    console.log('hello bro');
    
   event.preventDefault()
   let orderItems = []
    food_list.map((item)=>{
      if(cartItem[item._id] > 0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderItems.push(itemInfo)
      }
    })
    console.log(orderItems);
    let orderData = {
      address:data, 
      items:orderItems,
      amount:getTotalCartAmount()+50

    }
    let response = await axios.post(url+'/api/order/place', orderData, {headers:{token}});
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);

    }
    else{
      alert('error');
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
  if(!token){
    navigate('/cart')
  }
  else if(getTotalCartAmount() === 0){
    navigate('/cart');
  }
  }, [token])

  return (
    <form onSubmit={placeOrder} className='place-order' >
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name' name='firstName'value={data.firstName} onChange={onChangeHandler} required/>
          <input type="text" placeholder='Last Name' name='lastName' value={data.lastName} onChange={onChangeHandler} required/>
        </div>
        <input type="email" placeholder='Email Address' name='email' value={data.email} onChange={onChangeHandler} required/>
        <input type="text" placeholder='Street' name="street" value={data.street} onChange={onChangeHandler} required/>
        <div className='multi-fields'>
          <input type="text" placeholder='City' name='city' value={data.city} onChange={onChangeHandler} required/>
          <input type="text" placeholder='State' name='state' value={data.state} onChange={onChangeHandler} required/>
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='PIN code' name='pinCode' value={data.pinCode} onChange={onChangeHandler} required/>
          <input type="text" placeholder='Country' name='country' value={data.country} onChange={onChangeHandler} required/>
        </div>
        <input type="text" placeholder='Phone Number' name='phone' value={data.phone} onChange={onChangeHandler} required/>
      </div>
      <div className='place-order-right'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p> $ {getTotalCartAmount() === 0 ? "0" : 10}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b> $ {getTotalCartAmount() === 0 ? "0" : getTotalCartAmount() + 10}</b>
            </div>
          </div>
          <button type='submit' >PROCEED TO PAY</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
