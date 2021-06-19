import React, { useState } from "react";
import GetFeed from "./GetFeed";
import FeedData from "./FeedData";
import Welcome from "./Welcome";

function Feed() {
  const [selectedLink, setSelectedLink] = useState(null);

  return (
    <>
      <Welcome />
      <div className="gridLayout">
        <div>
          <GetFeed changeIds={setSelectedLink} />
        </div>
        <div>
          <FeedData selectedLink={selectedLink} />
        </div>
      </div>
    </>
  );
}

export default Feed;
