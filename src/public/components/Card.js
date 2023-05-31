import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/styles.css";
import weed1 from "../assets/weed1.png";
import { addcart, getallItems } from "../utils/APIroutes";
import { Navigate } from "react-router-dom";

export default function Card2({ count, setCount, user_id }) {
  const [items, setItems] = useState([]);
  const [item_sub, setItem_sub] = useState(0);
  const [countItem] = useState(1);

  useEffect(() => {
    axios.get(getallItems).then((response) => {
      setItems(response.data.Queryresults);
    });
  }, [items]);

  const addtocart = (item_id, item_name, item_img, price) => {
    if (user_id) {
      setCount(+count + 1);
      setItem_sub(+price * countItem);
      const itemData = {
        user_id: user_id,
        item_id: item_id,
        item_name: item_name,
        item_img: item_img,
        price: price,
        qty: countItem,
        sub_total: item_sub,
      };

      axios.post(addcart, itemData).then((response) => {});
    } else {
      <Navigate to="/login" replace />
    }
  };

  return (
    <div className="row">
      <div className="col-6 col-md-3 col-sm-6 pb-4">
        <div className="py-5 weed1">
          <img src={weed1} alt="img" className="pb-2" />
          <div className="weed1_txt">
            <h4>Shop our Best Sellers</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius
              lorem blandit lectus magnis feugiat.
            </p>
          </div>
          <a href="/shop">view all</a>
        </div>
      </div>
      {items.map((item) => (
        <div className="col-6 col-md-3 col-sm-6 pb-4">

          <div className="py-4 weed2">
            <img src={item.item_img} alt={item.item_name} />
          </div>

          <div className="weed2_txt">
            <p className="pt-3">FLOWER</p>
            <a
              className="text-decoration-none"
              href={`/product/${item.item_id}`}
            >
              <h4>{item.item_name}</h4>
            </a>
            <div className="ingredient">
              <p className=" py-1 px-2">{item.strand}</p>
            </div>
            <div className="d-flex m-auto justify-content-evenly align-items-center w-6 pb-3 pt-2">
              <h5 className="m-0">${item.price}</h5>
              <p className="">/</p>
              <div className="">gram</div>
            </div>
            <button
              onClick={() =>
                addtocart(
                  item.item_id,
                  item.item_name,
                  item.item_img,
                  item.price
                )
              }
            >
              Add to Cart
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}
