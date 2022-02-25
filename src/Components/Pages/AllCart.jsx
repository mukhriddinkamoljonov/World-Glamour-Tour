import React, { useEffect, useState } from "react";
import property1 from "../property-1/property1.jpg";
import property2 from "../property-1/property2.jpg";
import property3 from "../property-1/property3.jpg";
import NoImage from "../../img/no-image.jpg";
import "./AllCart.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";

const AllCart = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://wgtour.pythonanywhere.com/api/places/1")
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  console.log(item.images[0]);

  return (
    <div>
      <div class="page-head">
        <div class="container">
          <div class="row">
            <div class="page-head-content">
              <h1 class="page-title">{item.hashtags}</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        class="content-area single-property"
        style={{ backgroundColor: "#fcfcfc" }}
      >
        &nbsp;
        <div class="contai  3ner">
          <div class="clearfix padding-top-40">
            <div class="col-md-8 single-property-content prp-style-1">
              <div class="row">
                <div class="light-slide-item">
                  <div className="slider-courusel">
                    <Carousel autoPlay={"	boolean"}>
                      {item.map((img) => (
                      <div className="box1">
                        <img src={img.images[1].file} alt="title" />
                        <p className="legend">Chorvoq</p>
                      </div>
                       ))}
                    </Carousel>
                  </div>
                </div>
              </div>
              <div class="single-property-wrapper">
                <div class="single-property-header">
                  <h1 class="property-title pull-left">{item.address}</h1>
                  <span class="property-price pull-right">
                    {item.price1} so'm
                  </span>
                </div>
                <div class="section additional-details">
                  <h4 class="s-property-title">Eng yaxshi shartnoma</h4>

                  <ul class="additional-details-list clearfix">
                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Sayohat yo'nalishi:
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        {item.direction}
                      </span>
                    </li>

                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Dvomiyligi:
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        {item.duration}
                      </span>
                    </li>
                    <h4 className="s-property-title">Takliflar</h4>
                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        {item.price1_description}
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        {item.price2} so'm
                      </span>
                    </li>

                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        {item.price2_description}
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        {item.price3} so'm
                      </span>
                    </li>

                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        {item.price3_description}
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        {item.benefits}
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="section">
                  <h4 class="s-property-title">To'liq ma'lumot</h4>
                  <div class="s-property-content">
                    <p>{item.description}</p>
                  </div>
                </div>

                <div class="section additional-details ">
                  <h4 class="s-property-title">Narxga quyidagilar kiradi:</h4>
                  <div>
                    <p>✔️ {item.about_prices}</p>
                  </div>
                </div>

                <div class="section property-video">
                  <h4 class="s-property-title"> Video</h4>
                  <div class="video-thumb">
                    <a class="video-popup" href="yout" title="Virtual Tour">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/wT4Nb0fwCfU"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 p0">
              <aside class="sidebar sidebar-property blog-asside-right">
                <div class="dealer-widget">
                  <div class="dealer-content">
                    <div class="inner-wrapper">
                      <div class="clear">
                        <div class="col-xs-4 col-sm-4 dealer-face">
                          <a href="/">
                            <img
                              src="assets/img/client-face1.png"
                              class="img-circle"
                              alt="title"
                            />
                          </a>
                        </div>
                        <div class="col-xs-8 col-sm-8">
                          <h3 class="dealer-name">
                            <a href="/">Nathan James</a>
                            <span>Real Estate Agent</span>
                          </h3>
                          <div class="dealer-social-media">
                            <a class="twitter" target="_blank" href="/">
                              <i class="fa fa-twitter"></i>
                            </a>
                            <a class="facebook" target="_blank" href="/">
                              <i class="fa fa-facebook"></i>
                            </a>
                            <a class="gplus" target="_blank" href="/">
                              <i class="fa fa-google-plus"></i>
                            </a>
                            <a class="linkedin" target="_blank" href="/">
                              <i class="fa fa-linkedin"></i>
                            </a>
                            <a class="instagram" target="_blank" href="/">
                              <i class="fa fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="clear">
                        <ul class="dealer-contacts">
                          <li>
                            <i class="pe-7s-map-marker strong"> </i> Toshkent
                            viloyati Bo'stonliq tumani.
                          </li>
                          <li>
                            <i class="pe-7s-mail strong"> </i>
                            {item.email}
                          </li>
                          <li>
                            <i class="pe-7s-call strong"> </i>{" "}
                            {item.phone_number}
                          </li>
                        </ul>
                        <p>
                          Bizning mijozlarimiz biz bilan o'sib boradi. Sizning
                          muvaffaqiyatingiz bizning ustuvorligimizdir!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default sidebar-menu similar-property-wdg wow fadeInRight animated">
                  <div class="panel-heading">
                    <h3 class="panel-title">Similar Properties</h3>
                  </div>
                  <div class="panel-body recent-property-widget">
                    <ul>
                      <li>
                        <div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img
                              src="assets/img/demo/small-property-2.jpg"
                              alt="title"
                            />
                          </a>
                          <span class="property-seeker">
                            <b class="b-1">A</b>
                            <b class="b-2">S</b>
                          </span>
                        </div>
                        <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Farg'ona viloyati </a>
                          </h6>
                          <span class="property-price">3000000$</span>
                        </div>
                      </li>
                      <li>
                        <div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img
                              src="assets/img/demo/small-property-1.jpg"
                              alt="title"
                            />
                          </a>
                          <span class="property-seeker">
                            <b class="b-1">A</b>
                            <b class="b-2">S</b>
                          </span>
                        </div>
                        <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Qo'qon shahar </a>
                          </h6>
                          <span class="property-price">3000000$</span>
                        </div>
                      </li>
                      <li>
                        <div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img
                              src="assets/img/demo/small-property-3.jpg"
                              alt="title"
                            />
                          </a>
                          <span class="property-seeker">
                            <b class="b-1">A</b>
                            <b class="b-2">S</b>
                          </span>
                        </div>
                        <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Samarqand shahar </a>
                          </h6>
                          <span class="property-price">3000000$</span>
                        </div>
                      </li>

                      <li>
                        <div class="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img
                              src="assets/img/demo/small-property-2.jpg"
                              alt="title"
                            />
                          </a>
                          <span class="property-seeker">
                            <b class="b-1">A</b>
                            <b class="b-2">S</b>
                          </span>
                        </div>
                        <div class="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Buxoro shahar </a>
                          </h6>
                          <span class="property-price">3000000$</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="panel panel-default sidebar-menu wow fadeInRight animated">
                  <div class="panel-heading">
                    <h3 class="panel-title">Ads her</h3>
                  </div>
                  <div class="panel-body recent-property-widget">
                    <img src="assets/img/ads.jpg" alt="title" />
                  </div>
                </div>

                <div class="panel panel-default sidebar-menu wow fadeInRight animated">
                  <div class="panel-heading">
                    <h3 class="panel-title">Smart search</h3>
                  </div>
                  <div class="container2">
                    <form>
                      <div class="row">
                        <h4>Account</h4>
                        <div class="input-group input-group-icon">
                          <input type="text" placeholder="Full Name" />
                          <div class="input-icon">
                            <i class="fa fa-user"></i>
                          </div>
                        </div>
                        <div class="input-group input-group-icon">
                          <input type="email" placeholder="Email Adress" />
                          <div class="input-icon">
                            <i class="fa fa-envelope"></i>
                          </div>
                        </div>
                        <div class="input-group input-group-icon">
                          <input type="password" placeholder="Password" />
                          <div class="input-icon">
                            <i class="fa fa-key"></i>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <h4>Payment Details</h4>
                        <div class="input-group">
                          <input
                            id="payment-method-card"
                            type="radio"
                            name="payment-method"
                            value="card"
                            checked="true"
                          />
                          <label for="payment-method-card">
                            <span>
                              <i class="fa fa-cc-visa"></i>Credit Card
                            </span>
                          </label>
                          <input
                            id="payment-method-paypal"
                            type="radio"
                            name="payment-method"
                            value="paypal"
                          />
                          <label for="payment-method-paypal">
                            {" "}
                            <span>
                              <i class="fa fa-cc-paypal"></i>Paypal
                            </span>
                          </label>
                        </div>
                        <div class="input-group input-group-icon">
                          <input type="text" placeholder="Card Number" />
                          <div class="input-icon">
                            <i class="fa fa-credit-card"></i>
                          </div>
                        </div>
                        <div class="col-half">
                          <div class="input-group input-group-icon">
                            <input type="text" placeholder="Card CVC" />
                            <div class="input-icon">
                              <i class="fa fa-user"></i>
                            </div>
                          </div>
                        </div>
                        <div class="col-half">
                          <div class="input-group">
                            <select>
                              <option>01 Jan</option>
                              <option>02 Jan</option>
                            </select>
                            <select>
                              <option>2015</option>
                              <option>2016</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <h4>Ushbu turni bron qiling!</h4>
                        <div class="input-group">
                          <input id="terms" type="checkbox" />
                          <label for="terms">
                            I accept the terms and conditions for signing up to
                            this service, and hereby confirm I have read the
                            privacy policy.
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCart;
