import React from "react";

const Page404 = () => {
    return (
        <div>
            <div id="preloader">
                <div id="status">&nbsp;</div>
            </div>

            <div className="header-connect">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-8  col-xs-12">
                            <div className="header-half header-call">
                                <p>
                  <span>
                    <i className="pe-7s-call"></i> +1 234 567 7890
                  </span>
                                    <span>
                    <i className="pe-7s-mail"></i> your@company.com
                  </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2 col-md-offset-5  col-sm-3 col-sm-offset-1  col-xs-12">
                            <div className="header-half header-social">
                                <ul className="list-inline">
                                    <li>
                                        <a href="/">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fa fa-vine"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fa fa-dribbble"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-default ">
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
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/img/logo.png" alt=""/>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse yamm" id="navigation">
                        <div className="button navbar-right">
                            <button
                                className="navbar-btn nav-button wow bounceInRight login"
                                onClick=" window.open('register.html')"
                                data-wow-delay="0.4s"
                            >
                                Login
                            </button>
                            <button
                                className="navbar-btn nav-button wow fadeInRight"
                                onClick=" window.open('submit-property.html')"
                                data-wow-delay="0.5s"
                            >
                                Submit
                            </button>
                        </div>
                        <ul className="main-nav nav navbar-nav navbar-right">
                            <li className="dropdown ymm-sw " data-wow-delay="0.1s">
                                <a
                                    href="index.html"
                                    className="dropdown-toggle active"
                                    data-toggle="dropdown"
                                    data-hover="dropdown"
                                    data-delay="200"
                                >
                                    Home <b className="caret"></b>
                                </a>
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

                            <li className="wow fadeInDown" data-wow-delay="0.1s">
                                <a className="" href="properties.html">
                                    Properties
                                </a>
                            </li>
                            <li className="wow fadeInDown" data-wow-delay="0.1s">
                                <a className="" href="property.html">
                                    Property
                                </a>
                            </li>
                            <li className="dropdown yamm-fw" data-wow-delay="0.1s">
                                <a
                                    href="/"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    data-hover="dropdown"
                                    data-delay="200"
                                >
                                    Template <b className="caret"></b>
                                </a>
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
                                                        <li>
                                                            <a href="blog.html">Blog listing</a>
                                                        </li>
                                                        <li>
                                                            <a href="single.html">Blog Post (full)</a>
                                                        </li>
                                                        <li>
                                                            <a href="single-right.html">Blog Post (Right)</a>
                                                        </li>
                                                        <li>
                                                            <a href="single-left.html">Blog Post (left)</a>
                                                        </li>
                                                        <li>
                                                            <a href="contact.html">Contact style (1)</a>
                                                        </li>
                                                        <li>
                                                            <a href="contact-3.html">Contact style (2)</a>
                                                        </li>
                                                        <li>
                                                            <a href="contact_3.html">Contact style (3)</a>
                                                        </li>
                                                        <li>
                                                            <a href="faq.html">FAQ page</a>
                                                        </li>
                                                        <li>
                                                            <a href="404.html">404 page</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3">
                                                    <h5>Property</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="property-1.html">
                                                                Property pages style (1)
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="property-2.html">
                                                                Property pages style (2)
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="property-3.html">
                                                                Property pages style (3)
                                                            </a>
                                                        </li>
                                                    </ul>

                                                    <h5>Properties list</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="properties.html">
                                                                Properties list style (1)
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="properties-2.html">
                                                                Properties list style (2)
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="properties-3.html">
                                                                Properties list style (3)
                                                            </a>
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
                                                        <li>
                                                            <a href="register.html">Register / login</a>
                                                        </li>
                                                        <li>
                                                            <a href="user-properties.html">Your properties</a>
                                                        </li>
                                                        <li>
                                                            <a href="submit-property.html">Submit property</a>
                                                        </li>
                                                        <li>
                                                            <a href="change-password.html">Change password</a>
                                                        </li>
                                                        <li>
                                                            <a href="user-profile.html">Your profile</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="wow fadeInDown" data-wow-delay="0.4s">
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div
                className="content-area error-page"
                style={{backgroundColor: "#FCFCFC", paddingBottom: "55px"}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                            <h2 className="error-title">404</h2>
                            <p>
                                Sorry, the page you requested may have been moved or deleted
                            </p>
                            <a href="index.html" className="btn btn-default">
                                Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-area">
                <div className=" footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                                <div className="single-footer">
                                    <h4>About us </h4>
                                    <div className="footer-title-line"></div>

                                    <img
                                        src="assets/img/footer-logo.png"
                                        className="wow pulse"
                                        data-wow-delay="1s"
                                        alt="title"
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
                                            <i className="pe-7s-mail strong"> </i>{" "}
                                            email@yourcompany.com
                                        </li>
                                        <li>
                                            <i className="pe-7s-call strong"> </i> +1 908 967 5906
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                                <div className="single-footer">
                                    <h4>Quick links </h4>
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
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="blg-date">12-12-2016</span>
                                            </div>
                                            <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                                <h6>
                                                    <a href="single.html">Add news functions </a>
                                                </h6>
                                                <p style={{lineHeight: "17px", padding: "8px 2px"}}>
                                                    Lorem ipsum dolor sit amet, nulla ...
                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                                <a href="single.html">
                                                    <img
                                                        src="assets/img/demo/small-proerty-2.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="blg-date">12-12-2016</span>
                                            </div>
                                            <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                                <h6>
                                                    <a href="single.html">Add news functions </a>
                                                </h6>
                                                <p style={{lineHeight: "17px", padding: "8px 2px"}}>
                                                    Lorem ipsum dolor sit amet, nulla ...
                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                                <a href="single.html">
                                                    <img
                                                        src="assets/img/demo/small-proerty-2.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="blg-date">12-12-2016</span>
                                            </div>
                                            <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                                <h6>
                                                    <a href="single.html">Add news functions </a>
                                                </h6>
                                                <p style={{lineHeight: "17px", padding: "8px 2px"}}>
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
                  {" "}
                    (C) <a href="http://www.KimaroTec.com">KimaroTheme</a> , All
                  rights reserved 2016{" "}
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

export default Page404;
