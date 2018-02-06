import React from 'react';
import './Portfolio.css';

const Portfolio = ({currentTheme}) => {
  return (
    <div className={"portfolio portfolio-" + currentTheme.userTheme}>
      <h2 className={"text-uppercase text-" + currentTheme.userTheme}>Portfolio</h2>
      <br/>
      <div className="row">
        <div className="portfolio-project">
          <a className="portfolio-item">
            <div className="portfolio-item-caption">
              <div className="portfolio-item-caption-content text-white">

              </div>
            </div>
            <img className="img-fluid" src=""></img>
          </a>

        </div>
        <div className="portfolio-project">
          <a className="portfolio-item">
            <div className="portfolio-item-caption">
              <div className="portfolio-item-caption-content text-white">

              </div>
            </div>
              <img className="img-fluid" src=""></img>
          </a>

        </div>
        <div className="portfolio-project">
          <a className="portfolio-item">
            <div className="portfolio-item-caption">
              <div className="portfolio-item-caption-content text-white">

              </div>
            </div>
            <img className="img-fluid" src=""></img>
          </a>

        </div>
        <div className="portfolio-project">
          <a className="portfolio-item">
            <div className="portfolio-item-caption">
              <div className="portfolio-item-caption-content text-white">

              </div>
            </div>
            <img className="img-fluid" src=""></img>
          </a>

        </div>



      </div>
    </div>



  )
}

export default Portfolio;
