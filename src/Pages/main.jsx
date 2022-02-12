import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Carts from "../Components/Carts";
import Navbar from "../Components/Navbar";
import Sayyohlar from "../Components/Sayyohlar";
import Slider from "../Components/Slider";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div id="preloader">
        <div id="status">&nbsp;</div>
      </div>
      <Navbar />
      <Slider />
      <Carts />
      <div className="Welcome-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 Welcome-entry col-sm-12">
              <div className="col-md-5 col-md-offset-2 col-sm-6 col-xs-12">
                <div
                  className="welcome_text wow fadeInLeft"
                  data-wow-delay="0.3s"
                  data-wow-offset="100"
                >
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                      <h2>
                        <img src="./travel.png" alt="" />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-6 col-xs-12">
                <div
                  className="welcome_services wow fadeInRight"
                  data-wow-delay="0.3s"
                  data-wow-offset="100"
                >
                  <div className="row">
                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <i className="pe-7s-home pe-4x"></i>
                        </div>
                        <h3>Any property</h3>
                      </div>
                    </div>
                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <i className="pe-7s-users pe-4x"></i>
                        </div>
                        <h3>More Clients</h3>
                      </div>
                    </div>

                    <div className="col-xs-12 text-center">
                      <i className="welcome-circle"></i>
                    </div>

                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <i className="pe-7s-notebook pe-4x"></i>
                        </div>
                        <h3>Easy to use</h3>
                      </div>
                    </div>
                    <div className="col-xs-6 m-padding">
                      <div className="welcome-estate">
                        <div className="welcome-icon">
                          <i className="pe-7s-help2 pe-4x"></i>
                        </div>
                        <h3>Any help</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="count-area">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
              <h2>You can trust Us</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-xs-12 percent-blocks m-main"
              data-waypoint-scroll="true"
            >
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <span className="pe-7s-users"></span>
                    </div>
                    <div className="chart" data-percent="5000">
                      <h2 className="percent" id="counter">
                        0
                      </h2>
                      <h5>1 AQSh dollari , USD</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <span className="pe-7s-home"></span>
                    </div>
                    <div className="chart" data-percent="12000">
                      <h2 className="percent" id="counter1">
                        0
                      </h2>
                      <h5>1 Rossiya rubli, RUB</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <span className="pe-7s-flag"></span>
                    </div>
                    <div className="chart" data-percent="120">
                      <h2 className="percent" id="counter2">
                        0
                      </h2>
                      <h5>1 Yevro, EUR</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="count-item">
                    <div className="count-item-circle">
                      <span className="pe-7s-graph2"></span>
                    </div>
                    <div className="chart" data-percent="5000">
                      <h2 className="percent" id="counter3">
                        5000
                      </h2>
                      <h5>1 Turkiya lirasi , TRY</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="boy-sale-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
              <div className="asks-first">
                <div className="asks-first-circle">
                  <span className="fa fa-search"></span>
                </div>
                <div className="asks-first-info">
                  <h2>ARE YOU LOOKING FOR A Property?</h2>
                  <p>
                    varius od lio eget conseq uat blandit, lorem auglue comm
                    lodo nisl no us nibh mas lsa
                  </p>
                </div>
                <div className="asks-first-arrow">
                  <a href="properties.html">
                    <span className="fa fa-angle-right"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0">
              <div className="asks-first">
                <div className="asks-first-circle">
                  <span className="fa fa-usd"></span>
                </div>
                <div className="asks-first-info">
                  <h2>DO YOU WANT TO SELL A Property?</h2>
                  <p>
                    varius od lio eget conseq uat blandit, lorem auglue comm
                    lodo nisl no us nibh mas lsa
                  </p>
                </div>
                <div className="asks-first-arrow">
                  <a href="properties.html">
                    <span className="fa fa-angle-right"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <p className="asks-call">
                QUESTIONS? CALL US :
                <span className="strong"> + 3-123- 424-5700</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-area">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                  <h4>About us</h4>
                  <div className="footer-title-line"></div>

                  <img
                    src="assets/img/footer-logo.png"
                    alt=""
                    className="wow pulse"
                    data-wow-delay="1s"
                  />
                  <p>
                    Lorem ipsum dolor cum necessitatibus su quisquam molestias.
                    Vel unde, blanditiis.
                  </p>
                  <ul className="footer-adress">
                    <li>
                      <i className="pe-7s-map-marker strong"> </i> 9089 your
                      adress her
                    </li>
                    <li>
                      <i className="pe-7s-mail strong"> </i> rnj-787@mail.ru
                    </li>
                    <li>
                      <i className="pe-7s-call strong"> </i> +99897 214 44 01
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                  <h4>Quick links</h4>
                  <div className="footer-title-line"></div>
                  <ul className="footer-menu">
                    <li>
                      <a href="properties.html">Properties</a>
                    </li>
                    <li>
                      <a href="/">Services</a>
                    </li>
                    <li>
                      <a href="submit-property.html">Submit property </a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                    <li>
                      <a href="faq.html">fqa</a>
                    </li>
                    <li>
                      <a href="faq.html">Terms </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer">
                  <h4>Last News</h4>
                  <div className="footer-title-line"></div>
                  <ul className="footer-blog">
                    <li>
                      <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                        <a href="single.html">
                          <img
                            src="assets/img/demo/small-proerty-2.jpg"
                            alt="title"
                          />
                        </a>
                        <span className="blg-date">12-12-2016</span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Add news functions </a>
                        </h6>
                        <p style={{ lineHeight: "17px", padding: "8px 2px" }}>
                          Lorem ipsum dolor sit amet, nulla ...
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                        <a href="single.html">
                          <img
                            src="assets/img/demo/small-proerty-2.jpg"
                            alt="title"
                          />
                        </a>
                        <span className="blg-date">12-12-2016</span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Add news functions </a>
                        </h6>
                        <p style={{ lineHeight: "17px", padding: "8px 2px" }}>
                          Lorem ipsum dolor sit amet, nulla ...
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                        <a href="single.html">
                          <img
                            src="assets/img/demo/small-proerty-2.jpg"
                            alt="title"
                          />
                        </a>
                        <span className="blg-date">12-12-2016</span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Add news functions </a>
                        </h6>
                        <p style={{ lineHeight: "17px", padding: "8px 2px" }}>
                          Lorem ipsum dolor sit amet, nulla ...
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                <div className="single-footer news-letter">
                  <h4>Stay in touch</h4>
                  <div className="footer-title-line"></div>
                  <p>
                    Lorem ipsum dolor sit amet, nulla suscipit similique
                    quisquam molestias. Vel unde, blanditiis.
                  </p>

                  <form>
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="E-mail ... "
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-primary subscribe"
                          type="button"
                        >
                          <i className="pe-7s-paper-plane pe-2x"></i>
                        </button>
                      </span>
                    </div>
                  </form>

                  <div className="social pull-right">
                    <ul>
                      <li>
                        <a
                          className="wow fadeInUp animated"
                          href="https://twitter.com/kimarotec"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="wow fadeInUp animated"
                          href="https://www.facebook.com/kimarotec"
                          data-wow-delay="0.2s"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="wow fadeInUp animated"
                          href="https://plus.google.com/kimarotec"
                          data-wow-delay="0.3s"
                        >
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="wow fadeInUp animated"
                          href="https://instagram.com/kimarotec"
                          data-wow-delay="0.4s"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="wow fadeInUp animated"
                          href="https://instagram.com/kimarotec"
                          data-wow-delay="0.6s"
                        >
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copy text-center">
          <div className="container">
            <div className="row">
              <div className="pull-left">
                <span>
                  (C) <a href="http://www.KimaroTec.com">KimaroTheme</a> , All
                  rights reserved 2016
                </span>
              </div>
              <div className="bottom-menu pull-right">
                <ul>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href="/"
                      data-wow-delay="0.2s"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href="/"
                      data-wow-delay="0.3s"
                    >
                      Property
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href="/"
                      data-wow-delay="0.4s"
                    >
                      Faq
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp animated"
                      href="/"
                      data-wow-delay="0.6s"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
