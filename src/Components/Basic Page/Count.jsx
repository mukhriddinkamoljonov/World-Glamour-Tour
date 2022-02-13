import React from "react";
import dollar from "../icons/dollar.png";
import ruble from "../icons/ruble.png";
import evro from "../icons/evro.png";
import lira from "../icons/lira.png";
import "./Main.css"

const Count = () => {
  return (
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
                    <img src={dollar} alt="dollar" className="count-img" />
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
                    <img src={ruble} alt="ruble" className="count-img" />
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
                    <img src={evro} alt="evro" className="count-img" />
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
                    <img src={lira} alt="lira" className="count-img" />
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
  );
};

export default Count;
