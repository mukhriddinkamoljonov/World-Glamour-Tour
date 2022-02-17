import React from "react";
import property1 from "../property-1/property1.jpg";
import property2 from "../property-1/property2.jpg";
import property3 from "../property-1/property3.jpg";
import "./AllCart.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const AllCart = () => {
  return (
    <div>
      <div class="page-head">
        <div class="container">
          <div class="row">
            <div class="page-head-content">
              <h1 class="page-title">Chorvoq - Toshkent viloyati </h1>
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
                      <div className="box1">
                        <img src={property1} alt="title" />{" "}
                        <p className="legend">Chorvoq</p>
                      </div>
                      <div className="box2">
                        <img src={property2} alt="title" />{" "}
                        <p className="legend">Ajoyib Maskan</p>
                      </div>
                      <div className="box3">
                        <img src={property3} alt="title" />{" "}
                        <p className="legend">Bir narsalar</p>
                      </div>
                      <div className="box4">
                        <img src={property1} alt="title" />{" "}
                        <p className="legend">Lorem, ipsum.</p>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
              <div class="single-property-wrapper">
                <div class="single-property-header">
                  <h1 class="property-title pull-left">
                    Chorvoq dam olish maskani
                  </h1>
                  <span class="property-price pull-right">$825,000</span>
                </div>

                <div class="property-meta entry-meta clearfix">
                  <div class="col-xs-6 col-sm-3 col-md-3 p-b-15">
                    <span class="property-info-icon icon-tag">
                      <img src="assets/img/icon/sale-orange.png" alt="title" />
                    </span>
                    <span class="property-info-entry">
                      <span class="property-info-label">Status</span>
                      <span class="property-info-value">For Sale</span>
                    </span>
                  </div>

                  <div class="col-xs-6 col-sm-3 col-md-3 p-b-15">
                    <span class="property-info icon-area">
                      <img src="assets/img/icon/room-orange.png" alt="title" />
                    </span>
                    <span class="property-info-entry">
                      <span class="property-info-label">Area</span>
                      <span class="property-info-value">
                        3500<b class="property-info-unit">Sq Ft</b>
                      </span>
                    </span>
                  </div>

                  <div class="col-xs-6 col-sm-3 col-md-3 p-b-15">
                    <span class="property-info-icon icon-bed">
                      <img src="assets/img/icon/bed-orange.png" alt="title" />
                    </span>
                    <span class="property-info-entry">
                      <span class="property-info-label">Bedrooms</span>
                      <span class="property-info-value">3</span>
                    </span>
                  </div>

                  <div class="col-xs-6 col-sm-3 col-md-3 p-b-15">
                    <span class="property-info-icon icon-bed">
                      <img src="assets/img/icon/cars-orange.png" alt="title" />
                    </span>
                    <span class="property-info-entry">
                      <span class="property-info-label">Car garages</span>
                      <span class="property-info-value">1</span>
                    </span>
                  </div>

                  <div class="col-xs-6 col-sm-3 col-md-3 p-b-15">
                    <span class="property-info-icon icon-bath">
                      <img src="assets/img/icon/os-orange.png" alt="title" />
                    </span>
                    <span class="property-info-entry">
                      <span class="property-info-label">Bathrooms</span>
                      <span class="property-info-value">3.5</span>
                    </span>
                  </div>

                  <div class="col-xs-6 col-sm-3 col-md-3 p-b-15">
                    <span class="property-info-icon icon-garage">
                      <img src="assets/img/icon/room-orange.png" alt="title" />
                    </span>
                    <span class="property-info-entry">
                      <span class="property-info-label">Garages</span>
                      <span class="property-info-value">2</span>
                    </span>
                  </div>

                  <div class="col-xs-6 col-sm-3 col-md-3 p-b-15">
                    <span class="property-info-icon icon-garage">
                      <img
                        src="assets/img/icon/shawer-orange.png"
                        alt="title"
                      />
                    </span>
                    <span class="property-info-entry">
                      <span class="property-info-label">Garages</span>
                      <span class="property-info-value">2</span>
                    </span>
                  </div>
                </div>

                <div class="section">
                  <h4 class="s-property-title">Description</h4>
                  <div class="s-property-content">
                    <p>
                      O‘zbekistonda plyaj ta’tilini o‘ylab yurgan bo‘lsangiz
                      Toshkent viloyatining Bo‘stonliq tumanida joylashgan
                      Chorvoq suv omboriga e’tibor qaratishingiz kerak. Dam
                      olish maskaniga poytaxtdan taksi, poyezd yoki avtobusda
                      borish mumkin.Ulkan suv havzasi bo‘yidagi jihozlangan
                      plyajlar dam olish joylari, soyabonlar, an’anaviy yog‘och
                      karavotlar va kafelarni taklif etadi. Bu yerda dam
                      oluvchilar skuterda, katamaranda yoki suv bananida uchishi
                      mumkin, ekstremal sport turlari muxlislari paraplanda
                      uchib, tevarak atrofni o‘rganishlari mumkin.
                    </p>
                  </div>
                </div>

                <div class="section additional-details">
                  <h4 class="s-property-title">Additional Details</h4>

                  <ul class="additional-details-list clearfix">
                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Waterfront
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        Yes
                      </span>
                    </li>

                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Built In
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        2003
                      </span>
                    </li>
                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Parking
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        2 Or More Spaces,Covered Parking,Valet Parking
                      </span>
                    </li>

                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Waterfront
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        Yes
                      </span>
                    </li>

                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        View
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        Intracoastal View,Direct ew
                      </span>
                    </li>

                    <li>
                      <span class="col-xs-6 col-sm-4 col-md-4 add-d-title">
                        Waterfront Description:
                      </span>
                      <span class="col-xs-6 col-sm-8 col-md-8 add-d-entry">
                        Intracoastal Front,Ocean Access
                      </span>
                    </li>
                  </ul>
                </div>

                <div class="section property-features">
                  <h4 class="s-property-title">Features</h4>
                  <ul>
                    <li>
                      <a href="properties.html">Swimming Pool</a>
                    </li>
                    <li>
                      <a href="properties.html">3 Stories</a>
                    </li>
                    <li>
                      <a href="properties.html">Central Cooling</a>
                    </li>
                    <li>
                      <a href="properties.html">Jog Path 2</a>
                    </li>
                    <li>
                      <a href="properties.html">2 Lawn</a>
                    </li>
                    <li>
                      <a href="properties.html">Bike Path</a>
                    </li>
                  </ul>
                </div>

                <div class="section property-video">
                  <h4 class="s-property-title">Property Video</h4>
                  <div class="video-thumb">
                    <a class="video-popup" href="yout" title="Virtual Tour">
                      <img
                        src="assets/img/property-video.jpg"
                        class="img-responsive wp-post-image"
                        alt="Exterior"
                      />
                    </a>
                  </div>
                </div>

                <div class="section property-share">
                  <h4 class="s-property-title">Share width your friends</h4>
                  <div class="roperty-social">
                    <ul>
                      <li>
                        <a title="Share this on dribbble " href="/">
                          <img
                            src="assets/img/social_big/dribbble_grey.png"
                            alt="title"
                          />
                        </a>
                      </li>
                      <li>
                        <a title="Share this on facebok " href="/">
                          <img
                            src="assets/img/social_big/facebook_grey.png"
                            alt="title"
                          />
                        </a>
                      </li>
                      <li>
                        <a title="Share this on delicious " href="/">
                          <img
                            src="assets/img/social_big/delicious_grey.png"
                            alt="title"
                          />
                        </a>
                      </li>
                      <li>
                        <a title="Share this on tumblr " href="/">
                          <img
                            src="assets/img/social_big/tumblr_grey.png"
                            alt="title"
                          />
                        </a>
                      </li>
                      <li>
                        <a title="Share this on digg " href="/">
                          <img
                            src="assets/img/social_big/digg_grey.png"
                            alt="title"
                          />
                        </a>
                      </li>
                      <li>
                        <a title="Share this on twitter " href="/">
                          <img
                            src="assets/img/social_big/twitter_grey.png"
                            alt="title"
                          />
                        </a>
                      </li>
                      <li>
                        <a title="Share this on linkedin " href="/">
                          <img
                            src="assets/img/social_big/linkedin_grey.png"
                            alt="title"
                          />
                        </a>
                      </li>
                    </ul>
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
                            email@yourcompany.com
                          </li>
                          <li>
                            <i class="pe-7s-call strong"> </i> +1 908 967 5906
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
                        <h4>Terms and Conditions</h4>
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
