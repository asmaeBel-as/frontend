import React,{useState} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Lightbox from "react-image-lightbox";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Testimonial.css";
import img from "../../../src/img/Testimonial/1.png";
import img1 from "../../../src/img/Testimonial/1pic.png";
import img2 from "../../../src/img/Testimonial/asa1.png";
import img3 from "../../../src/img/Testimonial/1A.jpg";
import shape from "../../../src/img/Testimonial/shape-bg.png";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
export default function Testimonial(props) {


  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const Data = [
    {
      id: 1,
      imgSrc: img,
      destTitle: "Quiz Website",
      location: "Web App",
      grade: " Wordpress ",
    },

    {
      id: 2,
      imgSrc: img1,
      destTitle: "Trip Website",
      location: " Web App",
      grade: "React Js ",
    },

    {
      id: 3,
      imgSrc: img2,
      destTitle: "E-commerce Website",
      location: "Web App",
      grade: "PHP, Javascript",
    },

    {
      id: 4,
      imgSrc: img3,
      destTitle: "Flutter Mobile App",
      location: "mobile App",
      grade: "Flutter, Firebase, Dart ",
    },
  ];
 

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Projects I realised"}
      />
      <div className="relative">
        {" "}
        <section className="testimonial-section fade-in" id={props.id || ""}>
          <div className="container">
            <div className="row">
              {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
                return (
                  <div className="mainContent ">
                    <div className="singleDestination">
                      <div className="destImage">
                        <img src={imgSrc} alt="img title" />
                        <div className="overLayInfo">
                          <h3>{destTitle}</h3>
                          <p>{grade}</p>

                          <BsArrowRightShort
                            className="icon"
                            
                          />
                         
                        </div>
                      </div>

                      <div className="destFooter">
                        <div className="number">0{id}</div>
                        <div className="destText flex">
                          <h6>{location}</h6>
                          <span className="flex">
                            <span className="icon">
                              <BsDot />
                            </span>
                            Belas
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
