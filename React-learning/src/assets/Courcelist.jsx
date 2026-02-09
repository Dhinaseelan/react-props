import React, { use, useEffect, useState } from 'react'
import User from './User'
function Courcelist() {
    const [Courcelist1,setcource]=useState()
    useEffect(()=>{
        fetch('http://localhost:3000/Courcelist1').then(Response=>Response.json()).then(data=>setcource(data))
    },[])
    function delectcource(id){
        console.log("hello")
        const deleted=Courcelist1.filter((a)=>a.id!=id);
        setcource(deleted);
    }

    
    // Courcelist1.sort((a,b)=>b.title-a.title);//sort method is used to sort price
    // const rating=Courcelist1.filter((a)=>a.rating>4)//filter method is used to sort by rating
    if(!Courcelist1)return
    const Courcelist=Courcelist1.map((val)=><User img={val.img} price={val.price} title={val.title} display={val.display} rating={val.rating} id={val.id} delfun={delectcource}/>);
  return (
    <>
    {Courcelist}
    </>
  )
}

export default Courcelist