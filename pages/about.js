import React from "react";
import Head from "next/head";
import Link from "next/link";
import Spinner from "../Components/Layout/Comps/Spinner/Spinner";
import Header from "../Components/Layout/Comps/Header/Header";
import Footer from "../Components/Layout/Comps/Footer/Footer";
import { base_url } from "../urlConfig";

const About = () => {
  return (
    <>
      <Head>
        <title>ABOUT - KUMBAYA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Spinner />
      <div className="site">
        <Header />

        <section className="noo-page-heading eff">
          <div className="container">
            <div className="noo-heading-content">
              <h1 className="page-title eff">Our Story</h1>
              <div className="noo-page-breadcrumb eff">
				  <Link href="/">
                <a  className="home">
                  Kumbaya
                </a>
				</Link>
                /<span>Our Story</span>
              </div>
            </div>
          </div>
        </section>

        <div className="main">
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
                          Lorem ipsum dolor sit amet, consectetur adip isicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo cons equat. Quisque pretium nulla nec
                          risus laoreet, eu vestibulum magna pellentesque.
                        </p>
                        <p>
                          Maecenas tristique gravida odio, et sagi ttis justo
                          interdum porta. Duis et lacus mattis, tincidunt ero.
                          Lorem ipsum dolor sit amet, consectetur adip isicing
                          elit, sed do eiusmod tempor incididunt ut labore.
                          Aliquam eu quam convallis, semper augue non, aliquam
                          justo. Lorem ipsum dolor sit amet, consectetur
                        </p>
                      </div>
                      <div className="text-center">
                        <a href="#">purchase theme</a>
                      </div>
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
          <div className="about-us-1">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="noo_image_center">
                    <div className="noo-image-signature">
                      <div className="img-background-color"></div>
                      <div className="img-background-sign"></div>
                      <div className="pull-left img-sign">
                        <img
                          width="152"
                          height="113"
                          src={base_url + "assets/images/signature_green.png"}
                          alt=""
                        />
                      </div>
                      <div className="pull-left">
                        <h6>Jonh Doe</h6>
                        <span>Director Organici</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="noo-sh-title noo-farmer-title noo-farmer-title-slider">
                    <h2>Our farmers</h2>
                    <p>
                      Maecenas tristique gravida odio, et sagi ttis justo
                      interdum porta. Duis et lacus mattis, tincidunt ero.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adip isicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo cons equat.
                      Lorem ipsum dolor sit amet, consectetur. Quisque pretium
                      nulla nec risus laoreet, eu vestibulum magna pellentesque.
                      Nam eu sapien imperdiet nulla aliquet molestie sed ut
                      nibh.
                    </p>
                  </div>
                  <div className="noo_testimonial_wrap noo_farmer_wrap">
                    <div className="noo-testimonial-sync1 style-2">
                      <div className="item">
                        <div className="background_image">
                          <img
                            className="noo_testimonial_avatar"
                            src={base_url + "assets/images/team/team_1.png"}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="background_image">
                          <img
                            className="noo_testimonial_avatar"
                            src={base_url + "assets/images/team/team_2.png"}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="background_image">
                          <img
                            className="noo_testimonial_avatar"
                            src={base_url + "assets/images/team/team_3.png"}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="background_image">
                          <img
                            className="noo_testimonial_avatar"
                            src={base_url + "assets/images/team/team_1.png"}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="noo-testimonial-sync2">
                      <div className="item">
                        <div className="testimonial-name">
                          <h4 className="noo_testimonial_name">Tristique</h4>
                        </div>
                        <div className="testimonial-content">
                          <span className="social">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-google"></a>
                          </span>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimonial-name">
                          <h4 className="noo_testimonial_name">
                            Alyssa Hiyama
                          </h4>
                        </div>
                        <div className="testimonial-content">
                          <span className="social">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-instagram"></a>
                          </span>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimonial-name">
                          <h4 className="noo_testimonial_name">
                            Alberto Trombin
                          </h4>
                        </div>
                        <div className="testimonial-content">
                          <span className="social">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-pinterest"></a>
                          </span>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimonial-name">
                          <h4 className="noo_testimonial_name">
                            Michael Andrews
                          </h4>
                        </div>
                        <div className="testimonial-content">
                          <span className="social">
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-instagram"></a>
                          </span>
                        </div>
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
          <div className="newsletter">
            <div className="noo-sh-mailchimp">
              <div className="container">
                <div className="row">
                  <div className="col-md-5 col-xs-12">
                    <h3 className="noo-mail-title">Subscribe to us!</h3>
                    <p className="noo-mail-desc">
                      Enter Your email address for our mailing list to keep
                      yourself update.
                    </p>
                  </div>
                  <div className="col-md-7 col-xs-12">
                    <form>
                      <div className="newsletter-form-fields">
                        <input
                          type="email"
                          name="EMAIL"
                          placeholder="Email address"
                          required
                        />
                        <input type="submit" value="submit" />
                      </div>
                    </form>
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
};

export default About;
