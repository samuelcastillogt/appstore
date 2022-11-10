import React from "react";
import StarRanking from "./starRanking";
import Coment from "./Coment";
import Carusel from "./Carusel";
import comentarios from "../comentarios";
const Modal = (props) => {
  const item = props.item;
  const rankingColor = item.ranking <= 2 ? "red" : "green";
  const closeModal = () => props.setModal(false);

  return (
    <React.Fragment>
      <div
        className="dark"
        style={{ height: window.screen.height }}
      ></div>
      <div className="modal- mx-auto d-flex flex-column bg-white position-fixed top-1 start-0">
        <div className="screenshot">
          <Carusel shots={item.screenShot} />
        </div>
        <div className="modal-details">
          <img src={item.img} alt="" />
          <div className="modal-details-text">
            <p className="fw-bolder" style={{ margin: 0 }}>
              {item.name}
            </p>
            <p style={{ fontSize: "0.6em", lineHeight: 0.7, margin: 0 }}>
              {item.developer}
            </p>
            <p className="p">{item.description}</p>
            <p className="h5">
              {item.price <= 0.5 ? "Free" : `$.${item.price}`}
            </p>
          </div>
        </div>
        <div className={"center-star p-2"}>
          <StarRanking
            ranking={item.ranking}
            style={{ color: rankingColor }}
            card={false}
          />{" "}
          <span
            style={{
              color: rankingColor,
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            {item.ranking}
          </span>
        </div>
        {comentarios.map((item) => (
          <Coment item={item} key={item.id} />
        ))}
        <div className="buttons">
          <button onClick={closeModal} className="btn btn-secondary mx-1">
            Cerrar
          </button>
          <button onClick={closeModal} className="btn btn-success mx-1">
            Instalar
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
