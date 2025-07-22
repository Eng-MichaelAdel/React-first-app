import React from "react";
import "./Contact.css"



export default function Contact() {
  return (
      <section id="Contact" className="bg-white mb-4">
        <div className="d-flex flex-column justify-content-around align-items-center">
          <h2 className="fs-1 fw-bolder text-uppercase pt-4 mb-3 text-SecColo">
            conatct section
          </h2>
          <div className="text-center StarStyle position-relative mb-3 text-SecColo">
            <i className="fa-solid fa-star px-3 text-SecColo  bg-white"></i>
          </div>
        </div>

        <div className="mx-auto mt-5 w-50 p-3">
            <input className="form-control px-12 py-3 mt-4" type="text" placeholder="user Name"/>
            <input className="form-control px-12 py-3 mt-4" type="text" placeholder="user Age"/>
            <input className="form-control px-12 py-3 mt-4" type="text" placeholder="user Email"/>
            <input className="form-control px-12 py-3 mt-4" type="text" placeholder="user Password"/>
            <button className="btn py-2 px-12 mt-4 bg-MainColo text-white">Send Message</button>
            

        </div>
      </section>
  );
}
