import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id, name, price, description, image }) => {

    const {cartItem, addToCart, removeFromCart, url} = useContext(StoreContext)
    return (
        <div className='food_item'>
            <div className='food_item_image_container'>
                <img src={url +"/images/" + image} alt="food-item-image" className="food_item_image" />
                {
                    !cartItem[id] ? <img src={assets.add_icon_white} onClick={() => addToCart(id)} alt="add-icon" className='add' />
                        : <div className='food_item_counter'>
                            <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="remove-icon" />
                            <p>{cartItem[id]}</p>
                            <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt='add-icon' />
                        </div>
                }
            </div>
            <div className="food_item_info">
                <div className="food_item_name_rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating-icon" />
                </div>
                <p className="food_item_description">{description}</p>
                <p className="food_item_price">₹ {price}</p>
            </div>
        </div>
    )
}

export default FoodItem
