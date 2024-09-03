import React ,{useEffect, useState}from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>{
  const api_url=import.meta.env.VITE_BACKEND_URL;

  //console.log("aa",api_url);

  
    const [username,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate =useNavigate();
    const randomString=Math.random().toString(36).slice(8);

    const [captcha, setcaptcha] = useState(randomString);
    useEffect(()=>{
const auth =localStorage.getItem('user');

//   if(auth){
//     navigate("/problems")
//   }
    },[])

   

       

        const refereshString =()=>{
              setcaptcha(Math.random().toString(36).slice(8));
        }

    
    const handleLogin= async()=>{
        //console.warn(username,password)
        let result =await fetch('http://localhost:8081/login',{
           method:'post',
           body:JSON.stringify({username,password}),
           headers:{
            'Content-Type':'application/json'
        },
    
    
        });
       if(result.status===400){
        alert("Please enter correct Details");
       }
        
        result=await result.json();
        console.warn(result)

alert(result.message);
   

        }
    return (
        <div className="flex justify-center items-center h-screen">
               
             <div className="w-96 p-6 shadow-lg bg-slate-400 rounded-md">
            

                <h1 className="text-2xl text-center font-extrabold">Login  </h1>
                 <div class="mr-3 mt-2">
                <input  className="inputBox w-80 " type="text" 
                value={username} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
                </div>
                 <div class="mr-3 mt-2">
                <input  className="inputBox w-80" type="password"
                 value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
                  </div>

                 


                  <div class="mr-3 mt-2">
                <button onClick={handleLogin} className="appButton font-bold outline-double
                "type="button">Sign In</button>
                </div>
                  


            </div>
            </div>
        )
    
};


export default Login;