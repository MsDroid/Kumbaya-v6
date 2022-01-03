import React from "react";
import { base_url } from "../../urlConfig";

const FeaturedProduct = () => {
  return (
    <>
      <div className="feature-product-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="noo-sh-title noo-product-list-title">
                <h2>Featured products</h2>
                <p>
                  Maecenas tristique gravida odio, et sagi ttis justo interdum
                  porta
                </p>
              </div>
              <div className="row product-list-item left">
                <div className="col-md-6 col-sm-6 left-content">
                  <h3>
                    <a href="shop-detail.html">Passion fruit</a>
                  </h3>
                  <div className="list-excerpt">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <span className="price">
                    <span className="amount">&#8377;14.00</span>
                  </span>
                </div>
                <div className="col-md-6 col-sm-6 right-img">
                  <a href="shop-detail.html">
                    <img
                      width="391"
                      height="297"
                      src={base_url + "assets/images/passion.png"}
                      alt=""
                    />
                    <span>
                      <em>Shop now</em>
                    </span>
                  </a>
                </div>
              </div>
              <div className="row product-list-item product-list-right">
                <div className="col-md-6 col-sm-6 left-content">
                  <h3>
                    <a href="shop-detail.html">Pomegranates</a>
                  </h3>
                  <div className="list-excerpt">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <span className="price">
                    <span className="amount">&#8377;3.90</span>
                  </span>
                </div>
                <div className="col-md-6 col-sm-6 right-img">
                  <a href="shop-detail.html">
                    <img
                      width="414"
                      height="303"
                      src={base_url + "assets/images/pomegranate.png"}
                      alt=""
                    />
                    <span>
                      <em>Shop now</em>
                    </span>
                  </a>
                </div>
              </div>
              <p className="text-center">
                <span className="view_all">
                  <a href="#">view all products</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
