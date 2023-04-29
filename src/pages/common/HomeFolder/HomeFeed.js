import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../../axios";
import { AuthContext } from "../../../context/AuthContext";
import HomeContainer from "./HomeContainer";
import HomeFeedPost from "./HomeFeedPost";

const HomeFeed = () => {
  const [postData, setPostData] = useState([]);
  const { user } = useContext(AuthContext);
  const getPost = async () => {
    const res = await axiosInstance.get("/posts/timeline/" + user?._id);

    if (res) {
      setPostData(res.data);
    }
  };
  useEffect(() => {
    getPost();

    return () => {};
  }, []);

  return (
    <div className="d-flex flex-column gap-4">
      {postData.length > 0 &&
        postData.map((post, index) => {
          return (
            <HomeContainer key={index}>
              <HomeFeedPost
                profilePicture={post.user.profilePicture}
                fname={post.user.fname}
                lname={post.user.lname}
                profileDesc={post.user.desc}
                postComments={post.postComments}
                postLikes={post.likes}
                desc={post.desc}
                postImg={post.img}
                profImg={post.profImg}
              />
            </HomeContainer>
          );
        })}
    </div>
  );
};

export default HomeFeed;
