import React from "react";
import agreed from "../icons/agreed.png";
import visa from "../icons/visa.png";
import "./Main.css"

const Sale = () => {
  return (
    <div className="boy-sale-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
            <div className="asks-first">
              <div className="asks-first-circle">
                <img src={agreed} alt="agreed" className="sale-img" />
              </div>
              <div className="asks-first-info">
                <h2>Diplomatik vakolatxonalar.</h2>
                <p>
                  Bugungi kunda O‘zbekistonning 50 dan ortiq mamlakatlarda diplomatik vakolatxonalari bor <span>uzairways.com/uz/xorijdagi-vakolatxonalar</span>.
                </p>
              </div>
              <div className="asks-first-arrow">
                <a target="_blank" href="https://www.uzairways.com/uz/xorijdagi-vakolatxonalar">
                  <span className="fa fa-angle-right"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0">
            <div className="asks-first">
              <div className="asks-first-circle">
                <img src={visa} alt="visa" className="sale-img" />
              </div>
              <div className="asks-first-info">
                <h2>DO YOU WANT TO SELL A Property?</h2>
                <p>
                  O‘zbekistonga elektron turistik viza olish uchun:  e-visa.gov.uz   murojaat eting
                </p>
              </div>
              <div className="asks-first-arrow">
                <a target="_blank"   href="https://e-visa.gov.uz/application">
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
  );
};

export default Sale;
