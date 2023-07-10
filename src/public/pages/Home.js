import React from "react";
import "../css/styles.css";
import shipping from "../assets/shipping.png";
import security from "../assets/security.png";
import pricing from "../assets/pricing.png";
import refer from "../assets/refer.png";
import registerIcon from "../assets/registerIcon.png";
import shopIcon from "../assets/shopIcon.png";
import paymentIcon from "../assets/paymentIcon.png";
import relaxIcon from "../assets/relaxIcon.png";
import Card from "../components/Card";
import TestimonyCard from "../components/TestimonyCard";
import CartegoryCard from "../components/CartegoryCard";
import Footer from "../components/Footer";
import Card2 from "../components/Card2";
import { GiChestnutLeaf } from "react-icons/gi";
import Navbar from "../components/Navbar";


export default function Home({ cartCount, setMycartCount, count, setCount, setUser_id, user_id, token }) {

  return (
    <div className="container-fluid p-0 text-center">
      <section>
        <Navbar cartCount={cartCount} setMycartCount={setMycartCount} count={count} setCount={setCount} setUser_id={setUser_id} user_id={user_id}/>
      </section>
      <div className="background_img d-flex">
        <div className="container-fluid background_txt d-flex text-start m-0 p-md-5 px-2 align-items-center">
          <div className="background_txt_child">
            <p className="child_1 text-uppercase">best seller</p>
            <p className="child_2 text-uppercase">
              best dispensary to buy weed online
            </p>
            <p className="child_3">vitamins & suppliments</p>
            <div className="child_4 d-flex">
              <div className="px-4 py-0">Get 25% off</div>
              <div className="px-4 py-0">Free Shipping</div>
            </div>
            <a href="/shop" className="shop decoration-none">
              Shop All
            </a>
          </div>
        </div>
      </div>
      <section>
        <div className="container-fluid p-md-5 px-2 py-5 cta">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 d-flex gap-3 cta_child">
              <img src={shipping} alt="shipping" />
              <div className="shipping">
                <h1>Reliable Shipping</h1>
                <p>
                  {" "}
                  Green Society provides Canada Post Xpress Shipping right to
                  your doorstep! You can also opt in for shipping insurance. For
                  orders over $149, shipping is free!
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 d-flex gap-3 cta_child">
              <img src={security} alt="security" />
              <div className="security">
                <h1>You’re Safe With Us</h1>
                <p>
                  {" "}
                  Our secure payment system accepts the most common forms of
                  payments making the checkout process quicker! The payments we
                  accept are debit, all major credit cards, and cryptocurrency.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 d-flex gap-3 cta_child">
              <img src={pricing} alt="price" />
              <div className="pricing">
                <h1>Best Quality & Pricing</h1>
                <p>
                  {" "}
                  Here at Green Society, we take pride in the quality of our
                  products and service. Our prices are set to ensure you receive
                  your medication at a reasonable price and safely
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-md-5 px-3 py-5 dispensary">
          <div className="row row1">
            <p className="choose">
              BEST DISPENSARY TO BUY WEED ONLINE IN CANADA
            </p>
          </div>
          <div className="row row2 pt-4 pb-5">
            <h5 className="px-4 py-1">Best Sellers</h5>
          </div>
          <div className="row row3">
            <div className="col-12">
              <Card token={token} cartCount={cartCount} setMycartCount={setMycartCount} count={count} setCount={setCount} user_id={user_id}/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-md-5 px-3 py-5 testimonials">
          <div className="row row1 pb-5">
            <p className="m-0 text-left fs-md-4 choose">
              CUSTOMER TESTIMONIALS
            </p>
          </div>
          <div className="row row3">
            <div className="col-12">
            
              <TestimonyCard />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-md-5 px-3 py-5 dispensary">
          <div className="row row1 pt-4 pb-5">
            <p className=" text-start m-0 choose">CHOOSE YOUR WEED</p>
          </div>

          <div className="row row3 pb-4">
            <div className="col-12">
              <Card2 token={token} cartCount={cartCount} setMycartCount={setMycartCount} count={count} setCount={setCount} user_id={user_id}/>
            </div>
          </div>
        </div>
        <div className="position-relative pb-5">
          <img src={refer} alt="refer" className="refer" />
          <div className="refer_txt w-100 position-absolute">
            <h4 className="fs-md-4">REFER A FRIEND</h4>
            <button className="d-flex m-auto">Refer Here</button>
            <p className="">
              And get <span className="text-warning">$30!</span>
            </p>
          </div>
        </div>
      </section>
      <section className="steps d-fluid px-md-5 px-sm-3 px-2 py-5">
        <div className="order px-md-5">
          <h4 className="w-auto fs-1 px-md-5 f">
            HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA
          </h4>
          <p className="pt-3 w-auto px-md-5">
            Ordering weed online from Top Shelf BC is easy. We are proud to have
            made the process accessible across multiple platforms and simple to
            understand, meaning that more people can come to us to buy their
            cannabis products online.
          </p>
        </div>
        <div className="background_txt_child px-2">
          <div className="row px-md-5 px-sm-3 px-1 py-5">
            <div className="col-6 step">
              <div className="text-light">
                <img src={registerIcon} alt="register" />
                <h4 className="one">REGISTER</h4>
                <p>
                  Sign up for an account with us. This is quick and simple. We
                  don’t require any more details from you than the bare minimum
                  needed for you to place an order and get your product
                  delivered.
                </p>
              </div>
            </div>
            <div className="col-6 step">
              <div className="text-light">
                <img src={shopIcon} alt="shop" />
                <h4 className="one">SHOP</h4>
                <p>
                  Decide on what you want to purchase. We stock a wide range of
                  edibles,flowers , concentrates and mushrooms there is bound to
                  be something for everyone.
                </p>
              </div>
            </div>
            <div className="col-6 step">
              <div className="text-light">
                <img src={paymentIcon} alt="pay" />
                <h4 className="one">MAKE PAYMENT</h4>
                <p>
                  Pay securely. Our site boasts sturdy protection certificates
                  to keep your card details and related data safe.
                </p>
              </div>
            </div>
            <div className="col-6 step">
              <div className="text-light">
                <img src={relaxIcon} alt="relax" />
                <h4 className="one">RELAX</h4>
                <p>
                  Your product will be packaged discretely and shipped by Canada
                  Post Xpresspost. We will provide you with a tracking number so
                  then you can follow your mail order marijuana every step of
                  the way.
                </p>
              </div>
            </div>
          </div>
          <button className="px-md-5 px-3">Choose your Weed</button>
        </div>
      </section>
      <section>
        <div className="container-fluid p-md-5 px-3 py-5 dispensary mygreen">
          <div className="row row1 pt-4 pb-5">
            <p className=" text-start m-0 choose d-flex gap-1 align-items-center">
              Weed strains by type
              <GiChestnutLeaf className="weedIcon" />
            </p>
          </div>
          <div className="row row3">
            <div className="col-12">
              <CartegoryCard />
            </div>
          </div>
        </div>
      </section>
      <section className=" steps2 px-3 pt-5">
        <Footer />
      </section>
    </div>
  );
}
