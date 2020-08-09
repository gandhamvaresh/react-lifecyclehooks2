import React,{useState, useEffect,useMemo} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import  Child  from "./Child"
import  Contact  from "./contact"
import  About  from "./about"
import FetchData from './fetchData'
import usePrevious from "../hooks/usePrevious"
import messageContext from '../context/messageContext';

import '../style.css';
const initXY= {
  x: null,
  y: null
}

function app(){
  const [time, setTime] = useState(Date);
  const [xy,setXY] = useState(initXY);
  const [i,setI] = useState(20);
  const previousValue = usePrevious(i)
  const [user, setUser] =useState(false);
  const [message, setMessage] =useState("I am being shared");

  useEffect(()=>{
    let handle = setInterval(()=>{setTime(Date)},1000)
     return ()=> {clearInterval(handle);}
  })

  const memo = useMemo(()=>{
   return <Child />
  },[])

function mousehandle(e){
 setXY({
   x: e.clientX,
   y: e.clientY })
}
  useEffect(()=>{
    window.addEventListener('mousemove',mousehandle)
    return ()=>{
      window.removeEventListener('mousemove', mousehandle);
    }
  },[])
  function clickHandle(){
      setI(i+1)
  }
  function userLoginHandle(){
    setUser(!user);
  }
  return( <BrowserRouter>
          <messageContext.Provider value={[message, setMessage]}> 
   <div>{/* Time is    -  : -   {time}
  <h3> {`X is: ${xy.x}  Y is: ${xy.y}`} </h3>
   {i}
   <Child />  ---------   {memo} 
     <h3> previousValue is :  {previousValue}</h3>
   <button onClick={clickHandle}> count++</button>
    */}
 <ul className='ul-style'>
 <li className='li-style'> <Link className='link-style' to='/'>home</Link></li>
  <li className='li-style'><Link  className='link-style'  to='/about'>About</Link></li>
   <li className='li-style'><Link  className='link-style'  to='/contact'>Contact</Link></li>
 <li className='li-style'><Link  className='link-style' to='/user/Vaaee/Keaas'>UserFN</Link></li>
 </ul>  
 
 
  
  <Route path='/' exact render={()=>{ return <h1> main route</h1>}} />
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
  <Route path='/user/:fname/:lname' 
                render={({match})=>{ return user? (
                <h1> about {match.params.fname} route {match.params.lname}</h1>): <Redirect to='/' /> }} />
  <Route path='/fetchData' component={FetchData} />
  <button onClick={userLoginHandle}> {user ? "login" : "logout"}</button> 
  </div>
  </messageContext.Provider>
  </BrowserRouter>
  )
  }

export default app;