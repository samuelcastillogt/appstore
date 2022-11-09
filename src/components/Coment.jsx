import React from 'react';

const Coment = (props) => {
    const coment = props.item
    return (
        <div className='coment-container'>
            <img src="./img/user.webp" alt="" />
            <div className="coment-content">
                <p style={{fontWeight: "bold", margin: 0, fontSize:"12px"}}>{coment.autor}</p>
                <p >{coment.content}</p>
            </div>
        </div>
    );
};

export default Coment;