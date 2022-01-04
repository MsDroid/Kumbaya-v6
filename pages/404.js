import React from "react";
import Head from "next/head";
import Footer from "../Components/Layout/Comps/Footer/Footer";
import Header from "../Components/Layout/Comps/Header/Header";
import Spinner from "../Components/Layout/Comps/Spinner/Spinner";
import { base_url } from "../urlConfig";

//
const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - KUMBAYA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="site">
        <Header />
        
        <div className="main">
          {/* image done help form help */}
          <center>
          <img src={base_url + "assets/images/404.jpg"} alt="" style={{margin:'100px 0'}}  />
          </center>
          
          
        </div>

        <Footer />
      </div>
      <a href="#" className="go-to-top hidden-print">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};

export default NotFound;
