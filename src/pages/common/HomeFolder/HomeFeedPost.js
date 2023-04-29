import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import postImage from "../../../images/postImg.jpg";
import profImage from "../../../images/user-image.png";
import styles from "./Home.module.css";

const HomeFeedPost = ({
  profImg = profImage,
  fname = "",
  lname = "",
  profileDesc = "CO of SpaceEx",
  desc = `You have to match the convenience of the gasoline car in order for people to buy an electric car." "In order to have clean air in cities, you have to go electric." "You should not show somebody something very cool and then not do it. At Tesla, any prototype that is shown to customers, the production must be better.`,
  postImg = postImage,
  //  postLikes,
  //  postComments,
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container fluid className="p-0">
      <Container fluid className="p-0 p-3 px-4">
        <Container
          fluid
          className="p-0 my-2 mb-3 d-flex align-items-center justify-content-between col-darkGrey"
        >
          <div className="d-flex gap-3">
            <div lg={2} className="p-0">
              <img
                src={profImg}
                alt=""
                srcSet=""
                className="rounded-circle img-fluid"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                  minWidth: "50px",
                  minHeight: "50px",
                  boxShadow: "0px 1px 1px darkgrey",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div>
              <h2 className="m-0 fs-5 fw-bold">{fname + " " + lname}</h2>
              <div className="fs-6 fw-300">{profileDesc}</div>
            </div>
          </div>
          <div lg={1}>
            <i className="fa-solid fa-ellipsis-vertical fa-xl"></i>
          </div>
        </Container>

        <Container fluid className="p-0 fw-300">
          <div className="text-wrap">{desc}</div>
        </Container>
      </Container>
      <div
        className={styles.modalPost}
        style={{
          marginBottom: "10px",
          padding: postImg.length > 1 ? "0 25px" : "0",
        }}
      >
        <Slider {...settings}>
          {postImg.length > 0 &&
            postImg.map((uri, index) => {
              return (
                <img
                  height="500"
                  width="150"
                  style={{ backgroundSize: "fit" }}
                  src={uri?.url}
                  key={index}
                  alt="post"
                />
              );
            })}
        </Slider>
      </div>
      <Container className="d-flex justify-content-between align-items-center gap-2 p-3 px-4">
        <div className="d-flex gap-4 align-items-center">
          <div>
            <i className="fa-regular fa-heart fa-xl"></i>
          </div>
          <div>
            <i className="fa-regular fa-comment fa-xl"></i>
          </div>
          <div>
            <i className="fa-regular fa-paper-plane fa-xl"></i>
          </div>
        </div>
        <div>
          <i className="fa-regular fa-bookmark fa-xl"></i>
        </div>
      </Container>
    </Container>
  );
};

export default HomeFeedPost;
