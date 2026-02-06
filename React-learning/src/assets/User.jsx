import PropTypes from 'prop-types';
import './user.css';

function User({ img, price, title, display ,rating}) {
  if (display==true) {
    return (
      <div className="box">
        <img src={img} alt="user" />
        <h3>{price}</h3>
        <h4> Rating:<span style={{color:"red"}}>{rating}</span></h4>
        <h2>${title}</h2>
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