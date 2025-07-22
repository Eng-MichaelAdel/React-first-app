import React from "react";
import "./Home.css";

export default function AppHome() {
  return (
      <header >
        <div className="d-flex flex-column justify-content-around align-items-center">
          <div className="mb-3">
            <img
              style={{ width: "250px" }}
              src="/Imgs/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg"
              alt=""
            />
          </div>
          <h2 className="fs-1 fw-bolder text-uppercase pt-4 mb-3">
            Start FrameWork
          </h2>
          <div className="text-center StarStyle position-relative mb-3 text-white ">
            <i class="fa-solid fa-star px-3 bg-MainColo"></i>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
  );
}
