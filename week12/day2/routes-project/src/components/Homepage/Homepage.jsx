import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ user }) => {
  const bookInfo = { name: "Art Of War" };
  return (
    <div>
      <h1>Homepage</h1>
      <h1>Welcome {user}</h1>
      <Link to="/account" state={bookInfo}>
        Go To Account With Book Info
      </Link>
    </div>
  );
};

export default Homepage;
