import {useEffect, useState } from 'react'
const useFetch=(url)=>{
 const [Courcelist,setcource]=useState()
        const [errors,seterror]=useState()
     useEffect(()=>{
       
        setTimeout(() => {
          fetch(url).then(Response=>{console.log(Response) 
              if(!Response.ok){
                  throw Error("could't retrive data form server")
              }
              return Response.json()}
              ).then(data=>setcource(data)).catch((e)=>{seterror(e.message)})
        },1000)
        },[])
        return [Courcelist,errors]
}
export default useFetch;