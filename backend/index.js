const express = require("express")
const cors=require("cors");
const app = express()
const {DBConnection}=require('./database/db');
const User = require("./model/User");
const {PasswordValidation}=require('./Validation/PasswordValidation');

require("dotenv").config();

const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const nodemailer=require("nodemailer");
const PORT=process.env.PORT || 8000;



app.use(express.json());
app.use(cors(
    {
        origin: ["https://login-app-ui.vercel.app"],
        methods: ["POST","GET"],
        credentials: true
    }
));
app.use(express.urlencoded({extended: true}));
DBConnection();



// Handling GET / request
app.get("/", (req, res, next) => {
    res.send("This is the express server")
})

// Handling register
app.post('/signup', async (req,res)=>{

    try{

    // console.log("body",req.body)

//get all the data from frontend
const {name,username,password}=req.body;
// console.log("name",name);
//check all data should exist or not
if(!(name && username && password)){
    return res.status(400).json({message:"Please enter all the required Fields!"});
}
const isValid = PasswordValidation(password);
if(!isValid){
    return res.status(400).json({message:"Password should contain A to Z,a to z,0-9 and Special Character"});
}

//check if user already is exist or not

const isUserExists=await User.findOne({username});

if(isUserExists){
    return res.status(400).json({message:"User with this mail is already exists!"});
}

//encrypt the user password
const hashedPassword=await  bcrypt.hash(password,10);

  //save the user data in db
  const userData=await User.create({
    name, username, password: hashedPassword,
  });


  //generate a token and sent it
  const token =jwt.sign({id:User._id,username},process.env.SECRET_KEY,{
    expiresIn: '1h'
  });
  userData.token=token;
  userData.password=undefined;

  res.status(200).json({
    message:"You have Successfully registered!",
    success:true, 
    userData
  });

}
catch(error){
    console.log("Error:" + error.message);
}


});


// Login Api

app.post('/login', async (req,res)=>{

    try{
      const {username,password}=req.body;
  
      //check all data should exist 
      console.log(req.body)
  
      if(!(username && password)){
        return res.status(400).send("Pls enter all the required fields")
      }
  
      //check if user is already exists or not in the database
      const user=await User.findOne({username});
  
      if(!user){
          return res.status(400).send("User with this mail not  exists!");
      }
  
        //match the password
  
        const enteredPassword=await bcrypt.compare(password,user.password);
  
        if(!enteredPassword){
          return res.status(400).send("Password is incorrect!");
        }
  
  
  
     
  
    //send the token
    res.status(200).json({
      message:"You have Successfully Logged in!",
      success:true,
     user
    });
  
  
    }
    catch(error){
  
    }
  
  });
  

  //forgot password api

  // app.post('/forgotPassword', async (req,res)=>{

  //   try{
  //     const {username}=req.body;
  
  //     //check all data should exist 
  //     console.log(req.body)
  
  //     if(!(username)){
  //       return res.status(400).send("Pls enter the username")
  //     }
  
  //     //check if user is already exists or not in the database
  //     const user=await User.findOne({username});
  
  //     if(!user){
  //         return res.status(400).send("User with this username not  exists!");
  //     }
  
        
  //     const token =jwt.sign({username},process.env.SECRET_KEY,{
  //       expiresIn: '1h'
  //     });

  //     const transporter= nodemailer.createTransport({
  //       service:"gmail",
  //       secure:true,
  //       auth:{
  //          user:"",
  //          pass:"",
  //       },
  //     })
  
     
  
  //   //send the token
  //   res.status(200).json({
  //     message:"",
  //     success:true,
  //    user
  //   });
  
  
  //   }
  //   catch(error){
  
  //   }
  
  // });




// Server setup
app.listen(PORT, () => {
    console.log("Server is Running on ",PORT)
})
