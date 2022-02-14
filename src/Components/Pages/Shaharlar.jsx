import React from "react";

function Shaharlar() {
  return (
    <div>
      <div className="page-head">
        <div className="container">
          <div className="row">
            <div className="page-head-content">
              <h1 className="page-title">Dunyo bo'ylab sayohat qiling!</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="properties-area recent-property"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 p0 padding-top-40">
              <div className="blog-asside-right pr0">
                <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                  <div className="panel-heading">
                    <h3 className="panel-title">Shahar nomi</h3>
                  </div>
                  <div className="panel-body search-widget">
                    <form action="" className="form-inline">
                      <fieldset>
                        <div className="row">
                          <div className="col-xs-12">
                            <input
                              className="form-control"
                              placeholder="izlash..."
                              type="text"
                            />
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <div className="row">
                          <div className="col-xs-12">
                            <input
                              className="button btn largesearch-btn"
                              type="submit"
                              value="Izlash..."
                            />
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
                <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                  <div className="panel-heading">
                    <h3 className="panel-title">Tavsya etamiz !</h3>
                  </div>
                  <div className="panel-body recent-property-widget">
                    <ul>
                      <li>
                        <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img src="assets/img/demo/small-property-2.jpg" />
                          </a>
                          <span className="property-seeker">
                            {/*<b className="b-1">A</b>*/}
                            {/*<b className="b-2">S</b>*/}
                          </span>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Chorvoq </a>
                          </h6>
                          <span className="property-price">100000 so'm</span>
                        </div>
                      </li>
                      <li>
                        <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img src="assets/img/demo/small-property-1.jpg" />
                          </a>
                          <span className="property-seeker">
                            {/*<b className="b-1">A</b>*/}
                            {/*<b className="b-2">S</b>*/}
                          </span>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Amirsoy</a>
                          </h6>
                          <span className="property-price">2 000000 so'm</span>
                        </div>
                      </li>
                      <li>
                        <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img src="assets/img/demo/small-property-3.jpg" />
                          </a>
                          <span className="property-seeker">
                            {/*<b className="b-1">A</b>*/}
                            {/*<b className="b-2">S</b>*/}
                          </span>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Chimyon</a>
                          </h6>
                          <span className="property-price">1 300 000 so'm</span>
                        </div>
                      </li>

                      <li>
                        <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img src="assets/img/demo/small-property-2.jpg" />
                          </a>
                          <span className="property-seeker">
                            {/*<b className="b-1">A</b>*/}
                            {/*<b className="b-2">S</b>*/}
                          </span>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Bo'stonliq</a>
                          </h6>
                          <span className="property-price"> 1 100 000 so'm</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9 pr0 padding-top-40 properties-page">
              <div className="col-md-12 clear">
                <div className="col-xs-10 page-subheader sorting pl0">
                  <ul className="sort-by-list">
                    <li className="active">
                      <a
                        className="order_by_date"
                        data-order="ASC"
                        data-orderby="property_date"
                        href="javascript:void(0);"
                      >
                        Property Date <i className="fa fa-sort-amount-asc"></i>
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="order_by_price"
                        data-order="DESC"
                        data-orderby="property_price"
                        href="javascript:void(0);"
                      >
                        Property Price{" "}
                        <i className="fa fa-sort-numeric-desc"></i>
                      </a>
                    </li>
                  </ul>

                  <div className="items-per-page">
                    <label for="items_per_page">
                      <b>Property per page :</b>
                    </label>
                    <div className="sel">
                      <select id="items_per_page" name="per_page">
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option selected="selected" value="12">
                          12
                        </option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                        <option value="60">60</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-xs-2 layout-switcher">
                  <a className="layout-list" href="javascript:void(0);">
                    <i className="fa fa-th-list"></i>
                  </a>
                  <a className="layout-grid active" href="javascript:void(0);">
                    <i className="fa fa-th"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-12 clear">
                <div className="proerty-th" id="list-type">
                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-3.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">Toshkent shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                         <span style={{color:"orange"}}> Toshkent shahri</span> – O‘zbekistonning poytaxti va shu bilan birga Markaziy Osiyodagi eng yirik shahardir.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-2.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Samarqand shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                         <span style={{color:"orange"}}>Samarqand</span> - Jahon sivilizatsiyasining qadimiy o‘choqlaridan biri, yer yuzining sayqali nomini olgan Samarqand mustaqil O‘zbekistonning yirik iqtisodiy va ilmiy-madaniy markazlaridan biri hisoblanadi.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-1.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">Buxoro shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{color:"orange"}}>Buxoro</span> - O'zbekistonning sayyohlik durdonalaridan biridir. Tarixiy shahar markazi YUNESKOning Butunjahon merosi ro'yxatiga kiritilgan.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-3.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">Xiva shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                         <span style={{color:"orange"}}> Xiva</span> - qadimiy devorlar, minoralar va loydan qurilgan betakror binolar shahri.Sharqning haqiqiy go‘zalligini ko‘rishni istasangiz, Xivaga tashrif buyuring.
                        </p>
               
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-1.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Qoqon shahri </a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                         <span style={{color:"orange"}} >Qo'qon</span> - Shahar hashamatli yodgorliklarga va ulug‘vor madrasalarga boy va bu ajablanarli emas, chunki Qo‘qon ilm-fan rivojlanishining   markazi edi.
                        </p>
     
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-2.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Qarshi shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{color:"orange"}}>Qarshi</span> - Qadimiy Qarshi shahri 2006 yilda YUNESKO shafeligida 2700 yillik yubileyini nishonladi. Buyuk Aleksandr Makedonskiy bu yerda bo‘lgan.
                        </p>
               
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-3.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">Andijon shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{color:"orange"}}> Andijon </span> - Bir vaqtlar Buyuk Ipak yo‘li bo‘ylab joylashgan, arxeologik yodgorliklar va tarixiy obidalarga boy bo‘lgan shahar.
                        </p>
       
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-2.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">Mo'ynoq shahri</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{color:"orange"}}>Mo‘ynoq</span> - O‘rta Osiyodagi eng yirik baliq ovlash shaharlaridan biri edi.Bu yerda toza suv bilan daryo baliqlari, ko‘plab dam olish joylari bo‘lgan ajoyib plyajlar bor edi.
                        </p>
      
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-1.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html">Zomin shaharchasi</a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right">
                          {" "}
                          $ 300,000
                        </span>
                        <p style={{ display: "none" }}>
                          <span style={{color:"orange"}}>Zomin</span> - Ajoyib landshaftlar va toza tog‘ havosi, flora va faunaning  xilma-xilligi, qadimiy ziyoratgohlar va noyob milliy sihatgoh - bularning barchasi Zomin.
                        </p>
         
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="pull-right">
                  <div className="pagination">
                    <ul>
                      <li>
                        <a href="#">Prev</a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">Next</a>
                      </li>
                    </ul>
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

export default Shaharlar;
