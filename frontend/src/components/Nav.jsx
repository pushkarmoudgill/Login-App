import React from 'react';

import {Link,useNavigate} from 'react-router-dom'
const Nav=()=>{

    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/')
    }
    return (
        <div className="flex justify-between items-center bg-gray-500 p-4 inline-block">
         
         
            {/* <ul className="Nav">
           
            <li class="font-bold"><Link to="/problems">Problems</Link></li>
                
                
                <li class="font-bold"><Link to="/addProblem">Add Problem</Link></li>
                <li class="font-bold"><Link onClick={logout} to="/">Logout</Link></li>
            </ul> */}
            
            <ul className="Nav inline">
                 <li class="font-bold"><Link to="/">Home</Link></li>
                 <li class="ml-10 font-bold "><Link to="/signup">Sign up</Link></li>
                 <li class="font-bold"><Link to="/login">Login</Link></li>
            </ul>


{/* <ul className="Nav">
           
           <li class="font-bold"><Link to="/problems">Problems</Link></li>
               <li class="font-bold"><Link onClick={logout} to="/">Logout</Link></li>
               
               <li class="font-bold"><Link to="/addProblem">Add Problem</Link></li>
           </ul>
           
           <ul className="Nav">
                <li class="font-bold"><Link to="/">Home</Link></li>
                <li class="ml-10 font-bold "><Link to="/signup">Sign up</Link></li>
                <li class="font-bold"><Link to="/login">Login</Link></li>
           </ul> */}

        </div>
    )
}

export default Nav;
