import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {
  
  const [image, setImage] = React.useState(false);
  const [data, setData] = React.useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad'
  })
  

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData(data => ({...data, [name]: value}))
  }
  console.log(data);
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if(response.data.success){
      setData({ name: '', description: '', price: '', category: 'Salad' });
      setImage(false);
      toast.success(response.data.message);
    }
    else{
      toast.error(response.data.message)
    }
  }
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
      <div className="add-img-upload flex-col">
        <p>upload</p>
        <label htmlFor="image">
          <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload" />
          
        </label>
        <input type="file" id='image' placeholder='file' hidden required onChange={(e)=>setImage(e.target.files[0])}/>
      </div>
      <div className="add-product-name flex-col">
        <p>Product name</p>
        <input type="text"name='name' placeholder='Type here..' onChange={onChangeHandler} value={data.name}/>
      </div>
      <div className="add-product-description flex-col">
        <p>Product Description</p>
        <textarea name="description" id="description" rows="6" placeholder='Write content here..' required onChange={onChangeHandler} value={data.description}></textarea>
      </div>
      <div className="add-category-price">
        <div className="add-category flex-col">
          <p>Product Category</p>
          <select name="category" id="" onChange={onChangeHandler}>
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>
        <div className="add-price flex-col">
          <p>Product Price</p>
          <input type="number" name='price' placeholder='₹ 100' onChange={onChangeHandler} value={data.price}/>
        </div>
      </div>
      <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add
