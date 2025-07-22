import React from "react";
import "./About.css";

export default function About() {
  return (
      <section className="bg-MainColo" >
        <div className="container">
          <div className="d-flex flex-column justify-content-around align-items-center">
            <h2 className="fs-1 fw-bolder text-uppercase pt-4 mb-3">
              about component
            </h2>
            <div className="text-center StarStyle position-relative mb-3 text-white ">
              <i class="fa-solid fa-star px-3 bg-MainColo"></i>
            </div>
          </div>
          <div className="mb-3 px-5 d-flex flex-wrap flex-md-nowrap justify-content-center align-items-center">
            <p className="col-md-6 px-12 ps-md-4">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="col-md-6 px-12 pe-md-4">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </section>
  );
}
