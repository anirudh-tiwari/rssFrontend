import React, { useEffect, useState } from "react";
import Api from "../Api";
import Typewriter from "typewriter-effect";

function ShowBookmark() {
  const [bookmark, setBookmark] = useState([]);
  const [emptyBookmark, setEmptyBookmark] = useState(false);

  useEffect(() => {
    Api.getBookmarkData().then((response) => {
      if (response.data == "") {
        setEmptyBookmark(true);
      } else {
        setBookmark(response.data);
      }
    });
  }, []);

  return (
    <>
      {emptyBookmark ? (
        <div className="bookmarkContainer">
          <h2 className="emptyBookmarkTitle">No Bookmark is added here</h2>
        </div>
      ) : (
        <>
          <div className="bookmark">
            <div className="bookmarkStyles">
              <Typewriter
                options={{
                  strings: ["Bookmarks 🔖"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            {bookmark.map((data) => {
              return (
                <>
                  <div className="bookmarkData">
                    {data.articleLink} <br />
                    <a href={data.articleName} target="_blank" class="button">
                      Read
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default ShowBookmark;
