import React from "react";
import { base_url } from "../../urlConfig";

const Deal = () => {
  return (
    <>
      <div className="pt-11 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="noo-sh-title noo-blog-title">
                <h2>Deal of the day</h2>
                <p>
                  Maecenas tristique gravida odio, et sagi ttis justo interdum
                  porta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 pb-8">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="noo-atributes">
                <img
                  width="494"
                  height="618"
                  src={base_url + "assets/images/image-01.png"}
                  alt=""
                />
                <div className="noo-atributes-item">
                  <div className="noo-atributes-hover">
                    <div className="noo-atributes-content">
                      <strong>12 Green Apples</strong>
                      <p>
                        Maecenas tristique gravida, odio et sagi ttis justo{" "}
                      </p>
                    </div>
                  </div>
                  <span className="eff">
                    <span className="eff1"></span>
                    <span className="eff2"></span>
                    <img
                      width="64"
                      height="64"
                      src={base_url + "assets/images/organicfood-1.png"}
                      alt=""
                    />
                  </span>
                </div>
                <div className="noo-atributes-item noo-atributes-item2 orange">
                  <div className="noo-atributes-hover">
                    <div className="noo-atributes-content">
                      <strong>10 Orange Apples</strong>
                      <p>
                        Maecenas tristique gravida, odio et sagi ttis justo{" "}
                      </p>
                    </div>
                  </div>
                  <span className="eff">
                    <span className="eff1"></span>
                    <span className="eff2"></span>
                    <img
                      width="53"
                      height="53"
                      src={base_url + "assets/images/organicfood-2.png"}
                      alt=""
                    />
                  </span>
                </div>
                <div className="noo-atributes-item noo-atributes-item4 orange">
                  <div className="noo-atributes-hover">
                    <div className="noo-atributes-content">
                      <strong>15 Pear Apples</strong>
                      <p>
                        Maecenas tristique gravida, odio et sagi ttis justo{" "}
                      </p>
                    </div>
                  </div>
                  <span className="eff">
                    <span className="eff1"></span>
                    <span className="eff2"></span>
                    <img
                      width="53"
                      height="53"
                      src={base_url + "assets/images/organicfood-3.png"}
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="pt-8">
                <div className="noo-countdown-product default">
                  <h3>
                    <a href="#">Green Apples</a>
                  </h3>
                  <span className="price">
                    <span className="amount">&#8377;3.15</span>
                  </span>
                  <div className="noo-product-excerpt">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="product_meta">
                    <span className="posted_in">
                      Category: <a href="#">Fruit</a>
                    </span>
                    <span className="tagged_as">
                      Tags: <a href="#">fruits</a>, <a href="#">green apple</a>
                    </span>
                  </div>
                  <div className="defaultCountdown hide_name"></div>
                  <div className="noo-product-action">
                    <div className="noo-action">
                      <a
                        href="#"
                        data-quantity="1"
                        className="button product_type_simple add_to_cart_button"
                      >
                        <span>Add to cart</span>
                      </a>
                      <div className="yith-wcwl-add-to-wishlist">
                        <div className="yith-wcwl-add-button">
                          <a href="#" className="add_to_wishlist">
                            Add to Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deal;
