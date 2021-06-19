import React, { useEffect, useState } from "react";
import Api from "../Api";

function ShowBookmark() {
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    Api.getBookmarkData().then((response) => {
      setBookmark(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Bookmarks</h1>
      {bookmark?.map((data) => {
        return (
          <>
            <div className="feedData">
              {data.articleLink} <br />
              <a href={data.articleName} target="_blank" class="button">
                Read
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ShowBookmark;
