import React from 'react'
import HomeFeedPost from './HomeFeedPost'
import HomeContainer from './HomeContainer'

const HomeFeed = () => {
  return (
    <div className='d-flex flex-column gap-4'>
      <HomeContainer>
        <HomeFeedPost />
      </HomeContainer>
    </div>
  )
}

export default HomeFeed