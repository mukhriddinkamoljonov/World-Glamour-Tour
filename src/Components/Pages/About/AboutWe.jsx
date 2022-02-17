import React from "react";
import biz_haqimizda from "../../../img/biz_haqimizda.jpg";
import "./About.css";

function AboutWe() {
  return (
    <div className="">
      <div className="page-head">
        <div className="container">
          <div className="row">
            <div className="page-head-content">
              <h1 className="page-title">Biz haqimizda...</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="content-area blog-page padding-top-40"
        style={{ backgroundColor: "#fcfcfc", paddingBottom: "55px" }}
      >
        <div className="container">
          <div className="row">
            <div className="blog-lst col-md-9 p0">
              <section id="id-100" className="post single">
                <div className="post-header single">
                  <div className="">
                    <h2
                      className="wow fadeInLeft animated "
                      style={{
                        backgroundColor: "orange",
                        textAlign: "center",
                        padding: 10,
                      }}
                    >
                      World Glamour Tour
                    </h2>
                    <div className="title-line wow fadeInRight animated"></div>
                  </div>
                  <div className="row wow fadeInRight animated">
                    <div className="col-sm-6">
                      <p className="author-category">
                        By <a href="/">John Snow</a> in
                        <a href="blog.html">Webdesign</a>
                      </p>
                    </div>
                    <div className="col-sm-6 right">
                      <p className="date-comments">
                        <a href="single.html">
                          <i className="fa fa-calendar-o"></i> June 20, 2013
                        </a>
                        <a href="single.html">
                          <i className="fa fa-comment-o"></i> 8 Comments
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="image wow fadeInRight animated">
                    <img
                      src={biz_haqimizda}
                      className="img"
                      alt="Example blog post alt"
                    />
                  </div>
                </div>

                <div
                  id="post-content"
                  className="post-body single wow fadeInLeft animated"
                >
                  <p>
                    ✔️ <strong>WORLD GLAMOUR TOUR</strong> : Eng yaxshi diqqatga
                    sazovor joylar Toshkentda tashrif uchun bir necha kun kerak
                    bo‘ladigan diqqatga sazovor joylarning ro‘yxati juda katta,
                    sayr qilish uchun keng va yashil xiyobonlar, favvoralar va
                    ekologik bog‘lar.
                  </p>
                  <p>✔️Buyuk me'moriy ansambllar, masjidlar va minoralar;</p>
                  <p>
                    {" "}
                    ✔️ Har didga mos teatr va galereyalar. Bu yerda har kim
                    shaharning eng diqqatga sazovor joylarini ko‘rish uchun o‘z
                    yo‘nalishini yaratishi mumkin!
                  </p>
                  <p>
                    ✔️ Shahardagi ko‘plab muzeylarda O‘rta Osiyo xalqlari tarixi
                    va madaniyati haqidagi noyob asarlar
                  </p>
                  <h2>Header Level 2</h2>
                  <ol>
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </li>
                    <li>Aliquam tincidunt mauris eu risus.</li>
                  </ol>

                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus magna. Cras in mi at felis aliquet congue. Ut a
                      est eget ligula molestie gravida. Curabitur massa. Donec
                      eleifend, libero at sagittis mollis, tellus est malesuada
                      tellus, at luctus turpis elit sit amet quam. Vivamus
                      pretium ornare est.
                    </p>
                  </blockquote>

                  <h3>Header Level 3</h3>

                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi
                    vitae est. Mauris placerat eleifend leo. Quisque sit amet
                    est et sapien ullamcorper pharetra. Vestibulum erat wisi,
                    condimentum sed, commodo vitae, ornare sit amet, wisi.
                    Aenean fermentum, elit eget tincidunt
                  </p>

                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </li>
                    <li>Aliquam tincidunt mauris eu risus.</li>
                  </ul>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
                    eu libero sit amet quam egestas semper. Aenean condimentum,
                    eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
                    Donec non enim in turpis pulvinar facilisis. Ut felis.
                    Praesent dapibus, neque id cursus faucibus, tortor neque
                    egestas augue, eu vulputate magna eros eu erat. Aliquam erat
                    volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                    facilisis luctus, metus
                  </p>
                </div>
                <div className="post-footer single wow fadeInBottum animated">
                  <ul className="pager">
                    <li className="previous">
                      <a href="/">
                        <i className=""></i>← Older{" "}
                      </a>
                    </li>
                    <li className="next disabled">
                      <a href="/">
                        Newer →<i className=""></i>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="about-autor"></section>

              <section
                id="comments"
                className="comments wow fadeInRight animated"
              >
                <h4 className="text-uppercase wow fadeInLeft animated">
                  3 comments
                </h4>
                <div className="row comment last">
                  <div className="col-sm-3 col-md-2 text-center-xs">
                    <p>
                      <img
                        src="assets/img/client-face2.png"
                        className="img-responsive img-circle"
                        alt=""
                      />
                    </p>
                  </div>

                  <div className="col-sm-9 col-md-10">
                    <h5 className="text-uppercase">Louise Armero</h5>
                    <p className="posted">
                      <i className="fa fa-clock-o"></i> September 23, 2012 at
                      12:00 am
                    </p>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Vestibulum tortor quam,
                      feugiat vitae, ultricies eget, tempor sit amet, ante.
                      Donec eu libero sit amet quam egestas semper. Aenean
                      ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                    <p className="reply">
                      <a href="/">
                        <i className="fa fa-reply"></i> Reply
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="blog-asside-right col-md-3">
              <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                <div className="panel-heading">
                  <h3 className="panel-title">Text widget</h3>
                </div>
                <div className="panel-body text-widget">
                  <p>
                    "WORLD GLAMOUR TOUR" turizm agentligi bu O'zbekiston
                    respublikasi bo'yicha ichki turizm kompaniyasi. Bizning
                    kompaniyamiz bilan siz O'zbekistonning barcha ziyoratgohlari
                    va viloyatlariga sayohat qilishingiz mumkin.
                  </p>
                </div>
              </div>
              <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                <div className="panel-heading">
                  <h3 className="panel-title">Recommended</h3>
                </div>
                <div className="panel-body recent-property-widget">
                  <ul>
                    <li>
                      <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-2.jpg" />
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>
                    <li>
                      <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-1.jpg" />
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>
                    <li>
                      <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-3.jpg" />
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>

                    <li>
                      <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                        <a href="single.html">
                          <img src="assets/img/demo/small-property-2.jpg" />
                        </a>
                        <span className="property-seeker">
                          <b className="b-1">A</b>
                          <b className="b-2">S</b>
                        </span>
                      </div>
                      <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                        <h6>
                          <a href="single.html">Super nice villa </a>
                        </h6>
                        <span className="property-price">3000000$</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel sidebar-menu wow fadeInRight animated">
              <div className="panel-heading">
                <h3 className="panel-title">Tags</h3>
              </div>
              <div className="panel-body">
                <ul className="tag-cloud">
                  <li>
                    <a href="/">
                      <i className="fa fa-tags"></i> html5
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-tags"></i> css3
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-tags"></i> jquery
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-tags"></i> ajax
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-tags"></i> php
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-tags"></i> responsive
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-tags"></i> visio
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-tags"></i> bootstrap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <h3>
                  <i class="fa fa-map-marker"></i> Address
                </h3>
                <p>
                  13/25 shibuia <br />
                  Fergana <br />
                  Festival kochasi
                  <br />
                  <strong>Uzbekistan</strong>
                </p>
              </div>
              <div class="col-sm-4">
                <h3>
                  <i class="fa fa-phone"></i> Qo'ng'iroqlar markazi
                </h3>
                <p class="text-muted">
                  Agar Uzbekistandan qo'ng'iroq qilsangiz, bu raqam bepul, aks
                  holda elektron aloqa shaklidan foydalanishni maslahat beramiz.
                </p>
                <p>
                  <strong>+998(91) 658 78 41</strong>
                </p>
              </div>
              <div class="col-sm-4">
                <h3>
                  <i class="fa fa-envelope"></i> Elektron pochta
                </h3>
                <p class="text-muted">
                  Iltimos, bizga elektron pochta xabarini yozing yoki elektron
                  chiptalar tizimimizdan foydalaning.
                </p>
                <ul>
                  <li>
                    <strong>
                      <a href="mailto:">raymjonovbobur@gmail.com</a>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <a href="https://e-visa.gov.uz/application">
                        Uzbekistan Viza
                      </a>
                    </strong>
                    - bizning chiptalarni qo'llab-quvvatlash platformamiz
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWe;
