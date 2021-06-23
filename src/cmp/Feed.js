import React, { useState } from "react";
import GetFeed from "./GetFeed";
import FeedData from "./FeedData";
import Welcome from "./Welcome";
import { useSelector } from "react-redux";
import Loader from "./Loader";

function Feed() {
  const [selectedLink, setSelectedLink] = useState(null);
  const loading = useSelector((state) => state.value);
  const displayElements = useSelector((state) => state.displayElement);

  return (
    <>
      {loading && <Loader />}
      <div style={{ display: displayElements }}>
        <Welcome />
        {/* <div className="gridLayout"> */}
        <div>
          <div>
            <GetFeed changeIds={setSelectedLink} />
          </div>
          <div>
            <FeedData selectedLink={selectedLink} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
