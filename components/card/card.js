import React from "react";

function Card(props) {
  return (
    <div className="card col col-2 col-sm-6" id={props.id}>
      <img src={props.src} />
      <button className="btn btn-secondary btn-c" onClick={props.handler}>
        {props.buttonName}
      </button>
    </div>
  );
}

export default Card;
