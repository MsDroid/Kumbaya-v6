import React from "react";
import { base_url } from "../../urlConfig";

const Slider = () => {
  return (
    <>
      <div className="rev_slider_wrapper fullscreen-container">
        <div id="rev_slider_1" className="rev_slider fullscreenbanner">
          <ul>
            <li
              data-transition="fade"
              data-slotamount="default"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="300"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Slide"
            >
              <img
                src={base_url + "assets/images/banner/banner-1.jpg"}
                alt=""
                width="1440"
                height="1029"
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="off"
                className="rev-slidebg"
              />

              <div
                className="tp-caption tp-resizeme"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-150','-150','-150','-150']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;"
                data-transform_in="y:50px;opacity:0;s:1000;e:Power2.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-start="1000"
                data-responsive_offset="on"
              >
                <img
                  src={base_url + "assets/images/banner/icon-s2.png"}
                  alt=""
                  width="134"
                  height="87"
                />
              </div>

              <div
                className="tp-caption caption-1 tp-resizeme"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-40','-40','-40','-40']"
                data-fontsize="['56','56','56','20']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;"
                data-transform_in="y:50px;opacity:0;s:1000;e:Power2.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-start="1200"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
              >
                Natural taste from the farm
              </div>

              <div
                className="tp-caption caption-2 tp-resizeme"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['50','50','50','50']"
                data-fontsize="['14','14','12','12']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-visibility="['on','on','on','off']"
                data-transform_idle="o:1;"
                data-transform_in="y:50px;opacity:0;s:1500;e:Power2.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-start="1400"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
              >
                Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <br /> Ut enim ad minim veniam, quis nostrud exercitation ip ex
                ea commodo cons equat.
              </div>

              <div
                className="tp-caption rev-btn btn-1"
                data-x="['center','center','center','center']"
                data-hoffset="['-100','-100','-120','-110']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['150','150','150','50']"
                data-fontsize="['14','14','14','12']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-visibility="['on','on','off','on']"
                data-transform_idle="o:1;"
                data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:0;e:Linear.easeNone;"
                data-style_hover="c:rgba(255, 255, 255, 1.00);bg:rgba(121, 203, 168, 1.00);bc:rgba(121, 203, 168, 1.00);"
                data-transform_in="y:50px;opacity:0;s:1500;e:Back.easeInOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-start="1200"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                data-responsive="off"
                data-actions='[{"event":"click","action":"simplelink","target":"_self","url":"#"}]'
              >
                read more
              </div>

              <div
                className="tp-caption rev-btn btn-2"
                data-x="['center','center','center','center']"
                data-hoffset="['90','100','120','110']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['150','150','150','50']"
                data-fontsize="['14','14','14','12']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-visibility="['on','on','off','on']"
                data-transform_idle="o:1;"
                data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:0;e:Linear.easeNone;"
                data-style_hover="c:rgba(255, 255, 255, 1.00);"
                data-transform_in="y:50px;opacity:0;s:1500;e:Back.easeInOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-start="1300"
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
                data-responsive="off"
                data-actions='[{"event":"click","action":"simplelink","target":"_self","url":"#"}]'
              >
                shop now
              </div>
            </li>

            <li
              data-transition="fade"
              data-slotamount="default"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="700"
              data-rotate="0"
              data-saveperformance="off"
              data-title="Slide"
            >
              <img
                src={base_url + "assets/images/banner/banner-2.jpg"}
                alt=""
                width="2000"
                height="1097"
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="off"
                className="rev-slidebg"
              />

              <div
                className="tp-caption caption-3 tp-resizeme"
                data-x="['left','left','center','center']"
                data-hoffset="['280','280','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-160','-160','-160','-150']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-transform_idle="o:1;"
                data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:0;sY:0;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-start="1000"
                data-splitin="chars"
                data-splitout="none"
                data-responsive_offset="on"
                data-elementdelay="0.1"
              >
                SINCE 1990
              </div>

              <div
                className="tp-caption tp-resizeme"
                data-x="['left','left','center','center']"
                data-hoffset="['400','400','150','150']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-160','-160','-160','-160']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-visibility="['on','on','on','off']"
                data-transform_idle="o:1;"
                data-transform_in="x:-200px;skX:45px;s:1000;e:Power2.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-start="500"
                data-responsive_offset="on"
              >
                <img
                  src={base_url + "assets/images/banner/shape-right.png"}
                  alt=""
                  width="60"
                  height="21"
                />
              </div>

              <div
                className="tp-caption tp-resizeme"
                data-x="['left','left','left','left']"
                data-hoffset="['210','210','210','210']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-160','-160','-160','-160']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-visibility="['on','on','on','off']"
                data-transform_idle="o:1;"
                data-transform_in="x:200px;z:0px;skX:-85px;s:1500;e:Power4.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-start="500"
                data-responsive_offset="on"
              >
                <img
                  src={base_url + "assets/images/banner/shape-left.png"}
                  alt=""
                  width="60"
                  height="21"
                />
              </div>

              <div
                className="tp-caption tp-resizeme"
                data-x="['left','left','center','center']"
                data-hoffset="['10','10','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-50','-50','-10','-40']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-visibility="['on','on','on','off']"
                data-transform_idle="o:1;"
                data-transform_in="y:50px;opacity:0;s:1500;e:Power4.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-start="1800"
                data-responsive_offset="on"
              >
                <img
                  src={base_url + "assets/images/banner/text_one.png"}
                  alt=""
                  width="604"
                  height="95"
                />
              </div>

              <div
                className="tp-caption caption-4 tp-resizeme"
                data-x="['left','left','left','left']"
                data-hoffset="['100','100','100','100']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['40','40','40','40']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-visibility="['on','on','off','off']"
                data-transform_idle="o:1;"
                data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:0;sY:0;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-start="2500"
                data-splitin="chars"
                data-splitout="none"
                data-responsive_offset="on"
                data-elementdelay="0.1"
              >
                fruits
              </div>

              <div
                className="tp-caption caption-4 tp-resizeme"
                data-x="['left','left','left','left']"
                data-hoffset="['210','210','210','210']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['40','40','40','40']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-visibility="['on','on','off','off']"
                data-transform_idle="o:1;"
                data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:0;sY:0;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-start="2500"
                data-splitin="chars"
                data-splitout="none"
                data-responsive_offset="on"
                data-elementdelay="0.1"
              >
                vegetables
              </div>

              <div
                className="tp-caption caption-4 tp-resizeme"
                data-x="['left','left','left','left']"
                data-hoffset="['370','370','370','370']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['40','40','40','40']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-visibility="['on','on','off','off']"
                data-transform_idle="o:1;"
                data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:0;sY:0;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-start="2500"
                data-splitin="chars"
                data-splitout="none"
                data-responsive_offset="on"
                data-elementdelay="0.1"
              >
                breads
              </div>

              <div
                className="tp-caption caption-4 tp-resizeme"
                data-x="['left','left','left','left']"
                data-hoffset="['500','500','500','500']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['40','40','40','40']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-visibility="['on','on','off','off']"
                data-transform_idle="o:1;"
                data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:0;sY:0;skX:0;skY:0;opacity:0;s:1000;e:Power2.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                data-start="2500"
                data-splitin="chars"
                data-splitout="none"
                data-responsive_offset="on"
                data-elementdelay="0.1"
              >
                other
              </div>

              <div
                className="tp-caption tp-resizeme"
                data-x="['left','left','center','center']"
                data-hoffset="['158','158','0','0']"
                data-y="['top','top','middle','middle']"
                data-voffset="['420','420','100','100']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-visibility="['on','on','on','off']"
                data-transform_idle="o:1;"
                data-transform_in="y:50px;opacity:0;s:1000;e:Power2.easeOut;"
                data-transform_out="opacity:0;s:300;s:300;"
                data-start="3800"
                data-responsive_offset="on"
                data-actions='[{"event":"click","action":"simplelink","target":"_self","url":"#"}]'
              >
                <img
                  src={base_url + "assets/images/banner/button.png"}
                  alt=""
                  width="313"
                  height="103"
                />
              </div>
            </li>
          </ul>
          <div className="tp-bannertimer"></div>
        </div>
      </div>
    </>
  );
};

export default Slider;
