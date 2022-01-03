import Document, { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/dist/client/script";
import { base_url } from "../urlConfig";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> */}
          <link rel="shortcut icon" href="images/favicon.ico" />
          {/* <title>Home 2 - Organic Store | HTML Template</title> */}
          <link
            rel="stylesheet"
            href={base_url + "assets/css/bootstrap.min.css"}
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href={base_url + "assets/css/settings.css"}
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href={base_url + "assets/css/owl.carousel.css"}
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href={base_url + "assets/css/owl.theme.css"}
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href={base_url + "assets/css/font-awesome.min.css"}
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,300italic,400italic,700italic,900italic"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="http://fonts.googleapis.com/css?family=Pacifico:100,300,400,700,900,300italic,400italic,700italic,900italic"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="http://fonts.googleapis.com/css?family=Anonymous+Pro:"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href="http://fonts.googleapis.com/css?family=Roboto:700"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href={base_url + "assets/css/style.css"}
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href={base_url + "assets/css/custom.css"}
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href={base_url + "assets/css/magnific-popup.css"}
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            href={base_url + "assets/css/style-selector.css"}
            type="text/css"
            media="all"
          />
          <link
            id="style-main-color"
            rel="stylesheet"
            href={base_url + "assets/css/colors/default.css"}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src={base_url + "assets/js/jquery.min.js"} > </script> */}
          {/* <script src={base_url + "assets/js/bootstrap.min.js"} > </script> */}
          {/* <script src={base_url + "assets/js/jquery-migrate.min.js"} > </script>
          <script src={base_url + "assets/js/modernizr-2.7.1.min.js"} > </script>
          <script src={base_url + "assets/js/off-cavnass.js"} > </script>
          <script src={base_url + "assets/js/jquery.cookie.js"} > </script>
          <script src={base_url + "assets/js/style.selector.js"} > </script>
          <script src={base_url + "assets/js/script.js"} > </script>
          <script src={base_url + "assets/js/custom.js"} > </script>
          <script src={base_url + "assets/js/imagesloaded.pkgd.min.js"} > </script>
          <script src={base_url + "assets/js/isotope.pkgd.min.js"} > </script>
          <script src={base_url + "assets/js/portfolio.js"} > </script>
          <script src={base_url + "assets/js/jquery.touchSwipe.min.js"} > </script>
          <script src={base_url + "assets/js/jquery.carouFredSel-6.2.1.js"} > </script>
          <script src={base_url + "assets/js/jquery.isotope.min.js"} > </script>
          <script src={base_url + "assets/js/owl.carousel.min.js"} > </script>
          <script src={base_url + "assets/js/jflickrfeed.min.js"} > </script>
          <script src={base_url + "assets/js/jquery.magnific-popup.js"} > </script>
          <script src={base_url + "assets/js/modernizr.custom.js"} > </script>
          <script src={base_url + "assets/js/draggabilly.pkgd.min.js"} > </script>
          <script src={base_url + "assets/js/elastiStack.js"} > </script>
          <script src={base_url + "assets/js/jquery.plugin.min.js"} > </script>
          <script src={base_url + "assets/js/jquery.countdown.min.js"} > </script> */}
          {/* home slider script */}
          {/* <script src={base_url + "assets/js/jquery.themepunch.tools.min.js"} > </script>
          <script
            src={base_url + "assets/js/jquery.themepunch.revolution.min.js"}
          > </script>
          <script
            src={
              base_url +
              "assets/js/extensions/revolution.extension.video.min.js"
            }
          > </script>
          <script
            src={
              base_url +
              "assets/js/extensions/revolution.extension.slideanims.min.js"
            }
          > </script>
          <script
            src={
              base_url +
              "assets/js/extensions/revolution.extension.actions.min.js"
            }
          > </script>
          
          <script
            src={
              base_url +
              "assets/js/extensions/revolution.extension.layeranimation.min.js"
            }
          > </script>
          <script
            src={
              base_url +
              "assets/js/extensions/revolution.extension.kenburn.min.js"
            }
          > </script>
          <script
            src={
              base_url +
              "assets/js/extensions/revolution.extension.navigation.min.js"
            }
          > </script>
          <script
            src={
              base_url +
              "assets/js/extensions/revolution.extension.migration.min.js"
            }
          > </script>
          <script
            src={
              base_url +
              "assets/js/extensions/revolution.extension.parallax.min.js"
            }
          > </script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
