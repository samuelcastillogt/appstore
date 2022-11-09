import React from 'react';
import StarRanking from "./starRanking"
import Coment from './Coment';
import Carusel from './Carusel';
const Modal = (props) => {
    const item = props.item
    const closeModal = ()=> props.setModal(false)
    const comentarios =[
        {
            autor: "Juan Macario",
            content: "Excepteur sint occaecat cupidatat non proident"
        },
        {
            autor: "Juan Macario",
            content: "Excepteur sint occaecat cupidatat non proident"
        }
    ]
    return (
        <div className='modal- bg-white'>
            <div className="screenshot">
                <Carusel shots={item.screenShot}/>
            </div>
            <div className="modal-details">
            <img src={item.img} alt=""/>
            <div className="modal-details-text">
                <p className="bold">{item.name}</p> 
                <p style={{fontSize: "0.6em", lineHeight: 0.5}}>{item.developer}</p>
              <p className='p'>{item.description}</p> 
              <p className='h5'>{item.price <= 0.5 ? "Free" : `$.${item.price}`}</p>
            </div>
            </div>
            <div className="center-star">
                <StarRanking ranking={item.ranking} /> {item.ranking}
              </div>
            {
                comentarios.map(item=> <Coment item={item}/>)
            }
            <div className="buttons">
              <button onClick={closeModal} class="btn btn-secondary mx-1">Cerrar</button>
              <button onClick={closeModal} className="btn btn-success mx-1">Instalar</button>  
            </div>
            
        </div>
    );
};

export default Modal;