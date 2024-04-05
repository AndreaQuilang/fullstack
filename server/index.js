const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/User')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/user",{ useNewUrlParser: true, useUnifiedTopology: true }) //copy connection string from mongodb + database name

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    UserModel.findOne({username: username})
    .then(user =>{
        if (user){
            if (user.password === password){
                res.json("Success")
            }else{
                res.json("Password Incorrect")
            }
        }else{
            res.json("User not found!")
        }
    }
        )
})

app.post('/register', (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => 
{
    console.log("server is running")
})