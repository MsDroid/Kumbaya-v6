import React from "react";
import Head from "next/head";
import Spinner from "../Components/Layout/Comps/Spinner/Spinner";
import Header from "../Components/Layout/Comps/Header/Header";
import Slider from "../Components/ContactComps/Slider/Slider";
import Footer from "../Components/Layout/Comps/Footer/Footer";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Head>
        <title>CONTACT - KUMBAYA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Spinner />
      <div className="site">
        <Header />
        <section className="noo-page-heading eff heading-blog">
          <div className="container">
            <div className="noo-heading-content">
              <h1 className="page-title eff">Contact Us</h1>
              <div className="noo-page-breadcrumb eff">
				<Link href="/">
                <a className="home">
                  Kumbaya
                </a>
				</Link>
                /<span>Contact Us</span>
              </div>
            </div>
          </div>
        </section>
        <div className="main">
          <div className="pt-10 pb-10">
            <div className="container">
              <div className="row">
                <div className="noo_image_left col-sm-6">
                  <div className="noo-image-signature">
                    <div className="img-background-color"></div>
                    <div className="img-background-sign style-2"></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <form className="form">
                    <h3>Get in touch</h3>
                    <p>
                      Aliquam vitae mi a eros tincidunt ultricies. Donec porta
                      gravida arcu. Morbi facilisis lorem felis, eu inerdum quam
                      scelerisque eu.
                    </p>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-control-wrap your-name">
                          <input
                            type="text"
                            name="your-name"
                            value=""
                            size="40"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-control-wrap your-website">
                          <input
                            type="text"
                            name="your-website"
                            value=""
                            size="40"
                            className="form-control"
                            placeholder="Website"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-control-wrap your-email">
                          <input
                            type="email"
                            name="your-email"
                            value=""
                            size="40"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-control-wrap your-phone">
                          <input
                            type="text"
                            name="your-phone"
                            value=""
                            size="40"
                            className="form-control"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-control-wrap your-message">
                          <textarea
                            name="your-message"
                            cols="40"
                            rows="10"
                            className="form-control"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <input
                          type="submit"
                          value="Submit"
                          className="form-control submit btn-primary"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="google-map">
            <div
            ><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14713.669563184736!2d86.24349061859299!3d22.78699289420385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e2bb577fa29f%3A0xe48644d7b35561d7!2sBirsanagar%2C%20Jamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1640840121634!5m2!1sen!2sin" width="1020" height="600" style={{ border:'0'}} allowFullScreen="" loading="lazy"></iframe></div>
            <div className="noo-address-info-wrap">
              <div className="container">
                <div className="address-info">
                  <h3>Contact info</h3>
                  <p>
                    Maecenas tristique gravida, odio et sagi ttis justo.
                    Suspendisse ultri cies nisi vel quam suscipit, et rutrum
                    odio porttitor. Claritas etiam proce ssusa dynamicus, tudium
                    lectorum.
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker"></i>
                      <span>
                        69 South Park Avenue San Francisco, CA 14782 USA
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>
                      <span>
                        <a href="mailto:email@domain.com">email@domain.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="fa fa-phone"> </i>
                      <span>(00) 123 456 789</span>
                    </li>
                    <li>
                      <i className="fa fa-globe"> </i>
                      <span>
                        <a href="#">http://www.companyname.com</a>
                      </span>
                    </li>
                  </ul>
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
};

export default Contact;
