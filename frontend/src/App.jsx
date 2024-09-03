import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Nav from './components/Nav'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="bg-gray-200 bg-opacity-50 bg-blend-multiply">
<BrowserRouter>
      <Nav/>
          <Routes>

          
          <Route path="/" element={<Home/>}/>
         
           
            <Route path="/login" element={<Login/>}/>
          

          

            <Route path="/signup" element={<Signup/>}/>
            
          </Routes>
            </BrowserRouter>
        </div>
       
    </>
  )
}

export default App
