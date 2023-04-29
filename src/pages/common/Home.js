import cx from "classnames";
import React, { useContext, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { RxCrossCircled } from "react-icons/rx";
import Slider from "react-slick";
import styled from "styled-components";
import axiosInstance from "../../axios";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import profImage from "../../images/user-image.png";
import styles from "./Home.module.css";
import HomeContainer from "./HomeFolder/HomeContainer";
import HomeDiscussion from "./HomeFolder/HomeDiscussion";
import HomeFeed from "./HomeFolder/HomeFeed";
import HomeUser from "./HomeFolder/HomeUser";
import TopInput from "./HomeFolder/TopInput";
import Useroptions from "./HomeFolder/Useroptions";

function Home() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const { textColor } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const [postBtn, setPostBtn] = useState(false);
  const [dataUri, setDataUri] = useState([]);
  const [photoFile, setPhotoFile] = useState([]);
  const handleClose = () => {
    setPhotoFile([]);
    setDataUri([]);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const { user } = useContext(AuthContext);
  const postIt = async () => {
    const text = document.querySelector(".text-area").value.trim();
    const res = await axiosInstance
      .post("/posts/", { user: user?._id, desc: text, img: photoFile })
      .catch((err) => {
        console.log(err);
      });
    if (res) {
      setShow(false);
      window.location.reload();
    }
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPhotoFile((obj) => [...obj, reader.result]);
    };
  };

  const previewImg = (fileInput) => {
    for (let i = 0; i < fileInput.files.length; i++) {
      let file = fileInput.files.item(i);

      if (file) {
        setDataUri((obj) => [...obj, URL.createObjectURL(file)]);
        setFileToBase(file);
      }
    }
  };

  const getFile = () => {
    const fileInput = document.getElementById("file-input");
    fileInput.click();
  };
  const Foot = styled.div`
    padding: 0rem 0.8rem 0rem;
    display: flex;
    position: relative;
    align-items: center;

    i.icon {
      font-size: 22px;
      color: var(--dark-gray);
      margin-right: 15px;
      cursor: pointer;

      &:hover {
        color: var(--blackish-gray);
      }
    }

    .divider {
      height: 22px;
      border-left: 1px solid var(--dark-gray);
      margin-right: 20px;
    }

    button.visibility {
      font-size: 15px;
      color: var(--ligth-black);
      font-weight: bold;
      margin-right: 20px;

      i {
        margin-right: 4px;
      }
      span {
        color: var(--blackish-gray);
      }
    }

    button.post {
      margin-left: auto;
      font-size: 16px;
      font-weight: bold;
      color: white;
      background: ${textColor};
      border: 1px solid ${textColor};
      padding: 7px 15px;
      border-radius: 40px;

      img {
        height: 20px;
      }
    }

    button.active {
      color: white;
      background: ${textColor};
      cursor: pointer;
    }
  `;

  return (
    <div style={{ margin: "auto 14rem" }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: "400",
              fontFamily: "Roboto",
              letterSpacing: "2px",
              lineHeight: "25px",
              marginBottom: "5px",
            }}
          >
            Create a post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <div
              id={styles.expPic}
              style={{
                padding: 0,
                display: "flex",
                justifyContent: "center",
                width: "10%",
              }}
            >
              <div
                className={styles.jobPic}
                style={{
                  backgroundImage: `url(${profImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                id="profile_pic"
              ></div>
            </div>
            <div
              id={styles.expPicData}
              style={{ padding: 0, display: "flex", alignItems: "center" }}
            >
              <Row
                style={{
                  color: textColor,
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Roboto",
                  lineHeight: "20px",
                  marginBottom: "5px",
                }}
              >
                {user?.fname + " " + user?.lname}
              </Row>
            </div>
          </Row>
          <Row>
            <textarea
              className={cx(styles.txt, "text-area")}
              style={{
                border: "0",
                outline: "none",
                maxHeight: "600px",
                resize: "inherit",
                height: "100px",
                minHeight: "250px",
                margin: "15px 0",
                color: "black",
                fontSize: "13px",
                fontWeight: "300",
                fontFamily: "Roboto",
                letterSpacing: "1px",
                lineHeight: "15px",
              }}
              placeholder="What do you want to talk about?"
            />

            <div>
              {" "}
              <Row className="img-previewer"></Row>
            </div>

            <div
              className={styles.modalPost}
              style={{ padding: "10px 30px", position: "relative" }}
            >
              {dataUri.length > 0 && (
                <RxCrossCircled
                  size={25}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "-20px",
                    zIndex: 99999999999999,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setDataUri([]);
                    setPhotoFile([]);
                  }}
                />
              )}
              <Slider {...settings}>
                {dataUri.length > 0 &&
                  dataUri.map((uri, index) => {
                    return (
                      <img
                        width="200"
                        height="200"
                        src={uri}
                        key={index}
                        alt="avatar"
                      />
                    );
                  })}
              </Slider>
            </div>
          </Row>
          <Foot className="foot">
            <i
              className="fa-solid fa-image fs-3"
              style={{ color: textColor, marginRight: "2%" }}
              onClick={getFile}
            >
              {" "}
              <input
                type="file"
                id="file-input"
                accept="image/*"
                multiple
                onChange={(e) => {
                  previewImg(e.currentTarget);
                }}
                hidden={true}
              />
            </i>

            <i
              className="fa-brands fa-youtube fs-2"
              style={{ color: textColor }}
            />
            <div className="divider" />

            <button
              className={`post ${postBtn ? "active" : ""}`}
              stlye={{ backgroundColor: "black" }}
              onClick={postIt}
            >
              Post
            </button>
          </Foot>
        </Modal.Body>
      </Modal>
      <Container className="">
        <Row className="">
          <Col lg={4} className="p-3 py-4 d-flex flex-column gap-4">
            <HomeContainer>
              <HomeUser
                img={user?.profilePicture}
                name={user?.fname + " " + user?.lname}
                designation={user?.desc}
              />
            </HomeContainer>

            <div
              className="sticky-top d-flex flex-column gap-4"
              style={{ top: "6rem" }}
            >
              <HomeContainer>
                <Useroptions />
              </HomeContainer>

              <HomeContainer>
                <HomeDiscussion />
              </HomeContainer>
            </div>

            {/* <div className={cx(styles.fixedBottom)} style={{ width: "22.55%" }}>
              <div className={cx(styles.bottomDiv, "bg-white shadow-lg")}>
                <HomeChat />
              </div>
            </div> */}
          </Col>

          {/* Right Home Side */}

          <Col
            className="p-3 py-4 d-flex flex-column gap-4"
            style={{ maxWidth: "60%" }}
          >
            <HomeContainer>
              <TopInput handleShow={handleShow} />
            </HomeContainer>

            <HomeFeed />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
