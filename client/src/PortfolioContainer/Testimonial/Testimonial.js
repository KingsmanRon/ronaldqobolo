import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import stephen from "../../../src/img/Testimonial/stephen.png";
import napoleon from "../../../src/img/Testimonial/Napoleon.jpg";
import robin from "../../../src/img/Testimonial/RobinSharma.jpg";
import earl from "../../../src/img/Testimonial/aspire1.jpeg";
import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
  <br></br>
  <br></br>
  <br></br>
      <ScreenHeading
        title={"Inspiration"}
        subHeading={"The building blocks of my character"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I am not a product of my circumstances.I am a product of my decisions.
                      <i className="fa fa-quote-right" />
                    </p>
                    <br/>
                
                  </div>
                  <div className="client-info">
                    <img src={stephen} alt="no internet connection"></img>
                    <h5>Stephen R. Covey</h5>
                    <p>Author of The 7 Habits of Highly Effective People</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Luck is what happens when preparedness meets opportunity, and 
                      opportunity is there all the time.
                      <i className="fa fa-quote-right" />
                    </p>
                
                    <br/>
                  </div>
                  <div className="client-info">
                    <img src={earl} alt="no internet connection"></img>
                    <h5>Earl Nightingale</h5>
                    <p>Author of lead the field</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Whatever the mind can conceive and believe, it can ahcieve.
                      <i className="fa fa-quote-right" />
                    </p>
                    <br/>
                    <br/>
                  </div>
                  <div className="client-info">
                    <img src={napoleon} alt="no internet connection"></img>
                    <h5>Napoleon Hill</h5>
                    <p>Author of Think And Grow Rich</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Life's too short to play small with your talents.
                      <i className="fa fa-quote-right" />
                    </p>
                    <br/>
                    <br/>
                  </div>
                  <div className="client-info">
                    <img src={robin} alt="no internet connection"></img>
                    <h5>Robin sharma</h5>
                    <p>Author of The 5 Am Club</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
