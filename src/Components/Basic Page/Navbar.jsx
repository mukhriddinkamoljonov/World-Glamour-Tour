import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-default yana">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">
              <img src="assets/img/icon/logo.png" alt="" />
              <span className="header-title-per">World_Glamour_Tour</span>
            </Link>
          </div>

          <div className="collapse navbar-collapse yamm" id="navigation">
            <div className="button navbar-right">
              <div className="search">
                <input type="text" placeholder="search" />
                <div className="symbol">
                  <svg className="cloud">
                    <use xlink="ture" href="#cloud" />
                  </svg>
                  <svg className="lens">
                    <use xlink="ture" href="#lens" />
                  </svg>
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}
              >
                <symbol
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="cloud"
                >
                  <path
                    d="M31.714,25.543c3.335-2.17,4.27-6.612,2.084-9.922c-1.247-1.884-3.31-3.077-5.575-3.223h-0.021
	C27.148,6.68,21.624,2.89,15.862,3.931c-3.308,0.597-6.134,2.715-7.618,5.708c-4.763,0.2-8.46,4.194-8.257,8.919
	c0.202,4.726,4.227,8.392,8.991,8.192h4.873h13.934C27.784,26.751,30.252,26.54,31.714,25.543z"
                  />
                </symbol>
                <symbol
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="lens"
                >
                  <path
                    d="M15.656,13.692l-3.257-3.229c2.087-3.079,1.261-7.252-1.845-9.321c-3.106-2.068-7.315-1.25-9.402,1.83
	s-1.261,7.252,1.845,9.32c1.123,0.748,2.446,1.146,3.799,1.142c1.273-0.016,2.515-0.39,3.583-1.076l3.257,3.229
	c0.531,0.541,1.404,0.553,1.95,0.025c0.009-0.008,0.018-0.017,0.026-0.025C16.112,15.059,16.131,14.242,15.656,13.692z M2.845,6.631
	c0.023-2.188,1.832-3.942,4.039-3.918c2.206,0.024,3.976,1.816,3.951,4.004c-0.023,2.171-1.805,3.918-3.995,3.918
	C4.622,10.623,2.833,8.831,2.845,6.631L2.845,6.631z"
                  />
                </symbol>
              </svg>
            </div>
            <ul className="main-nav nav navbar-nav navbar-right">
              <li className="dropdown ymm-sw" data-wow-delay="0.1s">
                <a
                  href="index.html"
                  className="dropdown-toggle active"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                >
                  Damolish maskanlari <b className="caret"></b>
                </a>
                <ul className="dropdown-menu navbar-nav">
                  <li>
                    <Link to="/chorvoq">Chorvoq</Link>
                  </li>
                  <li>
                    <Link to="/amirsoy">Amirsoy</Link>
                  </li>
                  <li>
                    <Link to="/chimyon">Chimyon</Link>
                  </li>
                  <li>
                    <Link to="/bostonliq">Bostonliq</Link>
                  </li>
                </ul>
              </li>

              <li className="wow fadeInDown" data-wow-delay="0.2s">
                <Link to="/Sayyohlar">Sayyohlar uchun</Link>
              </li>
              <li className="dropdown yamm-fw" data-wow-delay="0.4s">
                <Link
                  to="/shaharlar"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                >
                  Shaharlar <b className="caret"></b>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <div className="yamm-content">
                      <div className="row">
                        <div className="col-sm-3">
                          <h5>Tarixiy shaharlarga</h5>
                          <ul>
                            <li>
                              <a href="index.html">Toshkent</a>
                            </li>
                            <li>
                              <a href="index-2.html">Samarqand</a>
                            </li>
                            <li>
                              <a href="index-3.html">Buxoro</a>
                            </li>
                            <li>
                              <a href="index-4.html">Xiva</a>
                            </li>
                            <li>
                              <a href="index-5.html">
                                <h5>Qo'qon</h5>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3">
                          <h5>Yosh va navqiron</h5>
                          <ul>
                            <li>
                              <a href="blog.html">Rishton</a>
                            </li>
                            <li>
                              <a href="single.html">Qarshi</a>
                            </li>
                            <li>
                              <a href="single-right.html">Andijon</a>
                            </li>
                            <li>
                              <a href="single-left.html">Namangan</a>
                            </li>
                            <li>
                              <a href="contact.html">
                                <h5>Termiz</h5>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3">
                          <h5>Osiyo</h5>
                          <ul>
                            <li>
                              <a href="property-1.html">
                                Dubay — Birlashgan Arab Amirliklari
                              </a>
                            </li>
                            <li>
                              <a href="property-2.html">Dehli - Hindiston</a>
                            </li>
                            <li>
                              <a href="property-3.html">Pekin - Xitoy</a>
                            </li>
                            <li>
                              <a href="property-3.html">Anqara - Turkiya </a>
                            </li>
                            <li>
                              <a href="property-3.html">
                                <h5>Kuala Lumpur - Malayziya</h5>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-3">
                          <h5>Yevropa</h5>
                          <ul>
                            <li>
                              <a href="submit-property.html">
                                Parij - Fransiya
                              </a>
                            </li>
                            <li>
                              <a href="submit-property.html">Rim - Italiya</a>
                            </li>
                            <li>
                              <a href="submit-property.html">
                                Bern - Shveysariya
                              </a>
                            </li>
                            <li>
                              <a href="submit-property.html">
                                London - Birlashgan Qirollik
                              </a>
                            </li>
                            <li>
                              <a href="submit-property.html">
                                <h5>Madrid - Ispaniya</h5>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="wow fadeInDown" data-wow-delay="0.3s">
                <Link to="/about">Biz haqimizda</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
