function revSlider_1() {
  $("#rev_slider_1")
    .show()
    .revolution({
      sliderType: "standard",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        onHoverStop: "on",
        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 50,
          swipe_direction: "horizontal",
          drag_block_vertical: !1,
        },
        bullets: {
          enable: !0,
          hide_onmobile: !0,
          hide_under: 600,
          style: "ares",
          hide_onleave: !0,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          direction: "vertical",
          h_align: "right",
          v_align: "center",
          h_offset: 30,
          v_offset: 0,
          space: 5,
          tmp: '<span class="tp-bullet-title">{{title}}</span>',
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [600, 768, 960, 720],
      lazyType: "none",
      parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2e3,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
        type: "mouse",
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "on",
      stopAfterLoops: 2,
      stopAtSlide: 1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      hideThumbsOnMobile: "on",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function revSlider_2() {
  $("#rev_slider_2")
    .show()
    .revolution({
      sliderType: "standard",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        onHoverStop: "off",
        arrows: {
          style: "hades",
          enable: !0,
          hide_onmobile: !1,
          hide_onleave: !1,
          tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
          },
        },
      },
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: 1240,
      gridheight: 868,
      lazyType: "none",
      shadow: 0,
      spinner: "spinner0",
      stopLoop: "on",
      stopAfterLoops: 1,
      stopAtSlide: 0,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function revSlider_3() {
  $("#rev_slider_3")
    .show()
    .revolution({
      sliderType: "standard",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        onHoverStop: "off",
        arrows: {
          style: "zeus",
          enable: !0,
          hide_onmobile: !1,
          hide_onleave: !1,
          tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
          },
        },
      },
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: 1240,
      gridheight: 868,
      lazyType: "none",
      shadow: 0,
      spinner: "spinner0",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
$(document).ready(function () {
  function e() {
    $(".header-1").length > 0 &&
      ($(window).width() < 1500
        ? $("header").find(".noo-menu-option").find("li").length > 0 &&
          $("header").find(".noo-menu-option").addClass("collapse")
        : $("header").find(".noo-menu-option").removeClass("collapse")),
      $(".header-3").length > 0 &&
        ($(window).width() < 1300
          ? $("header").find(".noo-menu-option").find("li").length > 0 &&
            $("header").find(".noo-menu-option").addClass("collapse")
          : $("header").find(".noo-menu-option").removeClass("collapse"));
  }
  function o(e) {
    var o = this.currentItem;
    $(".noo-testimonial-sync1")
      .find(".owl-item")
      .removeClass("synced")
      .eq(o)
      .addClass("synced"),
      void 0 !== $(".noo-testimonial-sync1").data("owlCarousel") && i(o);
  }
  function i(e) {
    var o = a.data("owlCarousel").owl.visibleItems,
      i = e,
      t = !1;
    for (var n in o) if (i === o[n]) var t = !0;
    t === !1
      ? i > o[o.length - 1]
        ? a.trigger("owl.goTo", i - o.length + 2)
        : (i - 1 === -1 && (i = 0), a.trigger("owl.goTo", i))
      : i === o[o.length - 1]
      ? a.trigger("owl.goTo", o[1])
      : i === o[0] && a.trigger("owl.goTo", i - 1);
  }
  if (
    ($(".noo-search").on("click", function () {
      return (
        $(".search-header5").fadeIn(1).addClass("search-header-eff"),
        $(".search-header5")
          .find('input[type="search"]')
          .val("")
          .attr("placeholder", "")
          .select(),
        !1
      );
    }),
    $(".remove-form").on("click", function () {
      $(".search-header5").fadeOut(1).removeClass("search-header-eff");
    }),
    $(".button-menu-extend").on("click", function () {
      return (
        $(".noo-menu-extend-overlay")
          .fadeIn(1, function () {
            $(".noo-menu-extend").addClass("show");
          })
          .addClass("show"),
        !1
      );
    }),
    $(".menu-closed, .noo-menu-extend-overlay").on("click", function () {
      $(".noo-menu-extend-overlay").removeClass("show").hide(),
        $(".noo-menu-extend").removeClass("show");
    }),
    $("body").hasClass("fixed_top") &&
      $(window).scroll(function () {
        var e = 0;
        if ($(".noo-topbar").length > 0) {
          var o = $(".noo-topbar").height();
          e = "-" + o + "px";
        }
        var i = $("header").height();
        $(".header-5").length > 0 &&
          ($(window).width() < 992 ? (e = "144px") : (i = 200));
        var t = $(window).scrollTop();
        i >= t
          ? $("header").hasClass("eff") &&
            ($(".header-6").length > 0
              ? $("header").css("marginTop", "25px").removeClass("eff")
              : $("header").css("marginTop", 0).removeClass("eff"))
          : $("header").hasClass("eff") ||
            ($("header")
              .css("marginTop", "-150px")
              .animate({ marginTop: e }, 700),
            $("header").addClass("eff"));
      }),
    e(),
    $(window).resize(function () {
      e();
    }),
    $("#off-canvas-nav li.menu-item-has-children").append(
      '<i class="fa fa-angle-down"></i>'
    ),
    $("#off-canvas-nav li.menu-item-has-children i").on("click", function (e) {
      var o = $(this);
      o.prev().slideToggle(300), o.parent().toggleClass("active");
    }),
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) &&
      $(".navbar-nav")
        .find(".menu-item-has-children")
        .find("a")
        .on("touchstart", function (e) {
          "use strict";
          var o = $(this);
          return o.hasClass("hover")
            ? !0
            : (o.addClass("hover"),
              $(".navbar-nav")
                .find(".menu-item-has-children")
                .find("a")
                .not(this)
                .removeClass("hover"),
              e.preventDefault(),
              !1);
        }),
    $("#elasticstack").length > 0 &&
      new ElastiStack(document.getElementById("elasticstack")),
    $(".defaultCountdown").length > 0)
  ) {
    var t = new Date(2016, 12, 31);
    $(".defaultCountdown").countdown({ until: t }),
      $("#year").text(t.getFullYear());
  }
  if ($(".noo_custom_countdown").length > 0) {
    var t = new Date(2016, 12, 21);
    $(".noo_custom_countdown").countdown({ until: t }),
      $("#year").text(t.getFullYear());
  }
  $(".noo-product-sliders").owlCarousel({
    items: 4,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [991, 2],
    itemsTablet: [768, 2],
    slideSpeed: 500,
    paginationSpeed: 800,
    rewindSpeed: 1e3,
    autoHeight: !1,
    addClassActive: !0,
    autoPlay: !1,
    loop: !0,
    pagination: !0,
  }),
    $(".blog-slider").owlCarousel({ items: 1, singleItem: !0 }),
    $(".noo-slider-image").owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [991, 2],
      itemsTablet: [768, 1],
      slideSpeed: 500,
      paginationSpeed: 800,
      rewindSpeed: 1e3,
      autoHeight: !0,
      addClassActive: !0,
      autoPlay: !0,
      loop: !0,
      pagination: !1,
    }),
    $(".noo-simple-product-slider").owlCarousel({
      items: 5,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 2],
      slideSpeed: 500,
      paginationSpeed: 800,
      rewindSpeed: 1e3,
      autoHeight: !0,
      addClassActive: !0,
      autoPlay: !1,
      loop: !0,
      pagination: !1,
    });
  var n = $(".noo-testimonial-sync2"),
    a = $(".noo-testimonial-sync1");
  n.owlCarousel({
    singleItem: !0,
    slideSpeed: 1e3,
    navigation: !1,
    pagination: !1,
    afterAction: o,
    responsiveRefreshRate: 200,
  }),
    $(".noo-testimonial-sync1").on("click", ".owl-item", function (e) {
      e.preventDefault();
      var o = $(this).data("owlItem");
      n.trigger("owl.goTo", o);
    }),
    a.owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 3],
      itemsMobile: [479, 2],
      pagination: !1,
      responsiveRefreshRate: 100,
      afterInit: function (e) {
        e.find(".owl-item").eq(1).click();
      },
    }),
    $(".noo_testimonial").each(function () {
      $(this).owlCarousel({
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        slideSpeed: 500,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoHeight: !1,
        addClassActive: !0,
        autoPlay: !0,
        loop: !0,
        pagination: !0,
        afterInit: function (e) {
          e.find(".owl-item").eq(1).addClass("synced");
        },
      });
    }),
    $(".noo-qucik-view").length > 0 &&
      $(".noo-qucik-view").magnificPopup({ type: "ajax" }),
    $(".box-inner").each(function () {
      var e = $(this)
        .find(".product-box-header li:first-child span")
        .data("color");
      $(this)
        .find(".product-box-header li:first-child span")
        .css("background", e)
        .addClass("acitve"),
        $(this).find(".box-content h3").css("color", e),
        $(this).find(".box-description-tab").css("background-color", e);
    }),
    $(".product-box-header li span").mousemove(function () {
      var e = $(this).closest(".box-inner");
      e.find(".product-box-header li span")
        .removeAttr("style")
        .removeClass("acitve");
      var o = $(this).data("color"),
        i = $(this).data("id");
      $(this).css("background", o).addClass("acitve"),
        e.find(".box-content-tab").hide(),
        e.find(i).show();
    }),
    $(".sync1").owlCarousel({
      singleItem: !0,
      slideSpeed: 1e3,
      navigation: !1,
      pagination: !1,
      autoHeight: !0,
      responsiveRefreshRate: 200,
    }),
    $(".sync2").owlCarousel({
      items: 4,
      itemsDesktop: [1199, 4],
      itemsDesktopSmall: [979, 4],
      itemsTablet: [768, 3],
      itemsMobile: [479, 2],
      pagination: !1,
      responsiveRefreshRate: 100,
    }),
    $(".sync2").on("click", ".owl-item", function (e) {
      e.preventDefault();
      var o = $(this).data("owlItem");
      $(".sync1").trigger("owl.goTo", o);
    }),
    $(".widget_recent_entries .post_list_widget li").each(function () {
      var e = $(this).find(".post-thumb");
      e.css("background-image", 'url("' + e.attr("data-bg") + '")');
    }),
    $(".noo-simple-product-slider li").each(function () {
      var e = $(this).find(".noo-simple-slider-item");
      e.css("background-image", 'url("' + e.attr("data-bg") + '")');
    }),
    $(".flickr-badge-wrapper").length > 0 &&
      $(".flickr-badge-wrapper").jflickrfeed(
        {
          limit: 9,
          qstrings: { id: "71865026@N00" },
          itemTemplate:
            '<a class="flickr_badge_image" href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a>',
        },
        function (e) {
          $(".flickr_badge_image").magnificPopup({
            type: "image",
            gallery: { enabled: !0 },
          });
        }
      ),
    $("#rev_slider_1").length > 0 && revSlider_1(),
    $("#rev_slider_2").length > 0 && revSlider_2(),
    $("#rev_slider_3").length > 0 && revSlider_3();
}),
  $(window).load(function () {
    $(".noo-page-heading").addClass("eff"),
      $(".page-title").addClass("eff"),
      $(".noo-page-breadcrumb").addClass("eff"),
      $(".noo-spinner").remove();
  });
