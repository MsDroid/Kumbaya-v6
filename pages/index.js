import next from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Spinner from "../Components/Layout/Comps/Spinner/Spinner";
import Header from "../Components/Layout/Comps/Header/Header";
import Footer from "../Components/Layout/Comps/Footer/Footer";
import Slider from "../Components/Slider/Slider";
import AboutUs from "../Components/AboutUs/AboutUs";
import FeaturedProduct from "../Components/FeaturedProduct/FeaturedProduct";
import Deal from "../Components/Deal/Deal";
import OfferCard from "../Components/OfferCard/OfferCard";
import OurProduct from "../Components/OurProduct/OurProduct";
import Ad from "../Components/Ad/Ad";
import Testimonial from "../Components/Testimonial/Testimonial";
import { base_url } from "../urlConfig";

export default function Home() {
  return (
    <>
      <Head>
        <title>KUMBAYA - ORGANIC STORE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Spinner />
      <div className="site">
        <Header />
        <div className="main">
          <Slider />
          <div className="about-us-1">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="row noo-our_story">
                    <div className="col-md-6 col-sm-6">
                      <h2>Have a look at our beautiful farm!</h2>
                      <div className="our_story_content">
                        <p>
                          Maecenas tristique gravida odio, et sagi ttis justo
                          interdum porta. Duis et lacus mattis, tincidunt ero.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consecttetur adip isicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo cons equat. Quisque pretium nulla nec
                          risus laoreet, eu vestibulum magna pellentesque.
                        </p>
                      </div>
                      <img
                        width="152"
                        height="113"
                        src={base_url + "assets/images/signature.png"}
                        className="signature"
                        alt="signature"
                      />
                      <p className="text-center">
                        <a href="#">read more</a>
                      </p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <ul id="elasticstack" className="elasticstack">
                        <li>
                          <div className="image-elastickstack bg-1"></div>
                        </li>
                        <li>
                          <div className="image-elastickstack bg-2"></div>
                        </li>
                        <li>
                          <div className="image-elastickstack bg-3"></div>
                        </li>
                        <li>
                          <div className="image-elastickstack bg-4"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-product-2">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="noo-sh-title noo-product-list-title">
                    <h2>Featured products</h2>
                    <p>
                      Maecenas tristique gravida odio, et sagi ttis justo
                      interdum porta
                    </p>
                  </div>
                  <div className="row product-list-item left">
                    <div className="col-md-6 col-sm-6 left-content">
                      <h3>
                        <a href="shop-detail.html">Passion fruit</a>
                      </h3>
                      <div className="list-excerpt">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
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
          <div className="pt-11 pb-4">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="noo-sh-title noo-blog-title">
                    <h2>Deal of the day</h2>
                    <p>
                      Maecenas tristique gravida odio, et sagi ttis justo
                      interdum porta.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
                        </p>
                      </div>
                      <div className="product_meta">
                        <span className="posted_in">
                          Category: <a href="#">Fruit</a>
                        </span>
                        <span className="tagged_as">
                          Tags: <a href="#">fruits</a>,{" "}
                          <a href="#">green apple</a>
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

          <div className="our-product">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="noo-product-slider-wrap commerce">
                    <div className="noo-sh-title">
                      <h2>Our new products</h2>
                      <p>
                        Maecenas tristique gravida odio, et sagi ttis justo
                        interdum porta. Duis et lacus mattis, tincidunt eronec
                        dictum non nulla.
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
                                  <span style={{ width: "20% " }}></span>
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

          <div className="testimonial-2">
            <div className="container">
              <div className="row">
                <div className="noo_testimonial_wrap">
                  <div className="noo-testimonial-sync1">
                    <div className="item">
                      <div className="background_image">
                        <img
                          className="noo_testimonial_avatar"
                          src={base_url + "assets/images/avatar/avatar_1.jpg"}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="background_image">
                        <img
                          className="noo_testimonial_avatar"
                          src={base_url + "assets/images/avatar/avatar_2.jpg"}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="background_image">
                        <img
                          className="noo_testimonial_avatar"
                          src={base_url + "assets/images/avatar/avatar_3.jpg"}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="background_image">
                        <img
                          className="noo_testimonial_avatar"
                          src={base_url + "assets/images/avatar/avatar_4.jpg"}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="noo-testimonial-sync2">
                    <div className="item">
                      <div className="testimonial-content">
                        <div>
                          <i className="fa fa-quote-left"></i>
                          <p>
                            Maecenas tristique gravida odio, et sagi ttis justo
                            interdum porta. Duis et lacus mattis, tincidunt ero.
                            Donec dictum non nulla ut tris tique gravida odio
                            lobortis tristique gravida. Aliquam erat volutpat.
                            Pellentesque auctor, arcu id tristique.
                          </p>
                          <i className="fa fa-quote-right"></i>
                        </div>
                      </div>
                      <div className="testimonial-name">
                        <h4 className="noo_testimonial_name">- Taylor -</h4>
                        <span className="noo_testimonial_position">
                          ( Web Designer )
                        </span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-content">
                        <div>
                          <i className="fa fa-quote-left"></i>
                          <p>
                            Maecenas tristique gravida odio, et sagi ttis justo
                            interdum porta. Duis et lacus mattis, tincidunt ero.
                            Donec dictum non nulla ut tris tique gravida odio
                            lobortis tristique gravida. Aliquam erat volutpat.
                            Pellentesque auctor, arcu id tristique.
                          </p>
                          <i className="fa fa-quote-right"></i>
                        </div>
                      </div>
                      <div className="testimonial-name">
                        <h4 className="noo_testimonial_name">- Ashley -</h4>
                        <span className="noo_testimonial_position">
                          ( Developer )
                        </span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-content">
                        <div>
                          <i className="fa fa-quote-left"></i>
                          <p>
                            Maecenas tristique gravida odio, et sagi ttis justo
                            interdum porta. Duis et lacus mattis, tincidunt ero.
                            Donec dictum non nulla ut tris tique gravida odio
                            lobortis tristique gravida. Aliquam erat volutpat.
                            Pellentesque auctor, arcu id tristique.
                          </p>
                          <i className="fa fa-quote-right"></i>
                        </div>
                      </div>
                      <div className="testimonial-name">
                        <h4 className="noo_testimonial_name">- Olivia -</h4>
                        <span className="noo_testimonial_position">
                          ( Web Designer )
                        </span>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-content">
                        <div>
                          <i className="fa fa-quote-left"></i>
                          <p>
                            Maecenas tristique gravida odio, et sagi ttis justo
                            interdum porta. Duis et lacus mattis, tincidunt ero.
                            Donec dictum non nulla ut tris tique gravida odio
                            lobortis tristique gravida. Aliquam erat volutpat.
                            Pellentesque auctor, arcu id tristique.
                          </p>
                          <i className="fa fa-quote-right"></i>
                        </div>
                      </div>
                      <div className="testimonial-name">
                        <h4 className="noo_testimonial_name">- Tyrion -</h4>
                        <span className="noo_testimonial_position">
                          ( Ceo )
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
}
