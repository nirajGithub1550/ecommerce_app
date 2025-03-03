import React, { useContext } from 'react'
import './Cart.css';
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const {cartItem, food_list, removeFromCart, getTotalCartAmount, url} = useContext(StoreContext)
  console.log(getTotalCartAmount());
  
  return (
    <div className='cart'>
      <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quality</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
    {
      food_list.map((item, index)=>{
        if(cartItem[item._id]>0){
          return (
            <>
            <div className='cart-items-title cart-items-item' key={''}>
                <img src={url + '/images/'+item.image} alt="" />
                <p>{item.name}</p>
                <p>$ {item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>$ {item.price*cartItem[item._id]}</p>
                <img src={assets.cross_icon} alt="" className='remove-cart' onClick={()=>removeFromCart(item._id)}/>
            </div>
            <hr />
            </>
          )
        }
      }
      )
    }
      </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className='cart-total-details'>
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
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
              <button onClick={()=>navigate('/place-order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have promo code, Enter it here</p>
              <div className='cart-promocode-input'>
                  <input type="text" placeholder='Enter Promo code here' />
                  <button>APPLY</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart
