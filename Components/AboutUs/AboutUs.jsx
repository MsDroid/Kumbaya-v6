import React from "react";
import { base_url } from "../../urlConfig";

const AboutUs = () => {
  return (
    <>
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
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      cons equat. Quisque pretium nulla nec risus laoreet, eu
                      vestibulum magna pellentesque.
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
    </>
  );
};

export default AboutUs;
