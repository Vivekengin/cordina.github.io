import React from "react";
import web from "../src/images/image3.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
  return(
    <>
<Common
 name="Grow your business with us" 
 imgsrc={web} 
 visit="/service" 
 btname= "Get Started" />
</>
  );
};

export default Home;