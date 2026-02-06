import React from 'react'
import User from './User'
import Boot from './img/boot.png'
import tail from './img/tailwind.png'
import js from './img/js.png'
function Courcelist() {
    const Courcelist1=[{
        img:Boot,
        price:"bootstrap",
        title:199,
        display:true
        ,rating:3

    },{
        img:tail,
        price:" tailwind",
        title:199
        ,display:true,rating:5
    },{
        img:Boot,
        price:"react",
        title:499,
        display:true,rating:4.5
    },{
        img:js,
        price:"Java Script",
        title:299
        ,display:true,rating:4
    }
];
    Courcelist1.sort((a,b)=>b.title-a.title);//sort method is used to sort price
    const rating=Courcelist1.filter((a)=>a.rating>4)//filter method is used to sort by rating
    const Courcelist=rating.map((val)=><User img={val.img} price={val.price} title={val.title} display={val.display} rating={val.rating}/>);
  return (
    <>
    {Courcelist}
    </>
  )
}

export default Courcelist