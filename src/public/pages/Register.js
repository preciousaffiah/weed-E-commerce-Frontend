import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/styles.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Logo2 from "../assets/Logo2.png";
import { register } from "../utils/APIroutes";
import { BiHide, BiShow } from "react-icons/bi";

export default function Register({ user_id, setUser_id }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [first_name, setFirst_name] = useState(false);
  const [last_name, setLast_name] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Simulating an asynchronous task
    setTimeout(() => {
      // Task completed, set isLoading to false
      setLoading(false);
    }, 3000);
  };

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
    if (
      first_name === false ||
      last_name === false ||
      email === false ||
      password === false ||
      confirmPassword === false
    ) {

      toast.error("Fields must not be left empty", toastOptions);
    } else {
      const userData = {
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: password,
      };

      try {
        axios.post(register, userData).then((response) => {
          if (response.data.status === "FAILED") {
            toast.error(response.data.msg, toastOptions);
          } else {
            toast.success(response.data.msg, toastOptions);
            localStorage.setItem(
              "loggedInUser",
              JSON.stringify(response.data.user._id)
            );
            user_id = JSON.parse(localStorage.getItem("loggedInUser"));
            console.log(response.data);
            window.location.assign("/");
          }
        });
      } catch (err) {
        console.error();
      }
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
                        alt="img"
                        className="d-flex m-auto pb-4"
                      />

                      <h3 className="py-2 fs-5 text-center">
                        Don't Have an account?
                      </h3>
                      <form
                        action="#"
                        className="signin-form"
                        onSubmit={handleSubmit}
                      >
                        <div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="first name"
                              onChange={(e) => setFirst_name(e.target.value)}
                              required=""
                            />
                            {first_name.length < 1 ? (
                              <p className="fcm text-danger">
                                name should not be empty
                              </p>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="last name"
                              onChange={(e) => setLast_name(e.target.value)}
                              required=""
                            />
                            {last_name.length < 1 ? (
                              <p className="fcm text-danger">
                                name should not be empty
                              </p>
                            ) : (
                              <p></p>
                            )}
                          </div>
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
                            {password.length < 8 ? (
                              <p className="fcm text-danger">
                                password should not be less than 8 characters
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
                                placeholder="Confirm Password"
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                                required=""
                              />
                              <span
                                toggle="#password-field"
                                onClick={togglePassword}
                                className="d-flex px-1"
                              >
                                {!passwordShown ? (
                                  <BiShow className="fa fa-fw field-icon toggle-password fa-eye" />
                                ) : (
                                  <BiHide className="fa fa-fw field-icon toggle-password fa-eye-slash" />
                                )}
                              </span>
                            </div>
                            {confirmPassword !== password ? (
                              <p className="fcm text-danger">
                                passwords don't match
                              </p>
                            ) : (
                              <p></p>
                            )}
                          </div>
                          <div className="form-group">
                            {first_name === " " ||
                            last_name === " " ||
                            email === " " ||
                            password === " " ||
                            confirmPassword !== password ||
                            first_name.length < 1 ||
                            last_name.length < 1 ||
                            email.length < 1 ||
                            password.length < 8 ? (
                              <div className="col extra3 testimony_name">
                                <p className="pt-4">
                                  Don't be scared, when you fill the form
                                  correctly your sign up button will show HERE!
                                </p>
                              </div>
                            ) : (
                              <button
                                type="submit"
                                onClick={(e) => {
                                  setLoading(true);
                                  handleClick();
                                }}
                                className="mt-4 form-control register-bg text-light fw-medium border-light submit px-3"
                              >
                                {loading ? (
                                  <div
                                    className="spinner-border text-light"
                                    role="status"
                                  >
                                    <span className="sr-only"></span>
                                  </div>
                                ) : (
                                  <p className="login m-0">Register</p>
                                )}
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
                      <p className="ta text-center">Already have an account?</p>
                      <Link
                        to="/login"
                        className="d-flex decoration-none decoration-none form-control fit d-flex m-auto register-bg text-light fw-medium border-light submit px-3"
                      >
                        Login{" "}
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
