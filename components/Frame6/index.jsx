import React, { useEffect } from "react";
import "./Frame6.css";

function Frame6(props) {
  const {
    wereTheBankOfTheFree,
    personalBusinessCompanyHelp,
    getKuda1,
    a11,
    a21,
    a41,
    a31,
    wereHereToHelpY,
    getKuda2,
    group249,
  } = props;

  useEffect(() => {
    var image = document.querySelectorAll(".were-the-bank-of-the-free");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 1.2,
      overflow: false,
      delay: 0.4,
      transition: "none",
    });
  }, []);

  return (
    <div className="container-center-horizontal">
      <form className="frame-6 screen" name="form2" action="form2" method="post">
        <div className="overlap-group4">
          <div className="overlap-group3">
            <div className="widget-wrapper">
              <h1 className="were-the-bank-of-the-free">{wereTheBankOfTheFree}</h1>
            </div>
            <p className="personal-business-company-help">{personalBusinessCompanyHelp}</p>
            <a href="javascript:SubmitForm('form2')">
              <div className="group-222">
                <div className="overlap-group1">
                  <div className="get-kuda">{getKuda1}</div>
                </div>
              </div>
            </a>
            <div className="overlap-group2">
              <img className="ellipse-35" src="/img/ellipse-35@1x.svg" />
              <img className="a1-1" src={a11} />
              <img className="a2-1" src={a21} />
              <img className="a4-1" src={a41} />
              <img className="a3-1" src={a31} />
            </div>
          </div>
          <div className="were-here-to-help-y">{wereHereToHelpY}</div>
          <a href="javascript:SubmitForm('form2')">
            <div className="group-221">
              <div className="overlap-group">
                <div className="get-kuda-1">{getKuda2}</div>
              </div>
            </div>
          </a>
          <div className="group-249" style={{ backgroundImage: `url(${group249})` }}></div>
        </div>
      </form>
    </div>
  );
}

export default Frame6;
