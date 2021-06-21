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
        <br />
        <Link to="/addfeed">
          <strong>Add More Subscription</strong>
        </Link>{" "}
        |
        <Link to="/showbookmark">
          <strong> Bookmarked</strong>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
