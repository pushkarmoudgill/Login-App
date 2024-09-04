import React ,{useEffect,useState}from "react";

import { useNavigate } from "react-router-dom";

const Signup=()=>{
    const api_url=import.meta.env.VITE_BACKEND_URL;

    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    
    const[username,setUsername]=useState("");
    const navigate =useNavigate();

    // useEffect(()=>{
    //     const auth =localStorage.getItem('user');
    //       if(auth){
    //         navigate("/")
    //       }
    //         },[])
    const collectData=async()=>{
      //  console.warn(name,username,password);
        let result =await fetch('https://login-app-snol.vercel.app/signup',{
            method:'post',
            body:JSON.stringify({name,username,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
         const statusCode=result.status;

        result=await result.json();
       console.log(statusCode);
        if(statusCode===400){
            alert(result.message)
        }
        if(statusCode===200){
            alert("User Registered Successfully")
            // localStorage.setItem("user",JSON.stringify(result));
     
            
             //localStorage.removeItem('user.password');
            navigate('/login');
        }
      
     
    }
    return(
        
        <div className="flex justify-center items-center h-screen">
           
            <div className="w-96 p-6 shadow-lg bg-slate-400 rounded-md">

                
            <h1 className="text-2xl text-center font-extrabold">Register  </h1>
            
            <div class="mr-3 mt-3">
            <input className="inputBox  w-80" type="text" 
            value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
             </div>

             <div class="mr-3 mt-2">
            <input  className="inputBox w-80 " type="text" 
            value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Email"/>
            </div>
             <div class="mr-3 mt-2">
            <input  className="inputBox w-80" type="password"
             value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
              </div>
              <div class="mr-3 mt-2">
            <button onClick={collectData} className="appButton font-semibold outline-double
            "type="button">Sign up</button>
            </div>
        </div>
        </div>
    )
}
export default Signup;
