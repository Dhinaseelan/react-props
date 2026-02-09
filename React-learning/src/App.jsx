
import User from './assets/User'
import './App.css'
import Courcelist from './assets/courcelist'
import { useState } from 'react'

function App() {
  let [count,setcount]=useState(0);
  
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
