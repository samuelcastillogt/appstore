import React from 'react';

const Coment = (props) => {
    const coment = props.item
    return (
        <div className='coment-container'>
            <img src="./img/user.webp" alt="" className='rounded-circle'/>
            <div className="coment-content">
                <p className="font-weight-bold m-0" style={{fontSize:"12px"}}>{coment.autor}</p>
                <p >{coment.content}</p>
            </div>
        </div>
    );
};

export default Coment;