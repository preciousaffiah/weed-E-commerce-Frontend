import React from "react";
import logo2 from "../assets/Logo2.png";
import { BsHandbag } from "react-icons/bs";


export default function Navbar({ user_id, cartCount }) {
  

 

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.assign('/')
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-md-5 px-4 py-md-2 py-3">
        <div className="container-fluid col d-flex align-items-center justify-content-between mygap2 gap-sm-0 px-md-5 px-0">
          <img className="px-0 px-md-5 px-sm-0" src={logo2} alt="logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="d-md-flex d-block d-sm-block text-start p-0 pt-2 fw-medium m-0 justify-content-between mygap mf">
              <li className="list-group-item py-1 fw-medium">
                <a
                  className=" text-dark  link-underline link-underline-opacity-0"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="list-group-item py-1 fw-bold">
                <a
                  className="fw-bold text-dark link-offset-2 link-underline link-underline-opacity-0"
                  href="/shop"
                >
                  Shop
                </a>
              </li>
            </ul>
            <div className="d-flex d-md-flex d-sm-block text-sm-start align-items-center gap-3 mf">
              {user_id ? (
                <p
                  className="d-flex text-start py-1 fw-medium text-sm-start m-0 fw-normal text-dark link-offset-2 link-underline link-underline-opacity-0 pointer"
                  onClick={logout}
                >
                  LogOut
                </p>
              ) : (
                <a
                  href="/register"
                  className="d-flex text-start py-1 fw-medium text-sm-start m-0 fw-normal text-dark link-offset-2 link-underline link-underline-opacity-0"
                >
                  LogIn/Register
                </a>
              )}
              <a
                href="/cart"
                className="text-dark link-offset-2 link-underline link-underline-opacity-0"
              >
                <div className="d-flex py-1 fw-medium ">
                  <BsHandbag className="fs-4" />
                  <p className="px-1 bg-danger text-white rounded-5 mysz">
                    {cartCount}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
