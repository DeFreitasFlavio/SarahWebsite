"use client";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import WrapperContent, {
  RotationImage,
  Slides,
  Images,
  ButtonPrev,
  ButtonNext,
} from "./Carrousel.style";

export default function Carrousel() {
  const slideImages = [
    {
      url: "https://images.pexels.com/photos/1553959/pexels-photo-1553959.jpeg?auto=compress&cs=tinysrgb&w=1600",
      caption: "Slide 1",
    },
    {
      url: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VyZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Slide 2",
    },
    {
      url: "images/slide_4.jpg",
      caption: "Slide 3",
    },
  ];

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    );
  };
  return (
    <WrapperContent>
      <Images data-carrousel>
        {/* <ButtonPrev className="carrousel-button" data-carrousel-button="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="SVG"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </ButtonPrev>
        <ButtonNext className="carrousel-button" data-carrousel-button="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="SVG"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </ButtonNext> */}
        <Slideshow />
        <RotationImage data-slides>
          {/* <Slides className="slide" data-active>
            <img
              src="https://images.pexels.com/photos/1553959/pexels-photo-1553959.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="image1"
            />
          </Slides>
          <Slides className="slide" data-active>
            <img
              src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VyZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="image2"
            />
          </Slides>
          <Slides className="slide" data-active>
            <img
              src="https://images.pexels.com/photos/1556796/pexels-photo-1556796.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="image3"
            />
          </Slides> */}
        </RotationImage>
      </Images>
    </WrapperContent>
  );
}
