import React from "react";
import Head from "next/head";
import Footer from "../Components/Layout/Comps/Footer/Footer";
import Header from "../Components/Layout/Comps/Header/Header";
import Spinner from "../Components/Layout/Comps/Spinner/Spinner";
import { base_url } from "../urlConfig";

const Cart = () => {
  return (
    <>
      <Head>
        <title>CART - KUMBAYA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Spinner />
      <div className="site">
        <Header />
        <section className="noo-page-heading eff">
          <div className="container">
            <div className="noo-heading-content">
              <h1 className="page-title eff">Cart</h1>
              <div className="noo-page-breadcrumb eff">
                <a href="index.html" className="home">
                  Kumbaya
                </a>
                /<span>Cart</span>
              </div>
            </div>
          </div>
        </section>
        <div className="main">
          <div className="commerce commerce-page commerce-cart noo-shop-main">
            <div className="container">
              <div className="row">
                <div className="noo-main col-md-12">
                  <table className="shop_table cart">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="100"
                              height="100"
                              src={base_url + "assets/images/product/thumb/product_6.png"}
                              alt=""
                            />
                          </a>
                          <a href="shop-detail.html">Apples </a>
                        </td>
                        <td className="product-price">
                          <span className="amount">&#36;3.95</span>
                        </td>
                        <td className="product-quantity">
                          <div className="quantity">
                            <input
                              type="number"
                              step="1"
                              min="0"
                              name="qty"
                              value="1"
                              className="input-text qty text"
                              size="4"
                            />
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">&#36;3.95</span>
                        </td>
                        <td className="product-remove">
                          <a href="#" className="remove">
                            &times;
                          </a>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-thumbnail">
                          <a href="shop-detail.html">
                            <img
                              width="100"
                              height="100"
                              src={base_url + "assets/images/product/thumb/product_3.png"}
                              alt=""
                            />
                          </a>
                          <a href="shop-detail.html">Brown Bread </a>
                        </td>
                        <td className="product-price">
                          <span className="amount">&#36;1.05</span>
                        </td>
                        <td className="product-quantity">
                          <div className="quantity">
                            <input
                              type="number"
                              step="1"
                              min="0"
                              name="qty"
                              value="2"
                              className="input-text qty text"
                              size="4"
                            />
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">&#36;1.05</span>
                        </td>
                        <td className="product-remove">
                          <a href="#" className="remove">
                            &times;
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5" className="actions">
                          <a className="continue" href="shop.html">
                            continue shopping
                          </a>
                          <div className="coupon">
                            <label htmlFor="coupon_code">Coupon:</label>
                            <input
                              type="text"
                              name="coupon_code"
                              className="input-text"
                              id="coupon_code"
                              value=""
                              placeholder="Coupon code"
                            />
                            <input
                              type="submit"
                              className="button"
                              name="apply_coupon"
                              value="Apply Coupon"
                            />
                          </div>
                          <input
                            type="submit"
                            className="button"
                            name="update_cart"
                            value="Update Cart"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cart-collaterals">
                    <div className="noocart-coupon">
                      <label htmlFor="coupon_code">Coupon</label>
                      <p>Enter your code if you have one</p>
                      <input
                        type="text"
                        name="noo_coupon_code"
                        className="input-text"
                        id="noo_coupon_code"
                        value=""
                        placeholder="Coupon code"
                      />
                      <button className="noo-apply-coupon button">
                        Apply Coupon
                      </button>
                    </div>
                    <div className="cart_totals">
                      <h2>Cart Totals</h2>
                      <table>
                        <tr className="cart-subtotal">
                          <th>Subtotal</th>
                          <td>
                            <span className="amount">&#36;6.05</span>
                          </td>
                        </tr>
                        <tr className="shipping">
                          <th>Shipping</th>
                          <td>
                            <p>
                              Shipping costs will be calculated once you have
                              provided your address.
                            </p>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Total</th>
                          <td>
                            <strong>
                              <span className="amount">&#36;6.05</span>
                            </strong>{" "}
                          </td>
                        </tr>
                      </table>
                      <div className="wc-proceed-to-checkout">
                        <a
                          href="#"
                          className="checkout-button button alt wc-forward"
                        >
                          Proceed to Checkout
                        </a>
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

export default Cart;
