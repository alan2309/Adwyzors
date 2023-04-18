import cx from "classnames";
import React, { useContext, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import styles from "./Home.module.css";
import HomeContainer from "./HomeFolder/HomeContainer";
import HomeDiscussion from "./HomeFolder/HomeDiscussion";
import HomeFeed from "./HomeFolder/HomeFeed";
import HomeUser from "./HomeFolder/HomeUser";
import TopInput from "./HomeFolder/TopInput";
import Useroptions from "./HomeFolder/Useroptions";

function Home() {
  const { textColor } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const [postBtn, setPostBtn] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const postIt = async () => {
    if (!postBtn) return;
    setPostBtn(false);
    //const allFiles = document.querySelectorAll("img.prev");
    const text = document.querySelector(".text-area").value.trim().split("\n");
    const allImages = [];

    document.querySelector("#user-post .post").innerHTML =
      "<img src='/gif/loading.gif' />";
    //for (let file of allFiles) {
    //  const data = file.src;
    //  const Request = await fetch(
    //    `${API}/api/post/image?token=${localStorage.getItem("token")}`,
    //    {
    //      method: "POST",
    //      headers: { Accepts: "application/json", "Content-Type": "application/json" },
    //      body: JSON.stringify({ extension: file.dataset["ext"], data }),
    //    }
    //  );

    //  const res = await Request.json();
    //  if (!res.success) {
    //    alert("something went wrong");
    //    console.log(res.error);
    //    return;
    //  }

    //  allImages.push(res.link);
    //}

    await Request(text, allImages);
  };
  const clearImg = (id) => {
    const Div = document.getElementById(id);
    const fileInput = document.getElementById("file-input");
    const allImgsInPrev = document.querySelectorAll("div.prev").length;
    if (allImgsInPrev - 1 <= 0) setPostBtn(false);
    fileInput.value = "";
    Div.remove();
  };

  const previewImg = (fileInput) => {
    const validExtension = ["gif", "png", "jpg", "jpeg", "webp"];
    console.log(fileInput.files);
    const split = fileInput.files[0].name.split(".");
    const fileExtenstion = split[split.length - 1];
    const allPrevs = document.querySelectorAll("div.prev").length;
    if (allPrevs >= 6) {
      console.log("Maximum 6 files");

      return;
    }

    if (fileInput.files[0].size / 1000000 > 5) {
      console.log("Maximum file size: 5mb");
      return;
    }

    for (let i = 0; i < validExtension.length; i++) {
      if (validExtension[i] === fileExtenstion) {
        break;
      }

      if (i + 1 === validExtension.length) {
        console.log("Valid Extension: gif, png, jpg, jpeg, webp");
        return;
      }
    }
    const ID = "img-" + uuid();
    const imgPreviewer = document.querySelector(".img-previewer");

    const DivElem = document.createElement("div");
    DivElem.setAttribute("id", ID);
    DivElem.setAttribute("class", "prev col-md-6");

    const ImgElem = document.createElement("img");
    ImgElem.setAttribute("class", "prev");
    ImgElem.style.height = "170px";
    ImgElem.setAttribute("data-ext", fileExtenstion);
    ImgElem.src = "/gif/loading.gif";

    const CloseBtn = document.createElement("button");
    CloseBtn.addEventListener("click", () => clearImg(ID));
    CloseBtn.innerHTML = '<i class="fa-solid fa-xmark remove"></i>';

    DivElem.appendChild(ImgElem);
    DivElem.appendChild(CloseBtn);
    imgPreviewer.appendChild(DivElem);
    console.log(imgPreviewer);

    const fR_Display = new FileReader();
    fR_Display.readAsDataURL(fileInput.files[0]);
    fR_Display.onloadend = (e) => {
      const img = document.querySelector(`#${ID} img`);
      img.src = e.target.result;
      const scrollHeight = imgPreviewer.scrollHeight;
      imgPreviewer.scrollTo(0, scrollHeight);
      setPostBtn(true);
    };
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
    <div style={{ margin: "auto 17rem" }}>
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
                  backgroundImage: `url(${"https://media.licdn.com/dms/image/C5603AQERTD_EeJiGlA/profile-displayphoto-shrink_800_800/0/1661816468423?e=1686787200&v=beta&t=J5x0Fk6u_DyXGtgnQqh8vAjPXf1WLylDATD07O7NeMg"})`,
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
                {"Chaitanya Kumbhar"}
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
              <HomeUser />
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

          <Col className="p-3 py-4 d-flex flex-column gap-4">
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
