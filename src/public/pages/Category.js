import React from "react";
import "../css/styles.css";
import shipping from "../assets/shipping.png";
import security from "../assets/security.png";
import pricing from "../assets/pricing.png";
import refer from "../assets/refer.png";
import Footer from "../components/Footer";
import Card2 from "../components/Card2";
import ShopMix from "../components/ShopMix";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Category({
  cartCount, 
  setMycartCount,
  setUser_id,
  user_id,
  count,
  setCount,
  token
}) {
 
  return (
    <div className="container-fluid p-0 text-center">
      <section>
        <Navbar
          setUser_id={setUser_id}
          user_id={user_id}
          cartCount={cartCount}
          setMycartCount={setMycartCount}
          count={count}
          setCount={setCount}
        />
      </section>
      <section>
        <div className="container-fluid px-md-5 py-md-2 py-3 px-2 cta">
          <div className="row">
            <div className="col-4 col-sm-12 col-md-4 d-md-flex d-block gap-3 shop_cta_child align-items-center">
              <img src={shipping} alt="shipping" />
              <div className="shop_shipping">
                <h1>Reliable Shipping</h1>
              </div>
            </div>
            <div className="col-4 col-sm-12 col-md-4 d-md-flex d-block gap-3 shop_cta_child align-items-center">
              <img src={security} alt="security" />
              <div className="shop_security">
                <h1>You’re Safe With Us</h1>
              </div>
            </div>
            <div className="col-4 col-sm-12 col-md-4 d-md-flex d-block gap-3 shop_cta_child align-items-center">
              <img src={pricing} alt="price" />
              <div className="shop_pricing">
                <h1>Best Quality & Pricing</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-md-5 px-3 py-5 dispensary">
          <div className="order pb-5">
            <h4 className="w-auto fs-1 text-dark fw-medium text-start p-0 pb-4 border-bottom">
              Shop
            </h4>
            <div>
              <p className="w-auto text-success fs-5 text-start fw-bold m-0 py-2">
                Cannabis
              </p>
              <p className="pt-3 w-auto text-start">
                Here at WestCoastSupply’s “ cannabis section, we showcase the
                best Indica, Hybrid, and Sativa medical cannabis strain
                selections at the best prices online. You can be assured that
                all our strains go through a strict screening process to ensure
                that all your cannabis needs are top-quality. All of our flowers
                are sourced from reputable growers, based in British Columbia,
                Canada. We have hige grade selection comes from growers that
                produce AAAA+ quality cannabis flowers and have many years of
                experience in the cannabis industry. You are guaranteed to be
                receiving high-quality flowers at the best prices online with
                our unbeatable sales!
              </p>
            </div>
          </div>
          <div className="col-12 pt-4 px-md-5 rounded bg-light">
            <h4 className="w-auto fs-3 text-dark fw-bold text-start p-0 pb-3">
              Top selling
            </h4>

            <Card token={token} cartCount={cartCount} setMycartCount={setMycartCount} count={count} setCount={setCount} user_id={user_id}/>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-md-5 px-3 py-5 testimonials">
          <div className="row row3 px-md-5 px-0">
            <div className="col-12 px-md-5 px-3">
              <ShopMix />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-md-5 px-3 py-5 dispensary">
          <div className="row row3 pb-4">
            <div className="col-12">
              <Card2 cartCount={cartCount} setMycartCount={setMycartCount} count={count} setCount={setCount} user_id={user_id}/>
            </div>
          </div>
          <div className="row row3 ">
            <div className="col-12">
              <Card2 cartCount={cartCount} setMycartCount={setMycartCount} count={count} setCount={setCount} user_id={user_id}/>
            </div>
          </div>
        </div>
        <div className="position-relative pb-5">
          <img src={refer} alt="img" className="refer" />
          <div className="refer_txt w-100 position-absolute">
            <h4 className="fs-md-4">REFER A FRIEND</h4>
            <button className="d-flex m-auto">Refer Here</button>
            <p className="">
              And get <span className="text-warning">$30!</span>
            </p>
          </div>
        </div>
      </section>

      <section className=" steps2 px-3 pt-5">
        <Footer />
      </section>
    </div>
  );
}
