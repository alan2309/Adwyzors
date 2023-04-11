import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import profImage from "../../../images/profImg.jpg";
import postImage from "../../../images/postImg.jpg";

const HomeFeedPost = ({ profImg = profImage, name = "Elon Musk", designation = "CEO of SpaceEx", postText = `You have to match the convenience of the gasoline car in order for people to buy an electric car." "In order to have clean air in cities, you have to go electric." "You should not show somebody something very cool and then not do it. At Tesla, any prototype that is shown to customers, the production must be better.`, postImg = postImage, postLikes, postComments }) => {
  return (
    <Container fluid className='p-0'>

      <Container fluid className='p-0 p-3 px-4'>

        <Container fluid className='p-0 my-2 mb-3'>
          <div className='d-flex gap-3'>
            <div lg={2} className='p-0'>
              <img className='img-fluid' src={profImg} alt="" />
            </div>
            <div>
              <h3 className='fs-5'>{name}</h3>
              <h6 className='fs-6'>{designation}</h6>
            </div>
          </div>
          <div lg={1}>

          </div>
        </Container>


        <Container fluid className='p-0'>
          <div className='text-wrap'>{postText}</div>
        </Container>
      </Container>
      <div>
        <img className='img-fluid' src={postImg} alt="" srcset="" />
      </div>
      <Container>



      </Container>
    </Container>
  )
}

export default HomeFeedPost