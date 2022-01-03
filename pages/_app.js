import Layout from "../Components/Layout/Layout";
import "../styles/globals.css";
import Script from "next/script";
import { base_url } from "../urlConfig";



function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
      <Script id="my-script1" src={base_url + "assets/js/jquery.min.js"} > </Script>
      {/* <Script id="my-script" src={base_url + "assets/js/bootstrap.min.js"} > </Script> */}
      <Script id="my-script2" src={base_url + "assets/js/jquery-migrate.min.js"} > </Script>
      <Script id="my-script3" src={base_url + "assets/js/modernizr-2.7.1.min.js"} > </Script>
      <Script id="my-script4" src={base_url + "assets/js/off-cavnass.js"} > </Script>
      <Script id="my-script5" src={base_url + "assets/js/jquery.cookie.js"} > </Script>
      <Script id="my-script6" src={base_url + "assets/js/style.selector.js"} > </Script>
      <Script id="my-script7" src={base_url + "assets/js/Script.js"} > </Script>
      <Script id="my-script8" src={base_url + "assets/js/custom.js"} > </Script>
      <Script id="my-script9" src={base_url + "assets/js/imagesloaded.pkgd.min.js"} > </Script>
      <Script id="my-script10" src={base_url + "assets/js/isotope.pkgd.min.js"} > </Script>
      <Script id="my-script11" src={base_url + "assets/js/portfolio.js"} > </Script>
      <Script id="my-script12" src={base_url + "assets/js/jquery.touchSwipe.min.js"} > </Script>
      <Script id="my-script13" src={base_url + "assets/js/jquery.carouFredSel-6.2.1.js"} > </Script>
      <Script id="my-script14" src={base_url + "assets/js/jquery.isotope.min.js"} > </Script>
      <Script id="my-script15" src={base_url + "assets/js/owl.carousel.min.js"} > </Script>
      <Script id="my-script16" src={base_url + "assets/js/jflickrfeed.min.js"} > </Script>
      <Script id="my-script17" src={base_url + "assets/js/jquery.magnific-popup.js"} > </Script>
      <Script id="my-script18" src={base_url + "assets/js/modernizr.custom.js"} > </Script>
      <Script id="my-script19" src={base_url + "assets/js/draggabilly.pkgd.min.js"} > </Script>
      <Script id="my-script20" src={base_url + "assets/js/elastiStack.js"} > </Script>
      <Script id="my-script21" src={base_url + "assets/js/jquery.plugin.min.js"} > </Script>
      <Script id="my-script22" src={base_url + "assets/js/jquery.countdown.min.js"} > </Script>
      {/* home slider Script */}
      <Script id="my-script23" src={base_url + "assets/js/jquery.themepunch.tools.min.js"} > </Script>
      <Script id="my-script24"
        src={base_url + "assets/js/jquery.themepunch.revolution.min.js"}
      > </Script>
      <Script id="my-script25"
        src={
          base_url +
          "assets/js/extensions/revolution.extension.video.min.js"
        }
      > </Script>
      <Script id="my-script26"
        src={
          base_url +
          "assets/js/extensions/revolution.extension.slideanims.min.js"
        }
      > </Script>
      <Script id="my-script27"
        src={
          base_url +
          "assets/js/extensions/revolution.extension.actions.min.js"
        }
      > </Script>

      <Script id="my-script28"
        src={
          base_url +
          "assets/js/extensions/revolution.extension.layeranimation.min.js"
        }
      > </Script>
      <Script id="my-script29"
        src={
          base_url +
          "assets/js/extensions/revolution.extension.kenburn.min.js"
        }
      > </Script>
      <Script id="my-script30"
        src={
          base_url +
          "assets/js/extensions/revolution.extension.navigation.min.js"
        }
      > </Script>
      <Script id="my-script31"
        src={
          base_url +
          "assets/js/extensions/revolution.extension.migration.min.js"
        }
      > </Script>
      <Script id="my-script32"
        src={
          base_url +
          "assets/js/extensions/revolution.extension.parallax.min.js"
        }
      > </Script>
     </>
    
  );
}

export default MyApp;
