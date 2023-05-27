import React from "react";
import indica from "../assets/indica.png";
import sativa from "../assets/sativa.png";
import hybrid from "../assets/hybrids.png";
import "../css/styles.css";

export default function CartegoryCard() {
  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-md-4 d-flex gap-3 cta_child pb-4">
        <div className="category_container py-4 px-4 d-md-block d-sm-flex d-block gap-4">
          <div className="py-4 weed2">
            <img className="w-100" src={indica} alt="indica" />
          </div>

          <div className="weed2_txt">
            <h4 className="fs-3 fw-bold pt-3 text-start">Indica</h4>

            <div className="d-flex m-auto justify-content-evenly align-items-center pb-3 pt-1">
              <div className="g text-start">
                This type of cannabis is commonly taken by those who want to
                sink into a state of total relaxation in every limb. This
                reduces stress overall and can take your worries and fatigue
                away. Because of its relaxing effects, it is suggested to use
                this type of cannabis at night. It is particularly recommended
                for people who have trouble sleeping, be it due to insomnia,
                pain or other associated sleep issues.
              </div>
            </div>
            <a
              href="/"
              className="text-start d-flex justify-content-start text-success"
            >
              Shop Indica
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-4 d-flex gap-3 cta_child pb-4">
        <div className="category_container py-4 px-4 d-md-block d-sm-flex d-block gap-4">
          <div className="py-4 weed2">
            <img className="w-100" src={sativa} alt="sativa" />
          </div>

          <div className="weed2_txt">
            {/* <p className="pt-3">FLOWER</p> */}
            <h4 className="fs-3 fw-bold pt-3 text-start">Sativa</h4>

            <div className="d-flex m-auto justify-content-evenly align-items-center pb-3 pt-1">
              <div className="g text-start">
                This type of cannabis is commonly taken by those who want to
                sink into a state of total relaxation in every limb. This
                reduces stress overall and can take your worries and fatigue
                away. Because of its relaxing effects, it is suggested to use
                this type of cannabis at night. It is particularly recommended
                for people who have trouble sleeping, be it due to insomnia,
                pain or other associated sleep issues.
              </div>
            </div>
            <a
              href="/"
              className="text-start d-flex justify-content-start text-success"
            >
              Shop Sativa
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-4 d-flex gap-3 cta_child pb-4">
        <div className="category_container py-4 px-4 d-md-block d-sm-flex d-block gap-4">
          <div className="py-4 weed2">
            <img className="w-100" src={hybrid} alt="hybrid" />
          </div>

          <div className="weed2_txt">
            {/* <p className="pt-3">FLOWER</p> */}
            <h4 className="fs-3 fw-bold pt-3 text-start">Hybrids</h4>

            <div className="d-flex m-auto justify-content-evenly align-items-center pb-3 pt-1">
              <div className="g text-start">
                Hybrid strains are just that – they combine the head-focused
                high effects of sativas with the bodily relaxation of indicas.
                This is ideal for people who really want to sooth any fatigue
                and worries while also clearing the mind ready to focus fresh on
                something new. Hybrids are expertly tailored to result in
                strains with specific effects. Useful strain vocabulary to
                familiarize yourself with when it comes to hybrids includes
                sativa-dominant (full, bodily relaxation), indica-dominant
                (boosting creativity, increasing mood and lessening anxiety) and
                balanced (the best of both worlds).
              </div>
            </div>
            <a
              href="/"
              className="text-start d-flex justify-content-start text-success"
            >
              Shop Hybrids
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
