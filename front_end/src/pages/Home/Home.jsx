import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {

  const [category, setCategory] = React.useState("All");

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
