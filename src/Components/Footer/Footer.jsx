import React from "react";
import "../Footer/Footer.css"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="p-40 bg-SecColo">
          <div className="p-4  d-flex justify-content-between align-items-center flex-column flex-sm-row">
            <div className="text-center p-3 col-sm-4">
              <h3 className="pt-20 mb-2 text-uppercase">location</h3>
              <p className="mb-3">2215 John Daniel Drive</p>
              <p className="mb-3">Clark, MO 65243</p>
            </div>

            <div className="text-center p-3 col-sm-4">
              <h3 className="pt-20 mb-2 text-uppercase">around the web</h3>
              <ul className="list-unstyled d-flex justify-content-center column-gap-2 flex-wrap">
                <li className="LinkList">
                    <a href="">
                      <i class="fa-brands fa-facebook-f text-white"></i>
                    </a>
                </li>
                <li className="LinkList">
                    <a href="">
                      <i class="fa-brands fa-twitter text-white"></i>
                    </a>
                </li>
                <li className="LinkList">
                    <a href="">
                      <i class="fa-brands fa-linkedin-in text-white"></i>
                    </a>
                </li>
                <li className="LinkList">
                    <a href="">
                      <i class="fa-solid fa-globe text-white"></i>
                    </a>
                </li>
              </ul>
            </div>

            <div className="text-center p-3 col-sm-4">
              <h3 className="pt-20 mb-2 text-uppercase">ABOUT FREELANCER</h3>
              <p className="mb-3">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>

        <div className="copyrightFoot text-center">
          <p className="mb-3">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
