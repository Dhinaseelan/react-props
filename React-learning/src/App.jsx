
import User from './assets/User'
import './App.css'
import IMG from './assets/img/A YouTube-style thum.png'
import Boot from './assets/img/boot.png'
import Tail from './assets/img/tailwind.png'
import Courcelist from './assets/courcelist'
import { useState } from 'react'

function App() {
  let [count,setcount]=useState(0);
  const userdata={img:IMG,price:"123",title:"html"}
  return (
    <>
    <div className='banner'>
    <Courcelist/>
    </div>
    <div className='counterdiv'><h1 className='count'>{count}</h1>
    <button onClick={()=>setcount(count+1)} >count</button></div>
    </>
    
  )
}


export {App}
