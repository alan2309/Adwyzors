import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import profImage from "../../../images/profImg.jpg";
import postImage from "../../../images/postImg.jpg";

const HomeFeedPost = ({ profImg = profImage, name = "Elon Musk", designation = "CEO of SpaceEx", postText = `You have to match the convenience of the gasoline car in order for people to buy an electric car." "In order to have clean air in cities, you have to go electric." "You should not show somebody something very cool and then not do it. At Tesla, any prototype that is shown to customers, the production must be better.`, postImg = postImage, postLikes, postComments }) => {
  return (
    <Container fluid className='p-0'>

      <Container fluid className='p-0 p-3 px-4'>

        <Container fluid className='p-0 my-2 mb-3 d-flex align-items-center justify-content-between col-darkGrey'>
          <div className='d-flex gap-3'>
            <div lg={2} className='p-0'>
              <img className='img-fluid' src={profImg} alt="" />
            </div>
            <div>
              <h2 className='fs-5 fw-bold'>{name}</h2>
              <div className='fs-6 fw-300'>{designation}</div>
            </div>
          </div>
          <div lg={1}>
            <i className="fa-solid fa-ellipsis-vertical fa-xl"></i>
          </div>
        </Container>


        <Container fluid className='p-0 fw-300'>
          <div className='text-wrap'>{postText}</div>
        </Container>
      </Container>
      <div>
        <img className='img-fluid' src={postImg} alt="" srcset="" />
      </div>
      <Container className='d-flex justify-content-between align-items-center gap-2 p-3 px-4'>
        <div className='d-flex gap-4 align-items-center'>
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
  )
}

export default HomeFeedPost