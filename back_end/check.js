import express from 'express';
import cors from 'cors';
import { models } from 'mongoose';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    // res.send('api is working.....');
    res.send('<h2 style="color:red;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>');
})

app.listen(port, ()=>{
    console.log('server started...');
})


// mongodb

// models

import mongoose  from 'mongoose';

const foodSchema = new mongoose.Schema({
    name : {type : String, required:true},
    declaration : {type : String, required : true},
    price : {type : Number, required:true},
    image : {type : String, required:true},
    category : {type : String, required:true}
})

const foodModel = mongoose.models.food || mongoose.model('food', foodSchema);
