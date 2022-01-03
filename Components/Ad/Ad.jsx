import React from "react";
import { base_url } from "../../urlConfig";

const Ad = () => {
  return (
    <>
      <div className="ads hidden-mobile">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="pb-2">
                <h2>
                  Fruit &amp; veg boxes delivered weekly
                  <br />
                  derect to your door
                </h2>
                <p className="text-center pt-1 white">
                  Now ain&amp;t that a time saver!
                </p>
              </div>
              <div className="pt-5">
                <div className="col-sm-3">
                  <figure className="figure">
                    <a href="#" target="_self">
                      <img
                        width="270"
                        height="460"
                        src={base_url + "assets/images/ads-1.jpg"}
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
                <div className="col-sm-6">
                  <figure className="figure">
                    <a href="#" target="_self">
                      <img
                        width="570"
                        height="457"
                        src={base_url + "assets/images/ads-6.png"}
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
                <div className="col-sm-3">
                  <figure className="figure">
                    <a href="#" target="_self">
                      <img
                        width="270"
                        height="215"
                        src={base_url + "assets/images/ads-3.jpg"}
                        alt=""
                      />
                    </a>
                  </figure>
                  <figure className="figure mt-3">
                    <a href="#" target="_self">
                      <img
                        width="270"
                        height="215"
                        src={base_url + "assets/images/ads-4.jpg"}
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ad;
