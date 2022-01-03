import Link from "next/link";
import Head from "next/head";
import React from "react";
import Footer from "../Components/Layout/Comps/Footer/Footer";
import Header from "../Components/Layout/Comps/Header/Header";
import Spinner from "../Components/Layout/Comps/Spinner/Spinner";
import { base_url } from "../urlConfig";

const Wishlist = () => {
  return (
    <>
      <Head>
        <title>KUMBAYA - ORGANIC STORE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Spinner />
      <div className="site">
        <Header />
        <section className="noo-page-heading eff">
          <div className="container">
            <div className="noo-heading-content">
              <h1 className="page-title eff">Wishlist</h1>
              <div className="noo-page-breadcrumb eff">
				<Link href="/">
                <a className="home">
                  Kumbaya
                </a>
				</Link>
                /<span>Wishlist</span>
              </div>
            </div>
          </div>
        </section>
        <div className="main">
          <div className="commerce commerce-wishlist noo-shop-main">
            <div className="container">
              <div className="row">
                <div className="noo-main col-md-12">
                  <table className="shop_table cart wishlist_table">
                    <thead>
                      <tr>
                        <th className="product-remove"></th>
                        <th className="product-thumbnail"></th>
                        <th className="product-name">
                          <span className="nobr">Product Name</span>
                        </th>
                        <th className="product-price">
                          <span className="nobr">Unit Price </span>
                        </th>
                        <th className="product-stock-stauts">
                          <span className="nobr">Stock Status </span>
                        </th>
                        <th className="product-add-to-cart"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-remove">
                          <div>
                            <a href="#" className="remove">
                              &times;
                            </a>
                          </div>
                        </td>
                        <td className="product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="100"
                              height="100"
                              src={base_url + "images/product/thumb/product_3.png"}
                              alt=""
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="shop-detail.html">Brown Bread</a>
                        </td>
                        <td className="product-price">
                          <span className="amount">&#36;12.00</span>
                        </td>
                        <td className="product-stock-status">
                          <span className="wishlist-in-stock">In Stock</span>
                        </td>
                        <td className="product-add-to-cart">
                          <a href="#" className="button add_to_cart button">
                            {" "}
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-remove">
                          <div>
                            <a href="#" className="remove">
                              &times;
                            </a>
                          </div>
                        </td>
                        <td className="product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="100"
                              height="100"
                              src={base_url + "images/product/thumb/product_6.png"}
                              alt=""
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="shop-detail.html">Apples</a>
                        </td>
                        <td className="product-price">
                          <span className="amount">&#36;3.95</span>
                        </td>
                        <td className="product-stock-status">
                          <span className="wishlist-in-stock">In Stock</span>
                        </td>
                        <td className="product-add-to-cart">
                          <a href="#" className="button add_to_cart button">
                            {" "}
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                src={base_url + "images/organici-love-me.png"}
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

export default Wishlist;
