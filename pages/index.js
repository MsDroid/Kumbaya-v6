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
import { sliderApi } from "../utils/mockData";

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
          <Slider sliderOne={sliderApi[0].slide} sliderTwo={sliderApi[1].slide} />
          <AboutUs />
          <FeaturedProduct />
          <Deal />
          <OfferCard />
          <OurProduct />
          <Ad />
          <Testimonial />
        </div>
        <Footer />
      </div>
      <a href="#" className="go-to-top hidden-print">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
}
