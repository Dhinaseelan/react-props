import React, { use, useEffect, useState } from 'react'
import User from './User'
function Courcelist() {
    const [Courcelist1,setcource]=useState()
    const [error,seterror]=useState()
    useEffect(()=>{setTimeout(() => {
      fetch('http://localhost:3000/Courcelist1').then(Response=>{console.log(Response) 
          if(!Response.ok){
              throw Error("could't retrive data form server")
          }
          return Response.json()}
          ).then(data=>setcource(data)).catch((e)=>{seterror(e.message)})
    },1000)
    },[])
    function delectcource(id){
        console.log("hello")
        const deleted=Courcelist1.filter((a)=>a.id!=id);
        setcource(deleted);
    }

    
    // Courcelist1.sort((a,b)=>b.title-a.title);//sort method is used to sort price
    // const rating=Courcelist1.filter((a)=>a.rating>4)//filter method is used to sort by rating
  if(!Courcelist1){
    console.log("hello",error)
    return <>{!error&&<h1 style={{color:"black"}}>Loading...</h1>}
        {error&&<p style={{color:"black"}}>{error}</p>}</>
  }

    const Courcelist=Courcelist1.map((val)=><User img={val.img} price={val.price} title={val.title} display={val.display} rating={val.rating} id={val.id} delfun={delectcource}/>);
  return (
    <>
    {Courcelist}
    </>
  )
}

export default Courcelist