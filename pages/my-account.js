import Link from "next/link";
import Head from "next/head";
import React from "react";
import Footer from "../Components/Layout/Comps/Footer/Footer";
import Header from "../Components/Layout/Comps/Header/Header";
import Spinner from "../Components/Layout/Comps/Spinner/Spinner";
import { base_url } from "../urlConfig";

const MyAccount = () => {
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
              <h1 className="page-title eff">My Account</h1>
              <div className="noo-page-breadcrumb eff">
				  <Link href="/">
                <a className="home">
                  Kumbaya
                </a>
				</Link>
                /<span>My Account</span>
              </div>
            </div>
          </div>
        </section>
        <div className="main">
          <div className="commerce commerce-account noo-shop-main">
            <div className="container">
              <div className="row">
                <div className="noo-main col-md-12">
                  <div id="customer_login">
                    <div className="col-md-6">
                      <h2>Login</h2>
                      <form className="login">
                        <div className="form-row form-row-wide">
                          <label htmlFor="username">
                            Username or email address
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="input-text"
                            name="username"
                            id="username"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-row form-row-wide">
                          <label htmlFor="password">
                            Password
                            <span className="required">*</span>
                          </label>
                          <input
                            className="input-text"
                            type="password"
                            name="password"
                            id="password"
                          />
                        </div>
                        <div className="form-row">
                          <input
                            type="submit"
                            className="button"
                            name="login"
                            defaultValue="Login"
                          />
                        </div>
                        <div className="lost_password">
                          <a href="#">Lost your password?</a>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <h2>Register</h2>
                      <form className="register">
                        <div className="form-row form-row-wide">
                          <label htmlFor="reg_email">
                            Email address
                            <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            className="input-text"
                            name="email"
                            id="reg_email"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-row form-row-wide">
                          <label htmlFor="reg_password">
                            Password
                            <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            className="input-text"
                            name="password"
                            id="reg_password"
                          />
                        </div>
                        <div className="form-row">
                          <input
                            type="submit"
                            className="button"
                            name="register"
                            defaultValue="Register"
                          />
                        </div>
                      </form>
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

export default MyAccount;
