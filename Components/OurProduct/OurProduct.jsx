import Link from "next/link";
import React from "react";
import { base_url } from "../../urlConfig";

const OurProduct = () => {
  return (
    <>
      <div className="our-product">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="noo-product-slider-wrap commerce">
                <div className="noo-sh-title">
                  <h2>Our new products</h2>
                  <p>
                    Maecenas tristique gravida odio, et sagi ttis justo interdum
                    porta. Duis et lacus mattis, tincidunt eronec dictum non
                    nulla.
                  </p>
                </div>
                <div className="row noo-product-slider products product-grid">
                  <div className="noo-product-sliders">
                    <div className="masonry-item col-md-4 col-sm-6 product">
                      <div className="noo-product-inner">
                        <div className="noo-product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="600"
                              height="760"
                              src={base_url + "assets/images/product/product_1.jpg"}
                              alt=""
                            />
                          </a>
                          <div className="noo-rating">
                            <div className="star-rating">
                              <span style={{ width: "0%" }}></span>
                            </div>
                          </div>
                        </div>
                        <div className="noo-product-title">
                          <h3>
                            <a href="shop-detail.html">Apples</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#8377;3.95</span>
                          </span>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="masonry-item noo-product-column col-md-4 col-sm-6 product">
                      <div className="noo-product-inner">
                        <div className="noo-product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="600"
                              height="760"
                              src={base_url + "assets/images/product/product_2.jpg"}
                              alt=""
                            />
                          </a>
                          <div className="noo-rating">
                            <div className="star-rating">
                              <span style={{ width: "60%" }}></span>
                            </div>
                          </div>
                        </div>
                        <div className="noo-product-title">
                          <h3>
                            <a href="shop-detail.html">Broccoli</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#8377;2.05</span>
                          </span>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="masonry-item noo-product-column col-md-4 col-sm-6 product">
                      <div className="noo-product-inner">
                        <div className="noo-product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="600"
                              height="760"
                              src={base_url + "assets/images/product/product_9.jpg"}
                              alt=""
                            />
                          </a>
                          <div className="noo-rating">
                            <div className="star-rating">
                              <span style={{ width: "20%" }}></span>
                            </div>
                          </div>
                        </div>
                        <div className="noo-product-title">
                          <h3>
                            <a href="shop-detail.html">Limes</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#8377;0.75</span>
                          </span>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="masonry-item noo-product-column col-md-4 col-sm-6 product">
                      <div className="noo-product-inner">
                        <div className="noo-product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="600"
                              height="760"
                              src={base_url + "assets/images/product/product_10.jpg"}
                              alt=""
                            />
                          </a>
                          <div className="noo-rating">
                            <div className="star-rating">
                              <span style={{ width: "0%" }}></span>
                            </div>
                          </div>
                        </div>
                        <div className="noo-product-title">
                          <h3>
                            <a href="shop-detail.html">True Spinach</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#8377;2.00</span>
                          </span>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="masonry-item noo-product-column col-md-4 col-sm-6 product">
                      <div className="noo-product-inner">
                        <div className="noo-product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="600"
                              height="760"
                              src={base_url + "assets/images/product/product_11.jpg"}
                              alt=""
                            />
                          </a>
                          <div className="noo-rating">
                            <div className="star-rating">
                              <span style={{ width: "0%" }}></span>
                            </div>
                          </div>
                        </div>
                        <div className="noo-product-title">
                          <h3>
                            <a href="shop-detail.html">Potatoes</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#8377;1.80</span>
                          </span>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="masonry-item noo-product-column col-md-4 col-sm-6 product">
                      <div className="noo-product-inner">
                        <div className="noo-product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="600"
                              height="760"
                              src={base_url + "assets/images/product/product_12.jpg"}
                              alt=""
                            />
                          </a>
                          <div className="noo-rating">
                            <div className="star-rating">
                              <span style={{ width: "0%" }}></span>
                            </div>
                          </div>
                        </div>
                        <div className="noo-product-title">
                          <h3>
                            <a href="shop-detail.html">Tomatoes</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#8377;2.85</span>
                          </span>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="masonry-item noo-product-column col-md-4 col-sm-6 product">
                      <div className="noo-product-inner">
                        <div className="noo-product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="600"
                              height="760"
                              src={base_url + "assets/images/product/product_5.jpg"}
                              alt=""
                            />
                          </a>
                          <div className="noo-rating">
                            <div className="star-rating">
                              <span style={{ width: "0%" }}></span>
                            </div>
                          </div>
                        </div>
                        <div className="noo-product-title">
                          <h3>
                            <a href="shop-detail.html">Celery</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#8377;2.09</span>
                          </span>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="masonry-item noo-product-column col-md-4 col-sm-6 product">
                      <div className="noo-product-inner">
                        <div className="noo-product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="600"
                              height="760"
                              src={base_url + "assets/images/product/product_4.jpg"}
                              alt=""
                            />
                          </a>
                          <div className="noo-rating">
                            <div className="star-rating">
                              <span style={{ width: "20%" }}></span>
                            </div>
                          </div>
                        </div>
                        <div className="noo-product-title">
                          <h3>
                            <a href="shop-detail.html">Carrots</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#8377;1.05</span>
                          </span>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="masonry-item noo-product-column col-md-4 col-sm-6 product">
                      <div className="noo-product-inner">
                        <div className="noo-product-thumbnail">
							<Link href="/shop-detail">
                          <a>
                            <img
                              width="600"
                              height="760"
                              src={base_url + "assets/images/product/product_7.jpg"}
                              alt=""
                            />
                          </a>
						  </Link>
                          <div className="noo-rating">
                            <div className="star-rating">
                              <span style={{ width: "0%" }}></span>
                            </div>
                          </div>
                        </div>
                        <div className="noo-product-title">
                          <h3>
                            <a href="shop-detail.html">Cucumbers</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#8377;1.95</span>
                          </span>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
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
        </div>
      </div>
    </>
  );
};

export default OurProduct;
