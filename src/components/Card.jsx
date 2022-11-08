import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
  const handleData = ()=>{
    props.setModal(props.data)
  }
  return (
  <div className="card" style={{width: "150px", margin: "10px"}} onClick={handleData}>
    <img src={props.data.img} className="" alt="..." style={{padding: "10px"}}/>
      <div className="card-content">
        <div className="card-content-text">
          <p className="fw-bolder">{props.data.name}</p>
          <p className="fs-6">{props.data.developer}</p>
        </div>
        <FontAwesomeIcon icon="fa-regular fa-star" />
        <i class="fa-regular fa-star"></i>
      <p className='h5'>{props.data.price <= 0.5 ? "Free" : `$.${props.data.price}`}</p>
      </div>
</div>
    );
};

export default Card;