import React from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "../Components/Layout/Comps/Footer/Footer";
import Header from "../Components/Layout/Comps/Header/Header";
import Spinner from "../Components/Layout/Comps/Spinner/Spinner";
import { base_url } from "../urlConfig";

const ShopList = () => {
  return (
    <>
      <Head>
        <title>SHOP LIST - KUMBAYA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Spinner />
      <div className="site">
        <Header />
        <section className="noo-page-heading eff">
          <div className="container">
            <div className="noo-heading-content">
              <h1 className="page-title eff">Shop List</h1>
              <div className="noo-page-breadcrumb eff">
                <Link href="/">
                <a className="home">
                  Kumbaya
                </a>
                </Link>
                /<span>Shop List</span>
              </div>
            </div>
          </div>
        </section>
        <div className="main">
          <div className="commerce noo-shop-main">
            <div className="container">
              <div className="row">
                <div className="noo-main col-md-9">
                  <div className="noo-catalog">
                    <p className="commerce-result-count">
                      Showing 1&ndash;9 of 18 results
                    </p>
                    <div className="product-style-control pull-right">
                      <span className="noo-list active">
                        <i className="fa fa-th-list"></i>
                      </span>
                      <span className="noo-grid">
                        <a href="shop.html">
                          <i className="fa fa-th-large"></i>
                        </a>
                      </span>
                    </div>
                    <form className="commerce-ordering">
                      <select name="orderby" className="orderby">
                        <option defaultValue="" selected="selected">
                          Default sorting
                        </option>
                        <option defaultValue="">Sort by popularity</option>
                        <option defaultValue="">Sort by average rating</option>
                        <option defaultValue="">Sort by newness</option>
                        <option defaultValue="">
                          Sort by price: low to high
                        </option>
                      </select>
                    </form>
                  </div>
                  <div className="products row product-list">
                    <div className="masonry-item noo-product-column col-md-4 col-sm-6 product">
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
                            <span className="amount">&#36;3.95</span>
                          </span>
                          <div className="noo-product-excerpt">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#" className="add_to_wishlist"></a>
                                </div>
                              </div>
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
                            <span className="amount">&#36;2.05</span>
                          </span>
                          <div className="noo-product-excerpt">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#" className="add_to_wishlist"></a>
                                </div>
                              </div>
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
                              src={base_url + "assets/images/product/product_3.jpg"}
                              alt=""
                            />
                          </a>
                          <div className="noo-rating">
                            <div className="star-rating">
                              <span style={{ width: "100%" }}></span>
                            </div>
                          </div>
                        </div>
                        <div className="noo-product-title">
                          <h3>
                            <a href="shop-detail.html">Brown Bread</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#36;12.00</span>
                          </span>
                          <div className="noo-product-excerpt">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#" className="add_to_wishlist"></a>
                                </div>
                              </div>
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
                            <span className="amount">&#36;1.05</span>
                          </span>
                          <div className="noo-product-excerpt">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#" className="add_to_wishlist"></a>
                                </div>
                              </div>
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
                            <span className="amount">&#36;2.09</span>
                          </span>
                          <div className="noo-product-excerpt">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#" className="add_to_wishlist"></a>
                                </div>
                              </div>
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
                              src={base_url + "assets/images/product/product_6.jpg"}
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
                            <a href="shop-detail.html">Cookie</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#36;15.00</span>
                          </span>
                          <div className="noo-product-excerpt">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#" className="add_to_wishlist"></a>
                                </div>
                              </div>
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
                              src={base_url + "assets/images/product/product_7.jpg"}
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
                            <a href="shop-detail.html">Cucumbers</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#36;1.95</span>
                          </span>
                          <div className="noo-product-excerpt">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#" className="add_to_wishlist"></a>
                                </div>
                              </div>
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
                              src={base_url + "assets/images/product/product_8.jpg"}
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
                            <a href="shop-detail.html">French Bread</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#36;10.00</span>
                          </span>
                          <div className="noo-product-excerpt">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#" className="add_to_wishlist"></a>
                                </div>
                              </div>
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
                              src={base_url + "assets/images/product/product_15.jpg"}
                              alt=""
                            />
                          </a>
                          <div className="noo-rating">
                            <div className="star-rating">
                              <span style={{ width: "80%" }}></span>
                            </div>
                          </div>
                        </div>
                        <div className="noo-product-title">
                          <h3>
                            <a href="shop-detail.html">Green Apples</a>
                          </h3>
                          <span className="price">
                            <span className="amount">&#36;3.15</span>
                          </span>
                          <div className="noo-product-excerpt">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                          <div className="noo-product-action">
                            <div className="noo-action">
                              <a
                                href="#"
                                className="button product_type_simple add_to_cart_button"
                              >
                                <span>Add to cart</span>
                              </a>
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#" className="add_to_wishlist"></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pagination list-center">
                    <span className="page-numbers current">1</span>
                    <a className="page-numbers" href="#">
                      2
                    </a>
                    <a className="page-numbers" href="#">
                      3
                    </a>
                    <a className="next page-numbers" href="#">
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="noo-sidebar col-md-3">
                  <div className="noo-sidebar-wrap">
                    <div className="widget commerce widget_product_search">
                      <h3 className="widget-title">Search</h3>
                      <form className="commerce-product-search">
                        <input
                          type="search"
                          id="commerce-product-search-field"
                          className="search-field"
                          placeholder="Search Products&hellip;"
                          defaultValue=""
                          name="s"
                        />
                        <input type="submit" defaultValue="Search" />
                      </form>
                    </div>
                    <div className="widget commerce widget_product_categories">
                      <h3 className="widget-title">Categories</h3>
                      <ul className="product-categories">
                        <li>
                          <a href="#">Bread</a>
                        </li>
                        <li>
                          <a href="#">Featured</a>
                        </li>
                        <li>
                          <a href="#">Fruit</a>
                        </li>
                        <li>
                          <a href="#">Fruit Box</a>
                        </li>
                        <li>
                          <a href="#">Fruits</a>
                        </li>
                        <li>
                          <a href="#">Others</a>
                        </li>
                        <li>
                          <a href="#">Package</a>
                        </li>
                        <li>
                          <a href="#">Vegetable</a>
                        </li>
                        <li>
                          <a href="#">Vegetable Box</a>
                        </li>
                      </ul>
                    </div>
                    <div className="widget commerce widget_price_filter">
                      <h3 className="widget-title">Filter by price</h3>
                      <form>
                        <div className="price_slider_wrapper">
                          <div
                            className="price_slider"
                            style={{ display: "none" }}
                          ></div>
                          <div className="price_slider_amount">
                            <input
                              type="text"
                              id="min_price"
                              name="min_price"
                              data-min="0"
                              placeholder="Min price"
                            />
                            <input
                              type="text"
                              id="max_price"
                              name="max_price"
                              data-max="15"
                              placeholder="Max price"
                            />
                            <button type="submit" className="button">
                              Filter
                            </button>
                            <div
                              className="price_label"
                              style={{ display: "none" }}
                            >
                              Price: <span className="from"></span> &mdash;{" "}
                              <span className="to"></span>
                            </div>
                            <div className="clear"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="widget commerce widget_products">
                      <h3 className="widget-title">Popular products</h3>
                      <ul className="product_list_widget">
                        <li>
                          <a href="shop-detail.html">
                            <img
                              width="100"
                              height="100"
                              src={base_url + "assets/images/product/thumb/product_1.png"}
                              alt=""
                            />
                            <span className="product-title">French Bread</span>
                          </a>
                          <span className="amount">&#36;10.00</span>
                        </li>
                        <li>
                          <a href="shop-detail.html">
                            <img
                              width="100"
                              height="100"
                              src={base_url + "assets/images/product/thumb/product_2.png"}
                              alt=""
                            />
                            <span className="product-title">Cookie</span>
                          </a>
                          <span className="amount">&#36;15.00</span>
                        </li>
                        <li>
                          <a href="shop-detail.html">
                            <img
                              width="100"
                              height="100"
                              src={base_url + "assets/images/product/thumb/product_3.png"}
                              alt=""
                            />
                            <span className="product-title">Brown Bread</span>
                          </a>
                          <span className="amount">&#36;12.00</span>
                        </li>
                        <li>
                          <a href="shop-detail.html">
                            <img
                              width="100"
                              height="100"
                              src={base_url + "assets/images/product/thumb/product_6.png"}
                              alt=""
                            />
                            <span className="product-title">Apples</span>
                          </a>
                          <span className="amount">&#36;3.95</span>
                        </li>
                        <li>
                          <a href="shop-detail.html">
                            <img
                              width="100"
                              height="100"
                              src={base_url + "assets/images/product/thumb/product_7.png"}
                              alt=""
                            />
                            <span className="product-title">Pomegranates</span>
                          </a>
                          <span className="amount">&#36;3.90</span>
                        </li>
                      </ul>
                    </div>
                    <div className="widget commerce widget_product_tag_cloud">
                      <h3 className="widget-title">Product Tags</h3>
                      <div className="tagcloud">
                        <a href="#">apple</a>
                        <a href="#">bread</a>
                        <a href="#">broccoli</a>
                        <a href="#">brown bread</a>
                        <a href="#">carrot</a>
                        <a href="#">celery</a>
                        <a href="#">cookie</a>
                        <a href="#">cucumbers</a>
                        <a href="#">detox juicing</a>
                        <a href="#">french bread</a>
                        <a href="#">fruits</a>
                        <a href="#">green apple</a>
                        <a href="#">lemon</a>
                        <a href="#">lime</a>
                        <a href="#">mango</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="noo-footer-shop-now">
            <div className="container">
              <div className="col-md-7">
                <h4>- Every day fresh -</h4>
                <h3>organic food</h3>
              </div>
              <img
                src={base_url + "assets/images/organici-love-me.png"}
                className="noo-image-footer"
                alt=""
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <a href="#" className="go-to-top hidden-print">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};

export default ShopList;
