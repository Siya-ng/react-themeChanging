import React from 'react';

const Information = ({currentTheme}) => {
  return (
    <div>
    <div className={"portfolio portfolio-" + currentTheme.userTheme} id="portfolio">
      <div className="">
        <h2 className={"text-uppercase text-" + currentTheme.userTheme}>Portfolio</h2>
        <br/>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <a className="portfolio-item d-block ml-auto" href="#portfolio-modal-1">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/project1.png" alt=""/>
            </a>
          </div>
          <div className="col-md-6 col-lg-6">
            <a className="portfolio-item d-block mr-auto" href="#portfolio-modal-2">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/project2.png" alt=""/>
            </a>
          </div>
          <div className="col-md-6 col-lg-6">
            <a className="portfolio-item d-block ml-auto" href="#portfolio-modal-3">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/project3.png" alt=""/>
            </a>
          </div>
          <div className="col-md-6 col-lg-6">
            <a className="portfolio-item d-block mr-auto" href="#portfolio-modal-4">
              <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                  <i className="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/project4.png" alt=""/>
            </a>
          </div>

        </div>
      </div>
    </div>
    <div className={" mb-0 section bg-" + currentTheme.userTheme + " text-secondary-" + currentTheme.userTheme} id="about">
      <div>
        <img className="img-fluid mb-5 d-block mx-auto" src="img/profilepic.png" alt=""/>


        <h3 className="text-center text-white">Web Developer and Crafter Hobbyist</h3>


        <div className="text-center about-text m-5 mx-auto">

          <p className="lead m-5">Out of curiosity, I decide to try to learn some programming. I started off learning the basic of python and realise that i do enjoy the process of coding. This leads me to enrolled in General Assembly's Web Development Immersive course. The journey of learning is tough but yet fun as you build something pieces by pieces. I do not know where this journey will lead me to but i am willing to put in effort to learn more and improve my skills.
            <br/><br/></p>

        </div>

        <div className="row">
          <div className="col-lg-4 ml-auto">
            <h5 className="text-center text-white">Language:</h5>
            <h6 className="text-center text-white">HTML | CSS | Javascript | Ruby </h6>
          </div>
          <div className="col-lg-4 mr-auto">
            <h5 className="text-center text-white">Framework and Library:</h5>
            <h6 className="text-center text-white"> Jquery | Node.js | Express | Rails | React </h6>
          </div>
        </div>
      </div>
    </div>
  </div>




  )
}

export default Information;
