import React from "react";
import { useParams } from "react-router";

function Profile() {
  const { username } = useParams();

  return <div>Profile</div>;
}

export default Profile;
