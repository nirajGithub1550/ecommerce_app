import {React, useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import {toast} from 'react-toastify'

const List = ({url}) => {
  const [list, setList] = useState([]);
  
  
 
  
  const fetchList = async() => {
  
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error('Error');
      console.log(response.data.message);
      
    }
  }
  useEffect(()=>{
    fetchList();
  }, [])
  console.log(list.map((item)=>console.log(item)
));
  const removeFood = async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }
  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          list.map((item,index)=>{
            return(
              <div className="list-table-format" key={index}>
                  <img src={`${url}/images/`+ item.image} alt="food-image" />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>₹{item.price}</p>
                  <b className='cursor' onClick={()=>removeFood(item._id)}> ✕ </b>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List
