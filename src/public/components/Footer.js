import React from "react";
import logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <div className="container-fluid px-md-5 px-3 logo pt-5 pb-3">
      <div className="row text-light py-5">
        <div className="col">
          <img src={logo} alt="logo" className="d-flex justify-content-start" />
          <p className="text-start pt-2">
            #1 Canadian top rated online dispensary that meets the customers
            needs in every single medical marijuana aspect. The team here at
            TopShelfBC is heavily involved in the Canadian cannabis industry for
            over 15 years. We strive to provide the top quality products,
            service and care at the lowest prices you’ll ever find.
          </p>
        </div>
        <div className="col">
          <h5 className="fw-bold">CONTACT US</h5>
          <p className="">info@topshelfbc.cc</p>
        </div>
        <div className="col text-start">
          <h5>MORE</h5>
          <ul className="p-0">
            <li className="list-group-item">Buy weed online in Canada</li>
            <li className="list-group-item">Buy weed online in Canada</li>
            <li className="list-group-item">Buy weed online in Canada</li>
            <li className="list-group-item">Buy weed online in Canada</li>
            <li className="list-group-item">Buy weed online in Canada</li>
          </ul>
        </div>
      </div>
      <div className="row pt-5 border-top myborder">
        <div className="col d-md-flex d-block justify-content-between">
          <p>© 2022 Top Shelf BC. All Rights Reserved. </p>
          <ul className="d-flex gap-md-3 gap-1 p-0 justify-content-around">
            <li className="list-group-item">Out Of Stock</li>
            <li className="list-group-item">Privacy Policy</li>
            <li className="list-group-item">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
