import React, { useState } from "react";
import axios from "axios";
import "../css/styles.css";
import { Link, Navigate } from "react-router-dom";
import Logo2 from "../assets/Logo2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../utils/APIroutes";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

export default function Login({ user_id }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    className: "toast-message",
  };
  if (user_id) {
    return <Navigate to="/" replace />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    try {
      axios.post(login, userData).then((response) => {
        if (response.data.status === "FAILED") {
          toast.error(response.data.message, toastOptions);
        } else {
          toast.success(response.data.message, toastOptions);

          localStorage.setItem(
            "loggedInUser",
            JSON.stringify(response.data.user.user_id)
          );
          user_id = JSON.parse(localStorage.getItem("loggedInUser"));
          window.location.assign('/')
          
        }
      });
    } catch (err) {
      console.error();
    }
  };

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="img register-bg py-md-5 py-0 js-fullheight bimage">
      <div className="container px-0">
        <div className="align-items-center bg-light min-vh-100 py-4 rounded-3">
          <div className="col-md-12">
            <section className="ftco-section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-lg-5">
                    <div className="login-wrap p-0">
                      <img
                        src={Logo2}
                        className="d-flex m-auto pb-4"
                        alt="img"
                      />

                      <h3 className="py-2 fs-5 text-center">
                        Already Have an account?
                      </h3>
                      <form
                        action="#"
                        className="signin-form"
                        onSubmit={handleSubmit}
                      >
                        <div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="emailname@email.com"
                              onChange={(e) => setEmail(e.target.value)}
                              required=""
                            />
                            {email.length < 1 ? (
                              <p className="fcm text-danger">
                                email should not be empty
                              </p>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div className="form-group">
                            <div className="toggle">
                              <input
                                type={passwordShown ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required=""
                              />
                              <span
                                className="d-flex px-1"
                                toggle="#password-field"
                                onClick={togglePassword}
                              >
                                {!passwordShown ? (
                                  <BiShow className="fa fa-fw field-icon toggle-password fa-eye" />
                                ) : (
                                  <BiHide className="fa fa-fw field-icon toggle-password fa-eye-slash" />
                                )}
                              </span>
                            </div>
                            {password.length < 1 ? (
                              <p className="fcm text-danger">
                                password should not be empty
                              </p>
                            ) : (
                              <p></p>
                            )}
                          </div>

                          <div className="form-group">
                            {email === " " ||
                            password === " " ||
                            email.length < 1 ? (
                              <div className="col extra3 testimony_name">
                                <p className="pt-4">
                                  Don't be scared, when you fill the form
                                  correctly your sign up button will show HERE!
                                </p>
                              </div>
                            ) : (
                              <button
                                type="submit"
                                className="mt-4 form-control register-bg text-light fw-medium border-light submit px-3"
                              >
                                Login{" "}
                              </button>
                            )}
                          </div>
                        </div>
                        <center>
                          <p>-or-</p>
                        </center>
                      </form>
                      {/* <GLogin/> */}
                      <br />
                      <p className="ta text-center">Don't have an account?</p>
                      <Link
                        to="/register"
                        className="d-flex decoration-none decoration-none form-control fit d-flex m-auto register-bg text-light fw-medium border-light submit px-3"
                      >
                        Register{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
