import React from "react";
import "./Details.css";
import { Media } from "react-bootstrap";

const Details = () => {
  return (
    <div className="main-details" id = "about">
      <div className="abt-us-heading">
        <h2>About Us</h2>
      </div>
      <div className = "bkwas">
      <div className = "nikhil">
        <Media>
          <img
            width={250}
            height={250}
            className="align-self-start mr-3"
            src= {require("./Nik.jpg")}
            alt="Nikhil Sati"
          />
          <Media.Body>
            <h5>Nikhil Sati</h5>
            <p>
              Nikhil Sati is the Founder of <strong>CloneAnyWebsite.com .</strong>  .Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>

            <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </Media.Body>
        </Media>
        </div>
        <div className = "sohaib">
        <Media>
          <img
            width={250}
            height={250}
            className="align-self-center mr-3"
            src= {require("./Shoaib.jpg")}
            alt="Mohd. Shoaib Rayeen"
          />
          <Media.Body>
            <h5>Mohd. Shoaib Rayeen</h5>
            <p>
              Mohd. Shoaib is the CEO of <strong>CloneAnyWebsite.com .</strong>. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>

            <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </Media.Body>
        </Media>
        </div>
        <div className = "kunal">
        <Media>
          <img
            width={250}
            height={250}
            className="align-self-end mr-3"
            src = {require("./KP.jpg")}
            alt="Kunal Pant"
          />
          <Media.Body>
            <h5>Kunal Pant</h5>
            <p>
              Kunal Pant is a Senior Software Engineer at <strong>CloneAnyWebsite.com .</strong>.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>

            <p className="mb-0">
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
              eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </Media.Body>
        </Media>
        </div>
        </div>
      </div>
    
  );
};

export default Details;
