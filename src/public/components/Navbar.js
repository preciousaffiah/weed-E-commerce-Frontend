import React, { useEffect, useState } from "react";
import logo2 from "../assets/Logo2.png";
import { BsHandbag } from "react-icons/bs";
import axios from "axios";
import { getcart } from "../utils/APIroutes";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Navbar({ count }) {
  const [cookies] = useCookies(["id"]);
  const [cartCount, setMycartCount] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.id) {
      axios.get(`${getcart}/${cookies.id}`).then((response) => {
        if (response.data.status === "SUCCESS") {
          setMycartCount(response.data.message.length);
        }
      });
    }
  }, [count, cookies.id]);

  const logout = () => {
    navigate("/");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary px-md-5 px-4 py-md-2 py-3">
        <div class="container-fluid col d-flex align-items-center justify-content-between mygap2 gap-sm-0 px-md-5 px-0">
          <img className="px-0 px-md-5 px-sm-0" src={logo2} alt="logo" />

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
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
              <li className="list-group-item py-1 fw-medium">
                <a
                  className=" text-dark link-offset-2 link-underline link-underline-opacity-0"
                  href="/shop"
                >
                  Shop
                </a>
              </li>
            </ul>
            <div className="d-flex d-md-flex d-sm-block text-sm-start align-items-center gap-3 mf">
              {cookies.id ? (
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
                href={`/cart`}
                className="text-dark link-offset-2 link-underline link-underline-opacity-0"
              >
                <div className="d-flex py-1 fw-medium ">
                  <BsHandbag className="fs-4" />
                  <p className="px-1 bg-danger text-white rounded-5 mysz">
                    {+cartCount + count}
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
