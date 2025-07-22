import React, { useState } from "react";
import "./Portfolio.css";
import img1 from "../../assets/Imgs/Portfolio (1).png"
import img2 from "../../assets/Imgs/Portfolio (2).png"
import img3 from "../../assets/Imgs/Portfolio (3).png"
import img4 from "../../assets/Imgs/Portfolio (4).png"
import img5 from "../../assets/Imgs/Portfolio (5).png"
import img6 from "../../assets/Imgs/Portfolio (6).png"

export default function Portfolio() {
  const [ModelImg, setModelImg] = useState(null);
  const [ModelShow, setModelShow] = useState(false);
  const img = [img1 ,img2 ,img3 ,img4 ,img5 ,img6]

  function HandleModelonClick(PicExtenstion) {
    setModelImg(PicExtenstion)
    setModelShow(true)
  }

  function HandleCloseModel () {
    setModelShow(false)
  }

  function HandlePicITems (noOfItems) {
    let PicItem = [];

    for(let i=0 ; i<noOfItems ; i++){
        PicItem.push(
            <div key={i} className="col-md-6 col-lg-4 ">
              <div className="PicItem rounded-3 overflow-hidden position-relative">
                <img onClick={(eInfo) => { HandleModelonClick(eInfo.target.attributes.src.nodeValue)}}
                  className="img-fluid" src = {img[i]} alt=""/>
                <div className="overlay">
                  <i className="fa-solid fa-plus text-white"></i>
                </div>
              </div>
            </div>
        )       
    }
    return PicItem;
  }


  return (
      <section className="bg-white mb-4">
        <div className="d-flex flex-column justify-content-around align-items-center">
          <h2 className="fs-1 fw-bolder text-uppercase pt-4 mb-3 text-SecColo">
            about component
          </h2>
          <div className="text-center StarStyle position-relative mb-3 text-SecColo">
            <i className="fa-solid fa-star px-3 text-SecColo  bg-white"></i>
          </div>
        </div>

        <div className="container">
          <div className="row g-5">

            { HandlePicITems(6) }

            {ModelShow && (
              <div onClick={HandleCloseModel} className="PicModel">
                <img onClick={(eInfo) =>eInfo.stopPropagation() } style={{ width: "600px" }} src={ModelImg} alt="model"/>
              </div>
            )}

          </div>
        </div>
      </section>
  );
}
