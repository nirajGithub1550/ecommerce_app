import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({ category, setCategory }) => {

  console.log("This is category ======> ", category);


  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        We're here to offer a taste of our culinary creations, so don't be afraid to explore our menu. If you want to explore something new, we'd be happy to help you discover it. Enjoy our delicious food at the best prices. We're always here to help.
      </p>
      <div className="explore-menu-list">
        {
          menu_list.map((item, index) => {
            return (
              <div className='explore-menu-list-items' onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index}>

                <img src={item.menu_image} alt="menu-image" className={category === item.menu_name ? "active" : ""} />
                <p>{item.menu_name}</p>
              </div>
            )
          })
        }
      </div>
      <hr />
    </div>
  )
}

export default Menu
