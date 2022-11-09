import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Carusel = (props) => {
    const [active, setActive] = useState(0)
    const reduce = ()=>{
        if(active ==0){
            setActive(props.shots.lenght -1)
        }else{
            setActive(active -1)
        }
    }
    const add = ()=>{
        if(active ==props.shots.lenght){
            setActive(0)
        }else{
            setActive(active+1)
        }
    }
    console.log(active)
    return (
        <div className='carusel'>
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" onClick={reduce}/>
            <img src={props.shots[active]} alt="" />
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" onClick={add}/>
        </div>
    );
};

export default Carusel;