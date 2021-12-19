import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  {
    name: "Image 1",
    url: "https://media.istockphoto.com/photos/artificial-intelligence-and-communication-network-concept-picture-id1281297414?b=1&k=20&m=1281297414&s=170667a&w=0&h=YgXut9DQqJDDfl3fmT93kLnaWJTFJP9Umg-Tefw3BPs=",
  },
  {
    name: "Image 2",
    url: "https://media.istockphoto.com/photos/close-up-of-hand-holding-smartphone-and-screen-applications-with-picture-id1278703639?b=1&k=20&m=1278703639&s=170667a&w=0&h=dEOHQ5wlbZWp14I0XTrT6vbGSAgUsqt8I9COp8VCROg=",
  },
  {
    name: "Image 3",
    url: "https://media.istockphoto.com/photos/high-angle-view-asian-chinese-womans-hand-on-mobile-app-for-online-picture-id1300476665?b=1&k=20&m=1300476665&s=170667a&w=0&h=6yLWL7XmKiiMRheXK4E1cdcPOqp54y3Au-mxdbuodyQ=",
  },
];

class App extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "carousel-slider",
    };
    return (
      <div className="App">
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <div className="image-slider">
                <img src={image.url} alt="not found" width="100%" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default App;
