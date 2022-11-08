import React from 'react';

const Modal = (props) => {
    const item = props.item
    const closeModal = ()=> props.setModal(false)
    return (
        <div className='modal- bg-white'>
            <div className="screenshot">
                <img src={item.screenShot} alt="" />
            </div>
            <img src={item.img} alt="" className='modal-item'/>
            <h3>{item.name}</h3>
            <div className="buttons">
              <button onClick={closeModal} class="btn btn-secondary mx-1">Cerrar</button>
              <button onClick={closeModal} className="btn btn-success mx-1">Instalar</button>  
            </div>
            
        </div>
    );
};

export default Modal;