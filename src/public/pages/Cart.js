import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/styles.css";
import emptyCart from "../assets/emptyCart.jpg";
import Footer from "../components/Footer";
import { getcart } from "../utils/APIroutes";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";

export default function Cart({
  count,
  setCount,
  cartCount,
  setMycartCount,
  user_id,
}) {
  const [items, setItems] = useState([0]);
  const [sub_total, setSub_Total] = useState(0);
  const [total, setTotal] = useState(0);
  const shipping = 20;
  const tax = 5;

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    className: "toast-message",
  };

  if (!user_id) {
    return <Navigate to="/login" replace />;
  } else {
    try {
      axios.get(`${getcart}/${user_id}`).then((response) => {
        if (response.data.status === "FAILED") {
          toast.error(response.data.msg, toastOptions);
        } else {
          setItems(response.data.cart);
        }
        setSub_Total(
          items.reduce(
            (accumulator, product) => +accumulator + +product.sub_total,
            0
          )
        );
        setTotal(sub_total + shipping + tax);
      });
    } catch (error) {
      toast.error("An error occured, please try again", toastOptions);
    }
  }

  return (
    <div className="container-fluid p-0 text-center">
      <div>
        <section>
          <Navbar
            cartCount={cartCount}
            setMycartCount={setMycartCount}
            count={count}
            setCount={setCount}
            user_id={user_id}
          />
        </section>

        {items.length > 0 ? (
          <section>
            <div className="col-12 pt-5 px-4">
              <table className="table" id="table">
                <tbody id="tbody">
                  <tr className="table-headers">
                    <td className="fw-bold">Product name</td>
                    <td className="fw-bold">Price</td>
                    <td className="fw-bold">Quantity</td>
                    <td className="fw-bold">Subtotal</td>
                  </tr>
                  {items.map((item) => (
                      <tr key={item._id} className="product-checkout">
                        <td>
                          <a className="text-decoration-none text-dark" href={`/product/${item.itemId}`}>
                          <img
                            src={item.item_img}
                            alt={item.item_name}
                            className="w-5rem"
                          />
                          <p className="fr m-0">{item.item_name}</p>
                          </a>
                        </td>
                        <td>
                          <p className="unit-price">${item.price}</p>
                        </td>
                        <td>
                          <div id="itemQuantity">
                            <p id="qtyInput">{item.qty}</p>
                          </div>
                        </td>

                        <td id="itemSubtotal">${item.sub_total}</td>
                      </tr>
                  ))}

                  <tr className="border-0" id="totals">
                    <td className="border-0">
                      <p className="fw-bold" id="shippingTotal">
                        Shipping:
                      </p>
                      <p className="fw-bold">Tax:</p>
                      <p className="fw-bold" id="total-subtotal">
                        Total:{" "}
                      </p>
                      <p className="fw-bold" id="totalTotal"></p>
                    </td>
                    <td className="border-0" id="total-values">
                      <p id="subtotalValue">${shipping}</p>
                      <p id="shippingValue">${tax}</p>
                      <p className="total-value fw-bold">
                        ${total.toLocaleString()}
                        <span id="totalValue"></span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="weed2_txt pb-4">
                <button className="py-2 px-5 fs-6">Checkout</button>
              </div>
            </div>
          </section>
        ) : (
          <div className="py-5">
            <h2 className="fw-bold fst-italic pb-4">Nothing's here :(</h2>
            <img src={emptyCart} alt="empty cart" className="cart" />
          </div>
        )}

        <section className=" steps2 px-3 pt-5">
          <Footer />
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}
