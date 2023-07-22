import React from "react";
import web from "../src/images/image3.jpg";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return(
    <>
<section id="header" className="d-flex align-item-center">
<div className="container-fluid">
<div className='row'>
<div className="col-md-11 mx-auto">
  <div className="row">
<div className="col-md-5 pt-lg-0 order-2 order-lg-1 margincsst d-flex justify-content-center flex-column">
  <h1>{props.name} <strong className="brand-name">With us we are the best</strong></h1>
  <h5 className="my-3">We are the team of talented developer making web designs</h5>
  <div className="mt-3">
    <NavLink to={props.visit} className="btn btn-primary">{props.btname}</NavLink>
  </div>
</div>

<div className="col-md-6 order1 order-lg-2 header-img margincsst">
  <img src={props.imgsrc} className="img-fluid animated" alt="pic" />
</div>
</div>
  </div>
  </div>
</div>
</section>
</>
  );
};

export default Common;