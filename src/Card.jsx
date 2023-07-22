import { useState } from "react";
import "./index.css";

import web from "../src/images/image3.jpg";

import { NavLink } from "react-router-dom";

const Set = () => {
  const [car, setCar] = useState({
   
    model: "Mustang",
    year: "1964",
    color: "red"

  });
  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }
  return <>
  <p>
  It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
</>
}

const Card = (props) => {
  return(
    <>
  

    
  <div className="col-md-4 col-10 mx-auto">
  <div className="card">
    
  <img src={props.imgsrc} className="card-img-top" alt="rops.imgsrc" />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
    <Set></Set>
  </div>
  </div>
  </div>
</>
  );
};

export default Card;