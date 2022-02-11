import './App.css';

function App() {
  return (
      <div>
        <div className="header-connect">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-8 col-xs-12">
                <div className="header-half header-call">
                  <p>
                    <span><i className="pe-7s-call"></i> +1 234 567 7890</span>
                    <span><i className="pe-7s-mail"></i> your@company.com</span>
                  </p>
                </div>
              </div>
              <div
                  className="col-md-2 col-md-offset-5 col-sm-3 col-sm-offset-1 col-xs-12"
              >
                <div className="header-half header-social">
                  <ul className="list-inline">
                    <li>
                      <a href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-vine"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-dribbble"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-default">
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
              <a className="navbar-brand" href="index.html"
              ><img src="assets/img/logo.png" alt=""
              /></a>
            </div>

            <div className="collapse navbar-collapse yamm" id="navigation">
              <div className="button navbar-right">
                <button
                    className="navbar-btn nav-button wow bounceInRight login"
                    onClick=" window.open('register.html')"
                    data-wow-delay="0.45s"
                >
                  Login
                </button>
                <button
                    className="navbar-btn nav-button wow fadeInRight"
                    onClick=" window.open('submit-property.html')"
                    data-wow-delay="0.48s"
                >
                  Submit
                </button>
              </div>
              <ul className="main-nav nav navbar-nav navbar-right">
                <li className="dropdown ymm-sw" data-wow-delay="0.1s">
                  <a
                      href="index.html"
                      className="dropdown-toggle active"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      data-delay="200"
                  >Home <b className="caret"></b
                  ></a>
                  <ul className="dropdown-menu navbar-nav">
                    <li>
                      <a href="index-2.html">Home Style 2</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home Style 3</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home Style 4</a>
                    </li>
                    <li>
                      <a href="index-5.html">Home Style 5</a>
                    </li>
                  </ul>
                </li>

                <li className="wow fadeInDown" data-wow-delay="0.2s">
                  <a className="" href="properties.html">Properties</a>
                </li>
                <li className="wow fadeInDown" data-wow-delay="0.3s">
                  <a className="" href="property.html">Property</a>
                </li>
                <li className="dropdown yamm-fw" data-wow-delay="0.4s">
                  <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                      data-delay="200"
                  >Template <b className="caret"></b
                  ></a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="yamm-content">
                        <div className="row">
                          <div className="col-sm-3">
                            <h5>Home pages</h5>
                            <ul>
                              <li>
                                <a href="index.html">Home Style 1</a>
                              </li>
                              <li>
                                <a href="index-2.html">Home Style 2</a>
                              </li>
                              <li>
                                <a href="index-3.html">Home Style 3</a>
                              </li>
                              <li>
                                <a href="index-4.html">Home Style 4</a>
                              </li>
                              <li>
                                <a href="index-5.html">Home Style 5</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-3">
                            <h5>Pages and blog</h5>
                            <ul>
                              <li><a href="blog.html">Blog listing</a></li>
                              <li><a href="single.html">Blog Post (full)</a></li>
                              <li>
                                <a href="single-right.html">Blog Post (Right)</a>
                              </li>
                              <li>
                                <a href="single-left.html">Blog Post (left)</a>
                              </li>
                              <li><a href="contact.html">Contact style (1)</a></li>
                              <li>
                                <a href="contact-3.html">Contact style (2)</a>
                              </li>
                              <li>
                                <a href="contact_3.html">Contact style (3)</a>
                              </li>
                              <li><a href="faq.html">FAQ page</a></li>
                              <li><a href="404.html">404 page</a></li>
                            </ul>
                          </div>
                          <div className="col-sm-3">
                            <h5>Property</h5>
                            <ul>
                              <li>
                                <a href="property-1.html"
                                >Property pages style (1)</a
                                >
                              </li>
                              <li>
                                <a href="property-2.html"
                                >Property pages style (2)</a
                                >
                              </li>
                              <li>
                                <a href="property-3.html"
                                >Property pages style (3)</a
                                >
                              </li>
                            </ul>

                            <h5>Properties list</h5>
                            <ul>
                              <li>
                                <a href="properties.html"
                                >Properties list style (1)</a
                                >
                              </li>
                              <li>
                                <a href="properties-2.html"
                                >Properties list style (2)</a
                                >
                              </li>
                              <li>
                                <a href="properties-3.html"
                                >Properties list style (3)</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-3">
                            <h5>Property process</h5>
                            <ul>
                              <li>
                                <a href="submit-property.html">Submit - step 1</a>
                              </li>
                              <li>
                                <a href="submit-property.html">Submit - step 2</a>
                              </li>
                              <li>
                                <a href="submit-property.html">Submit - step 3</a>
                              </li>
                            </ul>
                            <h5>User account</h5>
                            <ul>
                              <li><a href="register.html">Register / login</a></li>
                              <li>
                                <a href="user-properties.html">Your properties</a>
                              </li>
                              <li>
                                <a href="submit-property.html">Submit property</a>
                              </li>
                              <li>
                                <a href="change-password.html">Change password</a>
                              </li>
                              <li><a href="user-profile.html">Your profile</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="wow fadeInDown" data-wow-delay="0.5s">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="slider-area">
          <div className="slider">
            <div id="bg-slider" className="owl-carousel owl-theme">
              <div className="item">
                <img src="assets/img/slide1/slider-image-1.jpg" alt="GTA V"/>
              </div>
              <div className="item">
                <img
                    src="assets/img/slide1/slider-image-2.jpg"
                    alt="The Last of us"
                />
              </div>
              <div className="item">
                <img src="assets/img/slide1/slider-image-1.jpg" alt="GTA V"/>
              </div>
            </div>
          </div>
          <div className="slider-content">
            <div className="row">
              <div
                  className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12"
              >
                <h2>property Searching Just Got So Easy</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                  deserunt deleniti, ullam commodi sit ipsam laboriosam velit
                  adipisci quibusdam aliquam teneturo!
                </p>
                <div className="search-form wow pulse" data-wow-delay="0.8s">
                  <form action="" className="form-inline">
                    <button className="btn toggle-btn" type="button">
                      <i className="fa fa-bars"></i>
                    </button>

                    <div className="form-group">
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Key word"
                      />
                    </div>
                    <div className="form-group">
                      <select
                          id="lunchBegins"
                          className="selectpicker"
                          data-live-search="true"
                          data-live-search-style="begins"
                          title="Select your city"
                      >
                        <option>New york, CA</option>
                        <option>Paris</option>
                        <option>Casablanca</option>
                        <option>Tokyo</option>
                        <option>Marraekch</option>
                        <option>kyoto , shibua</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                          id="basic"
                          className="selectpicker show-tick form-control"
                      >
                        <option>-Status-</option>
                        <option>Rent</option>
                        <option>Boy</option>
                        <option>used</option>
                      </select>
                    </div>
                    <button className="btn search-btn" type="submit">
                      <i className="fa fa-search"></i>
                    </button>

                    <div style={{display: 'none'}} className="search-toggle">
                      <div className="search-row">
                        <div className="form-group mar-r-20">
                          <label htmlFor="price-range">Price range ($):</label>
                          <input
                              type="text"
                              className="span2"
                              value=""
                              data-slider-min="0"
                              data-slider-max="600"
                              data-slider-step="5"
                              data-slider-value="[0,450]"
                              id="price-range"
                          /><br/>
                          <b className="pull-left color">2000$</b>
                          <b className="pull-right color">100000$</b>
                        </div>

                        <div className="form-group mar-l-20">
                          <label htmlFor="property-geo">Property geo (m2) :</label>
                          <input
                              type="text"
                              className="span2"
                              value=""
                              data-slider-min="0"
                              data-slider-max="600"
                              data-slider-step="5"
                              data-slider-value="[50,450]"
                              id="property-geo"
                          /><br/>
                          <b className="pull-left color">40m</b>
                          <b className="pull-right color">12000m</b>
                        </div>
                      </div>

                      <div className="search-row">
                        <div className="form-group mar-r-20">
                          <label htmlFor="price-range">Min baths :</label>
                          <input
                              type="text"
                              className="span2"
                              value=""
                              data-slider-min="0"
                              data-slider-max="600"
                              data-slider-step="5"
                              data-slider-value="[250,450]"
                              id="min-baths"
                          /><br/>
                          <b className="pull-left color">1</b>
                          <b className="pull-right color">120</b>
                        </div>

                        <div className="form-group mar-l-20">
                          <label htmlFor="property-geo">Min bed :</label>
                          <input
                              type="text"
                              className="span2"
                              value=""
                              data-slider-min="0"
                              data-slider-max="600"
                              data-slider-step="5"
                              data-slider-value="[250,450]"
                              id="min-bed"
                          /><br/>
                          <b className="pull-left color">1</b>
                          <b className="pull-right color">120</b>
                        </div>
                      </div>
                      <br/>
                      <div className="search-row">
                        <div className="form-group">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> Fire Place(3100)
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> Dual Sinks(500)
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> Hurricane Shutters(99)
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="search-row">
                        <div className="form-group">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> Swimming Pool(1190)
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> 2 Stories(4600)
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> Emergency Exit(200)
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="search-row">
                        <div className="form-group">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> Laundry Room(10073)
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> Jog Path(1503)
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> 26' Ceilings(1200)
                            </label>
                          </div>
                        </div>
                        <br/>
                        <hr/>
                      </div>
                      <button
                          className="btn search-btn prop-btm-sheaerch"
                          type="submit"
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
            className="content-area home-area-1 recent-property"
            style={{backgroundColor: '#fcfcfc', paddingBottom: '55px'}}
        >
          <div className="container">
            <div className="row">
              <div
                  className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title"
              >
                <h2>Top submitted property</h2>
                <p>
                  Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec
                  pretium. Nullam sed arcu ultricies .
                </p>
              </div>
            </div>

            <div className="row">
              <div className="proerty-th">
                <div className="col-sm-6 col-md-3 p0">
                  <div className="box-two proerty-item">
                    <div className="item-thumb">
                      <a href="property-1.html"
                      ><img src="assets/img/demo/property-1.jpg"
                      /></a>
                    </div>
                    <div className="item-entry overflow">
                      <h5><a href="property-1.html">Super nice villa </a></h5>
                      <div className="dot-hr"></div>
                      <span className="pull-left"><b>Area :</b> 120m </span>
                      <span className="proerty-price pull-right">$ 300,000</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3 p0">
                  <div className="box-two proerty-item">
                    <div className="item-thumb">
                      <a href="property-2.html"
                      ><img src="assets/img/demo/property-2.jpg"
                      /></a>
                    </div>
                    <div className="item-entry overflow">
                      <h5><a href="property-2.html">Super nice villa </a></h5>
                      <div className="dot-hr"></div>
                      <span className="pull-left"><b>Area :</b> 120m </span>
                      <span className="proerty-price pull-right">$ 300,000</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3 p0">
                  <div className="box-two proerty-item">
                    <div className="item-thumb">
                      <a href="property-3.html"
                      ><img src="assets/img/demo/property-3.jpg"
                      /></a>
                    </div>
                    <div className="item-entry overflow">
                      <h5><a href="property-3.html">Super nice villa </a></h5>
                      <div className="dot-hr"></div>
                      <span className="pull-left"><b>Area :</b> 120m </span>
                      <span className="proerty-price pull-right">$ 300,000</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3 p0">
                  <div className="box-two proerty-item">
                    <div className="item-thumb">
                      <a href="property-1.html"
                      ><img src="assets/img/demo/property-4.jpg"
                      /></a>
                    </div>
                    <div className="item-entry overflow">
                      <h5><a href="property-1.html">Super nice villa </a></h5>
                      <div className="dot-hr"></div>
                      <span className="pull-left"><b>Area :</b> 120m </span>
                      <span className="proerty-price pull-right">$ 300,000</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3 p0">
                  <div className="box-two proerty-item">
                    <div className="item-thumb">
                      <a href="property-3.html"
                      ><img src="assets/img/demo/property-2.jpg"
                      /></a>
                    </div>
                    <div className="item-entry overflow">
                      <h5><a href="property-3.html">Super nice villa </a></h5>
                      <div className="dot-hr"></div>
                      <span className="pull-left"><b>Area :</b> 120m </span>
                      <span className="proerty-price pull-right">$ 300,000</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3 p0">
                  <div className="box-two proerty-item">
                    <div className="item-thumb">
                      <a href="property-2.html"
                      ><img src="assets/img/demo/property-4.jpg"
                      /></a>
                    </div>
                    <div className="item-entry overflow">
                      <h5><a href="property-2.html">Super nice villa </a></h5>
                      <div className="dot-hr"></div>
                      <span className="pull-left"><b>Area :</b> 120m </span>
                      <span className="proerty-price pull-right">$ 300,000</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3 p0">
                  <div className="box-two proerty-item">
                    <div className="item-thumb">
                      <a href="property-1.html"
                      ><img src="assets/img/demo/property-3.jpg"
                      /></a>
                    </div>
                    <div className="item-entry overflow">
                      <h5><a href="property-1.html">Super nice villa </a></h5>
                      <div className="dot-hr"></div>
                      <span className="pull-left"><b>Area :</b> 120m </span>
                      <span className="proerty-price pull-right">$ 300,000</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3 p0">
                  <div className="box-tree more-proerty text-center">
                    <div className="item-tree-icon">
                      <i className="fa fa-th"></i>
                    </div>
                    <div className="more-entry overflow">
                      <h5><a href="property-1.html">CAN'T DECIDE ? </a></h5>
                      <h5 className="tree-sub-ttl">Show all properties</h5>
                      <button
                          className="btn border-btn more-black"
                          value="All properties"
                      >
                        All properties
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                      <div
                          className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title"
                      >
                        <h2>GARO ESTATE</h2>
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
      </div>
  );
}

export default App;
