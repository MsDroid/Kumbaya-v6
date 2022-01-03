import Link from "next/link";
import Head from "next/head";
import React from "react";
import Footer from "../Components/Layout/Comps/Footer/Footer";
import Header from "../Components/Layout/Comps/Header/Header";
import Spinner from "../Components/Layout/Comps/Spinner/Spinner";
import { base_url } from "../urlConfig";

const ShopDetail = () => {
  return (
    <>
      <Head>
        <title>KUMBAYA - ORGANIC STORE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Spinner />
      <div className="site">
        <Header />
        <section className="noo-page-heading eff heading-6">
          <div className="container">
            <div className="noo-heading-content">
              <h1 className="page-title eff">Shop Detail</h1>
              <div className="noo-page-breadcrumb eff">
				  <Link href="/">
                <a className="home">
                  Kumbaya
                </a>
				</Link>
                /<span>Shop Detail</span>
              </div>
            </div>
          </div>
        </section>
        <div className="main">
          <div className="commerce single-product noo-shop-main">
            <div className="container">
              <div className="row">
                <div className="noo-main col-md-9">
                  <div className="product">
                    <div className="single-inner">
                      <div className="images">
                        <div className="product-simple-image">
                          <a
                            href="images/product/product_detail.jpg"
                            data-rel="prettyPhoto"
                          >
                            <img
                              width="300"
                              height="381"
                              src={base_url + "assets/images/product/product_detail.jpg"}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="summary entry-summary">
                        <h1 className="product_title entry-title">Cucumbers</h1>
                        <p className="price">
                          <span className="amount">&#36;1.95</span>
                        </p>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
                        </p>
                        <div className="product_meta">
                          <span className="posted_in">
                            Category: <a href="#">Vegetable</a>
                          </span>
                          <span className="tagged_as">
                            Tags: <a href="#">cucumbers</a>,{" "}
                            <a href="#">vegetables</a>
                          </span>
                        </div>
                        <form className="cart">
                          <div className="quantity">
                            <input
                              type="number"
                              step="1"
                              min="1"
                              name="quantity"
                              value="1"
                              title="Qty"
                              className="input-text qty text"
                              size="4"
                            />
                          </div>
                          <button
                            type="submit"
                            className="single_add_to_cart_button button"
                          >
                            Add to cart
                          </button>
                        </form>
                        <div className="yith-wcwl-add-to-wishlist">
                          <div className="yith-wcwl-add-button">
                            <a href="#" className="add_to_wishlist"></a>
                          </div>
                        </div>
                        <div className="clear"></div>
                        <div className="noo-social-share">
                          <span>Share:</span>
                          <a
                            href="#share"
                            className="noo-share"
                            title="Share on Facebook"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a
                            href="#share"
                            className="noo-share"
                            title="Share on Twitter"
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a
                            href="#share"
                            className="noo-share"
                            title="Share on Google+"
                          >
                            <i className="fa fa-google-plus"></i>
                          </a>
                          <a
                            href="#share"
                            className="noo-share"
                            title="Share on Pinterest"
                          >
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="commerce-tabs">
                      <ul className="nav nav-tabs tabs">
                        <li className="active">
                          <a data-toggle="tab" href="#tab-1">
                            Description
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#tab-2">
                            Reviews
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane fade in active" id="tab-1">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Maecenas tristique gravida,
                            odio et sagi ttis justo. Susp endisse ultricies nisi
                            vel quam suscipit, et rutrum odio porttitor. Donec
                            dictum non nulla ut lobortis. Maecenas tristique
                            gravida, odio et sagi ttis justo. Aliquam vitae mi a
                            eros tincidunt ultricies. Donec porta gravida arcu.
                            Morbi facilisis lorem felis, eu inerdum quam
                            scelerisque eu. Phasellus vel turpis dictum,
                            pulvinar nulla
                          </p>
                        </div>
                        <div id="tab-2" className="tab-pane fade">
                          <div id="comments" className="comments-area">
                            <h2 className="comments-title">3 Comments</h2>
                            <ol className="comments-list">
                              <li className="comment">
                                <div className="comment-wrap">
                                  <div className="comment-img">
                                    <img
                                      alt=""
                                      src="http://placehold.it/100x100"
                                      height="80"
                                      width="80"
                                    />
                                  </div>
                                  <article className="comment-block">
                                    <header className="comment-header">
                                      <cite className="comment-author">
                                        admin
                                      </cite>
                                      <div className="comment-meta">
                                        <span className="time">
                                          4 months ago
                                        </span>
                                      </div>
                                    </header>
                                    <div className="comment-content">
                                      <p>
                                        fames ac turpis egestas. Ut non enim
                                        eleifend felis pretium feugiat. Vivamus
                                        quis mi. Phasellus
                                      </p>
                                    </div>
                                    <span className="comment-reply">
                                      <a
                                        className="comment-reply-link"
                                        href="#"
                                      >
                                        <i className="fa fa-reply"></i> Reply
                                      </a>
                                    </span>
                                  </article>
                                </div>
                                <ol className="children">
                                  <li className="comment">
                                    <div className="comment-wrap">
                                      <div className="comment-img">
                                        <img
                                          alt=""
                                          src="http://placehold.it/100x100"
                                          height="80"
                                          width="80"
                                        />
                                      </div>
                                      <article className="comment-block">
                                        <header className="comment-header">
                                          <cite className="comment-author">
                                            admin
                                          </cite>
                                          <div className="comment-meta">
                                            <span className="time">
                                              4 months ago
                                            </span>
                                          </div>
                                        </header>
                                        <div className="comment-content">
                                          <p>
                                            fSames ac turpis egestas. Ut non
                                            enim eleifend felis pretium feugiat.
                                            Vivamus quis mi. Phasellus
                                          </p>
                                        </div>
                                        <span className="comment-reply">
                                          <a
                                            className="comment-reply-link"
                                            href="#"
                                          >
                                            <i className="fa fa-reply"></i>{" "}
                                            Reply
                                          </a>
                                        </span>
                                      </article>
                                    </div>
                                  </li>
                                </ol>
                              </li>
                              <li className="comment">
                                <div className="comment-wrap">
                                  <div className="comment-img">
                                    <img
                                      alt=""
                                      src="http://placehold.it/100x100"
                                      height="80"
                                      width="80"
                                    />
                                  </div>
                                  <article className="comment-block">
                                    <header className="comment-header">
                                      <cite className="comment-author">
                                        admin
                                      </cite>
                                      <div className="comment-meta">
                                        <span className="time">
                                          4 months ago
                                        </span>
                                      </div>
                                    </header>
                                    <div className="comment-content">
                                      <p>
                                        fames ac turpis egestas. Ut non enim
                                        eleifend felis pretium feugiat. Vivamus
                                        quis mi. Phasellus
                                      </p>
                                    </div>
                                    <span className="comment-reply">
                                      <a
                                        className="comment-reply-link"
                                        href="#"
                                      >
                                        <i className="fa fa-reply"></i> Reply
                                      </a>
                                    </span>
                                  </article>
                                </div>
                              </li>
                            </ol>
                            <div id="respond-wrap">
                              <div id="respond" className="comment-respond">
                                <h3
                                  id="reply-title"
                                  className="comment-reply-title"
                                >
                                  <span>Leave your thought</span>
                                </h3>
                                <form className="comment-form">
                                  <div className="row">
                                    <div className="comment-form-author col-sm-6">
                                      <input
                                        id="author"
                                        name="author"
                                        type="text"
                                        placeholder="Enter Your Name*"
                                        className="form-control"
                                        value=""
                                        size="30"
                                      />
                                    </div>
                                    <div className="comment-form-email col-sm-6">
                                      <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="Enter Your Email*"
                                        className="form-control"
                                        value=""
                                        size="30"
                                      />
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="comment-form-comment">
                                        <textarea
                                          className="form-control"
                                          placeholder="Enter Your Comment"
                                          id="comment"
                                          name="comment"
                                          cols="40"
                                          rows="6"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-submit">
                                    <input
                                      name="submit"
                                      type="submit"
                                      id="submit"
                                      className="submit"
                                      value="Post Comments"
                                    />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="related products">
                      <h2>Related Products</h2>
                      <div className="products row product-grid">
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
                                <span className="amount">&#36;2.09</span>
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
                                  src={base_url + "assets/images/product/product_16.jpg"}
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
                                <a href="shop-detail.html">Onions</a>
                              </h3>
                              <span className="price">
                                <span className="amount">&#36;1.70</span>
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
                          value=""
                          name="s"
                        />
                        <input type="submit" value="Search" />
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

export default ShopDetail;
