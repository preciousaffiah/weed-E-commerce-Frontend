import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/styles.css";
import { addcart, getallItems } from "../utils/APIroutes";
import { useNavigate } from "react-router-dom";


export default function Card2({ count, setCount, user_id, cartCount, setMycartCount}) {
  const [items, setItems] = useState([]);
  const [item_sub, setItem_sub] = useState(0);
  const [countItem] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(getallItems).then((response) => {
      setItems(response.data.Queryresults);
    });
  }, [items]);

  const addtocart = (item_id, item_name, item_img, price) => {
    if (user_id) {
      setMycartCount(cartCount += 1)
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
      navigate('/login')
    }
  };

  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-6 col-md-3 col-sm-6 pb-4" key={item.item_id}>
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
              <h5 className="m-0">{item.price}</h5>

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
