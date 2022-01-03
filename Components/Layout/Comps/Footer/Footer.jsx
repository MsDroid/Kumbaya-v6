import Link from "next/link";
import React from "react";
import { base_url } from "../../../../urlConfig";

const Footer = () => {
  return (
    <>
      <footer className="wrap-footer footer-2 colophon wigetized">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 item-footer-four">
              <div className="widget widget_about">
                <div className="noo_about_widget">
                  <a href="#">
                    <img
                      src={base_url + "assets/images/Kumbaya-Final_Dots.png"}
                      alt=""
                    />
                  </a>
                  <p>
                    Maecenas tristique gravida, odio et sagi ttis justo.
                    Suspendisse ultricies nisi veafn. onec dictum non nulla ut
                    lobortis tellus.
                  </p>
                </div>
              </div>
              <div className="widget widget_noo_social">
                <div className="noo_social">
                  <div className="social-all">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-google-plus"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-youtube"></a>
                    <a href="#" className="fa fa-skype"></a>
                  </div>
                </div>
              </div>
              <div className="widget widget_text">
                <div className="textwidget">
                  <div className="copyright">
                    2021 Kumbaya.
                    <br />
                    Developed by <i className="fa fa-heart-o"></i>{" "}
                    <a href="https://thecybertize.com/" target="_blank">
                      TheCybertize.
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item-footer-four">
              <div className="widget widget_text">
                <h4 className="widget-title">Contact</h4>
                <div className="textwidget">
                  <h5>Address</h5>
                  <p>
                    PRIVEDYA FOODS PVT LIMITED 157 A, ZONE 4 BIRSANAGAR
                    JAMSHEDPUR-831004 JHARKHAND
                  </p>
                  <h5>Hotline</h5>
                  <p>
                    <a href="#">(+91) 89175 95065</a>
                    <br />
                    <a href="#">(+91) 99738 02955</a>
                  </p>
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:info@kumbaya.in">info@kumbaya.in</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item-footer-four">
              <div className="widget widget_flickr">
                <h4 className="widget-title">Support</h4>
                {/* <div className="flickr-badge-wrapper"> */}
                <div>
                  <ul>
                    <li>
                      <Link href="/privacy-policy">
                        <a style={{ cursor: "pointer" }}>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/shipping-policy'>
                      <a style={{ cursor: "pointer" }}>Shipping Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/return-and-refund">
                      <a style={{ cursor: "pointer" }}>
                        Return & Refund Policy
                      </a>
                      </Link>
                    </li>
                    <li style={{ cursor: "pointer" }}>
                      <Link href='/faq'><a>FAQ's</a></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item-footer-four">
              <div className="widget widget_noo_openhours">
                <h4 className="widget-title">Working time</h4>
                <ul className="noo-openhours">
                  <li>
                    <span>Monday to Friday: </span>
                    <span>08:00am - 08:00pm </span>
                  </li>
                  <li>
                    <span>Saturday &amp; Sunday: </span>
                    <span>10:00am - 06:00pm </span>
                  </li>
                </ul>
              </div>
              <div className="widget widget_noo_happyhours">
                <h4 className="widget-title">Happy Hours</h4>
                <ul className="noo-happyhours">
                  <li>
                    <div>Enjoy discount baked goods. </div>
                    <div>06:00 am - 08:00 pm daily </div>
                  </li>
                </ul>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
