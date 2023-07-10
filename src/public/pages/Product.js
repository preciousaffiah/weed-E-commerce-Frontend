import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbCurrencyNaira } from "react-icons/tb";
import effects from "../assets/effects.png";
import relieve from "../assets/relieve.png";
import aroma from "../assets/aroma.png";
import tick from "../assets/tick-circle.png";
import refer from "../assets/refer.png";
import Footer from "../components/Footer";
import Card2 from "../components/Card2";
import { addcart, getItem } from "../utils/APIroutes";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Product({
  cartCount,
  setMycartCount,
  setUser_id,
  user_id,
  count,
  setCount,
  token
}) {
  const [item, setItem] = useState();
  const [item_name, setItem_name] = useState();
  const [item_strand, setItem_strand] = useState();
  const [item_img, setItem_img] = useState();
  const [item_price, setItem_price] = useState(0);
  const [item_id, setItem_id] = useState();
  const [item_aroma, setItem_aroma] = useState();
  const [item_effect, setItem_effect] = useState();
  const [item_may_relieve, setItem_may_relieve] = useState();
  const [item_sub, setItem_sub] = useState(0);
  const [countItem, setCountItem] = useState(1);
  const navigate = useNavigate();
  const product_id = window.location.pathname.split("/").pop();

  useEffect(() => {
    axios.get(`${getItem}/${product_id}`).then((response) => {
      setItem(response.data.item);
      setItem_name(response.data.item.item_name);
      setItem_strand(response.data.item.strand);
      setItem_img(response.data.item.item_img);
      setItem_price(response.data.item.price);
      setItem_aroma(response.data.item.aromas);
      setItem_effect(response.data.item.effects);
      setItem_may_relieve(response.data.item.may_relieve);
      setItem_id(response.data.item._id);
      setItem_sub(+item_price * countItem);
    });
  }, [item, countItem, item_price, product_id]);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    className: "toast-message",
  };

  const addtocart = () => {
    if (user_id) {
      const itemData = {
        userId: user_id,
        itemId: item_id,
        item_name: item_name,
        item_img: item_img,
        price: item_price,
        qty: countItem,
        sub_total: item_sub,
      };

      axios
        .post(addcart, itemData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          toast.success("Item added successfully", toastOptions);
          if (response.data.status === "UPDATED") {
            setMycartCount((cartCount += 0));
          } else {
            setMycartCount((cartCount += 1));
          }
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container-fluid p-0 text-center">
      <>
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
        <section className="d-md-flex d-block">
          <div className="col-md-5 col-12 py-5 px-5">
            <div className="py-5 border rounded">
              <img src={item_img} alt="img" />
            </div>
          </div>
          <div className="col-md-7 col-12">
            <section>
              <div className="container-fluid p-md-5 px-3 py-5 dispensary">
                <div className="weed2_txt text-start">
                  <p className="">CONCENTRATES</p>
                  <h4 className="fs-3 fw-bold m-0 text-dark">{item_name}</h4>

                  <div className="d-flex justify-content-evenly align-items-center w-6 pb-3 pt-2">
                    <h5 className="m-0 fs-5 text-danger fw-medium">
                      <TbCurrencyNaira />
                      {item_price}
                    </h5>
                  </div>
                </div>
                <div className="py-2">
                  <div className="border py-4 px-3 rounded p-2">
                    <div className="d-flex gap-2">
                      <div>
                        <img src={effects} alt="img" />
                      </div>
                      <div className="weed2_txt">
                        <p className="text-start  shipping">EFFECTS</p>
                        <h4 className="fs-md-6 text-start">{item_effect}</h4>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <div>
                        <img src={relieve} alt="img" />
                      </div>
                      <div className="weed2_txt">
                        <p className="text-start shipping">MAY RELIEVE</p>
                        <h4 className="fs-md-6 text-start">
                          {item_may_relieve}
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <div>
                        <img src={aroma} alt="img" />
                      </div>
                      <div className="weed2_txt">
                        <p className="text-start shipping">AROMAS</p>
                        <h4 className="fs-md-6 text-start">{item_aroma}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="border py-4 px-md-3 px-2 rounded">
                    <div className="d-flex justify-content-between">
                      <p className=" shipping">Khalifa Kush (AAAA)</p>
                      <p className="fw-medium">
                        <TbCurrencyNaira />
                        {item_price}
                      </p>
                    </div>
                    <div className="weed2_txt d-flex justify-content-between p-3">
                      <div className="d-flex gap-2">
                        <div className="ingredient d-flex">
                          <p className=" py-1 px-2">{item_strand}</p>
                        </div>
                        <div className="d-flex text-dark ingredient gap-1">
                          <p
                            className="py-1 px-2 text-dark pointer "
                            onClick={() => [
                              setCountItem(+countItem - 1),
                              setItem_sub(+item_price * countItem),
                            ]}
                          >
                            -
                          </p>
                          <p className="py-1 px-2 text-dark fw-medium">
                            {countItem}
                          </p>
                          <p
                            className="py-1 px-2 text-dark pointer"
                            onClick={() => [
                              setCountItem(+countItem + 1),
                              setItem_sub(+item_price * countItem),
                            ]}
                          >
                            +
                          </p>
                        </div>
                      </div>
                      <button className="py-2" onClick={() => addtocart()}>
                        Add to Cart | <TbCurrencyNaira />
                        {item_sub}
                      </button>
                    </div>
                    <div className="shipping">
                      <div className="d-flex align-items-center pb-1 gap-1">
                        <img src={tick} alt="img" />
                        <p className="m-0">
                          Free Xpress Shipping on orders over{" "}
                          <span className="text-warning">
                            <TbCurrencyNaira />
                            25,500
                          </span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center pb-1 gap-1">
                        <img src={tick} alt="img" />
                        <p className="m-0">
                          Order before 12:00pm for same day dispatch
                        </p>
                      </div>
                      <div className="d-flex align-items-center pb-1 gap-1">
                        <img src={tick} alt="img" />
                        <p className="m-0">
                          Support & ordering open 7 day a week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="py-5">
                    <h4 className="text-start">Description</h4>
                    <p className="text-start shipping">
                      Jungle Diamonds is a slightly indica dominant hybrid
                      strain (60% indica/40% sativa) created through crossing
                      the infamous Slurricane X Gorilla Glue #4 strains. Named
                      for its gorgeous appearance and breeder, Jungle Diamonds
                      is a favorite of indica and hybrid lovers alike thanks to
                      its delicious taste and tingly, arousing high. Jungle
                      Diamonds buds have sparkling oversized spade-shaped olive
                      green nugs with vivid amber hairs and a thick frosty
                      blanket of glittering tiny blue-tinted white crystal
                      trichomes. As you pull apart each sticky little nugget,
                      aromas of spicy mocha coffee and fruity herbs are
                      released.{" "}
                    </p>
                    <p className="text-start shipping">
                      The flavor is of sweet chocolate with hints of fresh ripe
                      berries to it, too. The Jungle Diamonds high is just as
                      delicious, with happy effects that will boost the spirits
                      and kick negative thoughts and moods to the curb. You’ll
                      feel a tingly sense in your body from start to finish that
                      serves to remove any aches or pains while leaving you
                      pretty aroused at times. This is accompanied by a
                      blissfully unfocused heady lift that leaves your head in
                      the clouds without causing sedation. With these effects
                      and its pretty high 17-24% THC level, Jungle Diamonds is
                      ideal for experienced patients with chronic pain, cramps
                      or muscle spasms and appetite loss or nausea.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <div className="py-3 px-md-5 px-3">
          <h2 className="text-start pb-5">Featured Products</h2>
          <Card2
            cartCount={cartCount}
            setMycartCount={setMycartCount}
            count={count}
            setCount={setCount}
            user_id={user_id}
          />
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
        <section className=" steps2 px-3 pt-5">
          <Footer />
        </section>
      </>
      <ToastContainer />
    </div>
  );
}
