import React from "react";
import { base_url } from "../../urlConfig";

const OfferCard = () => {
  return (
    <>
      <div className="pt-0 pb-0">
        <div className="row-fluid">
          <div className="col-sm-6 pr-0 pl-0">
            <div className="align_left noo_image_hover">
              <figure className="figure">
                <a href="#" target="_self" className="single_image-wrapper">
                  <img
                    width="960"
                    height="260"
                    src={base_url + "assets/images/ads-3.png"}
                    alt=""
                  />
                </a>
              </figure>
            </div>
          </div>
          <div className="col-sm-6 pr-0 pl-0">
            <div className="align_left noo_image_hover">
              <figure className="figure">
                <a
                  href="#"
                  target="_self"
                  className="single_image-wrapper box_border_grey"
                >
                  <img
                    width="960"
                    height="260"
                    src={base_url + "assets/images/ads-4.png"}
                    alt=""
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
