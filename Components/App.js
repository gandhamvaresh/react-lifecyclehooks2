import React,{useState, useEffect} from 'react';
// import { FetchData } from "./fetchData"

import '../style.css';
const initXY= {
  x: null,
  y: null
}

function app(){
  const [time, setTime] = useState(Date);
  const [xy,setXY] = useState(initXY);
  
  useEffect(()=>{
    let handle = setInterval(()=>{setTime(Date)},1000)
     return ()=> {clearInterval(handle);}
  })

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

  return(<div>Time is    -  : -   {time}
  <h3> {`X is: ${xy.x}  Y is: ${xy.y}`} </h3>
 
  </div>)
}

export default app;