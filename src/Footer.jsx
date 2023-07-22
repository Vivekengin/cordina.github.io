import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faAdd, faUser, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

//import { NavLink } from 'react-router-dom';
import "./index.css";

const Footer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
return (
    <>
<div className="container-fluid nav_bg ">
<div className='row plr'>
<div className="col-md-12 mx-auto">
    
   

<footer className="page-footer shadow ccess ">
    <div className="d-flex flex-column mx-auto py-5">
      <div className="d-flex flex-wrap justify-content-between">
        <div className="align-self-center">

          <div className="mt-5">
            <button className="btn btn-dark btn-flat p-2">
            <FontAwesomeIcon icon={faAdd} size={'2x'} />

            </button>
            <button className="btn btn-dark btn-flat p-2">
            <FontAwesomeIcon icon={faUser} size={'2x'} />
            </button>
            <button className="btn btn-dark btn-flat p-2">
            <FontAwesomeIcon icon={faAddressBook} size={'2x'} />
            </button>
            <ul>
      {posts.map(post => (
        <li key={post.id=1}>{post.username}</li>

      ))}
    </ul>
          </div>
        </div>
        <div>
          <p className="h5 mb-4">Our services</p>
          <ul className="p-0">
            <li className="my-2">
              <a className="text-dark" href="/">Resources</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">About Us</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">Contact</a>
            </li>
            <li className="my-2"><a className="text-dark" href="/">Blog</a></li>
          </ul>
        </div>
        <div>
          <p className="h5 mb-4">Help</p>
          <ul className="p-0">
            <li className="my-2">
              <a className="text-dark" href="/">Support</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">Sign Up</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">Sign In</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="h5 mb-4">Contact</p>
          <ul className="p-0">
            <li className="my-2">
              <a className="text-dark" href="/">Support</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">Sign Up</a>
            </li>
            <li className="my-2">
              <a className="text-dark" href="/">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
      <small className="text-center mt-5">&copy; Devwares, 2020. All rights reserved dfhryjhdfghf.</small>
    </div>
  </footer>
</div>
    
    </div>
</div>
    </>
);
};

export default Footer;