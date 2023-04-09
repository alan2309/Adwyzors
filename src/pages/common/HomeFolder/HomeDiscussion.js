import React from 'react'
import { Container } from 'react-bootstrap'

const HomeDiscussion = () => {

  const discussPosts = [
    { title: "CA", totalPosts: 19295, userImgs: [] },
    { title: "Finance", totalPosts: 26254, userImgs: [] },
    { title: "31stMarch", totalPosts: 1987254, userImgs: [] },
  ];

  return (
    <Container className='p-4'>
      <h5 className='fw-700'>Join Discussion</h5>

      <div className='d-flex flex-column gap-3 mt-4'>
        {
          discussPosts.map((item, key) => (
            <div className='d-flex align-items-center justify-content-between' key={key}>
              <div>
                <div className='fs-5 fw-700'>#{item.title}</div>
                <div className='lead fs-6'>{(parseInt(item.totalPosts)).toLocaleString("en-US")} {parseInt(item.totalPosts) > 1 ? "posts" : "post"}</div>
              </div>
              <div></div>
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default HomeDiscussion