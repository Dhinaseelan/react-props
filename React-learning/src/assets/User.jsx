import PropTypes from 'prop-types';
import './user.css';
import { useState } from 'react';

function User({ img, price, title, display ,rating,id,delfun}) {
  const [buy,setbuy]=useState(false);
  const [dis,setdis]=useState()
  const [del,setdel]=useState();
  const discountap=(offer)=>{alert(price+" purched "+offer+"% offer aplied are you sure to buy")
    function recipt(){
      setbuy(true);
        setdis(title-(offer/100*title))
        alert(`total bill: ${title - (offer / 100 * title)}`)
        console.log("total bill: ",(title-(offer/100*title)))
        
    }
    recipt()
    
  }
  if (display==true) {
    return (
      <div className="box">
        <img src={img} alt="user" />
        <h3>{price}</h3>
        <h4> Rating:<span style={{color:"red"}}>{rating}</span></h4>
        <h2>${dis?dis:title}</h2>
        <button onClick={()=>discountap(20)}>Buy Now</button><button  onClick={()=>delfun(id)}>Delete</button>
        <p>{buy?"already purched":"Buy Now"}</p>
      </div>
    );
  } else {
    return (
      <div className="box">
        <h1>Content is not available</h1>
      </div>
    );
  }
}

User.propTypes = {
  img: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  display: PropTypes.bool
};

export default User;