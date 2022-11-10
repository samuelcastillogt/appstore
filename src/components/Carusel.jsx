import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Carusel = (props) => {
  const [active, setActive] = useState(0);
  
  const reduce = () => {
    if (active == 0) {
      setActive(props.shots.length - 1);
    } else {
      setActive(active - 1);
    }
  };
  
  const add = () => {
    if (active == props.shots.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };
  return (
    <div className="carusel">
      <img src={props.shots[active]} alt="screenshot" />
      <div className="carrusel-buttons">
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" onClick={reduce} />
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" onClick={add} />
      </div>
    </div>
  );
};

export default Carusel;
