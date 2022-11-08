import React from 'react';

const Card = (props) => {
  const handleData = ()=>{
    props.setModal(props.data)
    document.style.background ="red"
  }
  return (
        <div className="card" style={{width: "150px", margin: "10px"}} onClick={handleData}>
  <img src={props.data.img} className="" alt="..." style={{padding: "10px"}}/>
    <div className="card-content">
      <div className="card-content-text">
              <p className="fw-bold">{props.data.name}</p>
      <p className="fs-6">{props.data.developer}</p>
      </div>

      <p className='h5'>{props.data.price <= 0.5 ? "Free" : `$.${props.data.price}`}</p>
    </div>
    
</div>
    );
};

export default Card;