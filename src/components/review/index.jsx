import React from "react";
import "./review.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../resources/Images/star.png";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import woman from "../../resources/Images/woman.png";

export default function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="review-body">
      <div className="review">
        <div className="star-array">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <h3>Tus palabra, no nuestra</h3>
        <p>
          After 15 years running The Yatch Week, people have a lot to say about
          us
        </p>
      </div>
      <Slider className="slider-body" {...settings}>
        <Card className="card-body">
          <Card.Body>
            <Card.Title className="card-title">
              <img src={woman} alt="woman"></img> <p>Alexandra Graff</p>
            </Card.Title>
            <Card.Text className="card-text">
              “Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna fringilla urna,
              porttitor.”
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-body">
          <Card.Body>
            <Card.Title className="card-title">
              <img src={woman} alt="woman"></img> <p>Alexandra Graff</p>
            </Card.Title>
            <Card.Text className="card-text">
              “Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna fringilla urna,
              porttitor.”
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-body">
          <Card.Body>
            <Card.Title className="card-title">
              <img src={woman} alt="woman"></img> <p>Alexandra Graff</p>
            </Card.Title>
            <Card.Text className="card-text">
              “Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna fringilla urna,
              porttitor.”
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-body">
          <Card.Body>
            <Card.Title className="card-title">
              <img src={woman} alt="woman"></img> <p>Alexandra Graff</p>
            </Card.Title>
            <Card.Text className="card-text">
              “Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna fringilla urna,
              porttitor.”
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-body">
          <Card.Body>
            <Card.Title className="card-title">
              <img src={woman} alt="woman"></img> <p>Alexandra Graff</p>
            </Card.Title>
            <Card.Text className="card-text">
              “Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna fringilla urna,
              porttitor.”
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-body">
          <Card.Body>
            <Card.Title className="card-title">
              <img src={woman} alt="woman"></img> <p>Alexandra Graff</p>
            </Card.Title>
            <Card.Text className="card-text">
              “Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna fringilla urna,
              porttitor.”
            </Card.Text>
          </Card.Body>
        </Card>
      </Slider>
    </div>
  );
}
