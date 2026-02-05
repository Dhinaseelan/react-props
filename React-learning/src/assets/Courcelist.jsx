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

    },{
        img:tail,
        price:" tailwind",
        title:199
        ,display:true
    },{
        img:Boot,
        price:"react",
        title:499,
        display:true
    },{
        img:js,
        price:"Java Script",
        title:299
        ,display:true
    }
];
    const Courcelist=Courcelist1.map((val)=><User img={val.img} price={val.price} title={val.price} display={val.display}/>);
  return (
    <>
    {Courcelist}
    </>
  )
}

export default Courcelist