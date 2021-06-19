import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function Welcome() {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <Typewriter
          options={{
            strings: [
              "Welcome to the RSS Reader 😍",
              "Retrieve the latest headlines from your favorite sites 🔥",
              "Download RSS Feeds from other sites to display the updated news here ✨",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        {/* <h1>
          <strong>Welcome to the RSS Reader</strong>
        </h1> */}
        <br />
        <Link to="/about">
          <strong>Add More Subscription</strong>
        </Link>{" "}
        |
        <Link to="/about">
          <strong> Bookmarked</strong>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
