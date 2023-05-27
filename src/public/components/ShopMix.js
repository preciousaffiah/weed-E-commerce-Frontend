import React from "react";
import appleGummies from "../assets/AppleGummies.png";
import "../css/styles.css";
import { AiFillStar } from "react-icons/ai";

export default function ShopMix() {
  return (
    <div className="row mix rounded-3 p-md-5 px-2 pt-3 pb-4 d-flex align-items-center justify-content-center">
      <div className="col-12 col-md-6 col-sm-12 p-md-0 pb-4">
        <div className="weed2_txt text-start">
          <p className="pt-3">CONCENTRATES</p>
          <h4 className="fs-3 fw-bold m-0 text-light">Mix And Match </h4>
          <h4 className="fs-3 fw-bold text-light">
            Shatter/Budder 28g <br />
            (4 X 7G){" "}
          </h4>

          <div className="ingredient">
            <div className="col text-start d-flex justify-content-start gap-2">
              <div className="text-warning">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="i m-0 text-light">|</p>
              <div className="text-light">on 135 Reviews</div>
            </div>
          </div>
          <div className="d-flex justify-content-evenly align-items-center w-6 pb-3 pt-2">
            <h5 className="m-0 fs-5 text-warning">
              <del>$140.00</del>
            </h5>
          </div>
          <button className="fs-md-6">Coming Soon!</button>
        </div>
      </div>
      <div className="col-12 col-md-6 col-sm-12">
        <div className="shop_weed1">
          <img src={appleGummies} alt="appleGummies" className="pb-2" />
        </div>
      </div>
    </div>
  );
}
