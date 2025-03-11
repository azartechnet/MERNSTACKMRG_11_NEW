const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app = express()

app.use(cors({
  origin:'http://localhost:3000',
  methods:['PUT','GET','POST','DELETE']
}));

app.use(express.json())

const FoodModel=require("./models/Food")

mongoose.connect("mongodb://localhost:27017/food")
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

//insert 
app.post("/insert",async(req,res)=>{
    const {foodName,description}=req.body;
    const food=new FoodModel({foodName,description})
    try
    {
        await food.save()
        res.send("Data Inserted..")
    }
    catch(err)
    {
        res.send("Error Occured")
    }
})

//Read the data
app.get("/read",async(req,res)=>{
    try{
        const food=await FoodModel.find();
        res.send(food);
    }
    catch(err)
    {
         res.send("Error Occured")
    }
})

//update data

app.put("/update",async(req,res)=>{
    const {newFoodName,id}=req.body;
    try
    {
        const updateFood=await FoodModel.findById(id);
        if(!updateFood)
        {
              return res.status(404).send("Data not updated")
        }
        updateFood.foodName=newFoodName;
        await updateFood.save()
        res.send("Data Updated SuccessFully");
    }

    catch(err)
    {
          console.log(err)
    }
})
app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})