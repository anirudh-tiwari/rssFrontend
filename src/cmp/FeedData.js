import React, { useEffect, useState } from "react";
import Api from "../Api";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Loader from "./Loader";

function FeedData(props) {
  const [getFeedData, setGetFeedData] = useState([]);
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    if (props.selectedLink) {
      Api.getFeedData(props.selectedLink).then((response) => {
        setGetFeedData(response.data);
        setLoading(false);
      });
    }
  }, [props]);

  const bookmark = (articleLink, articleName) => {
    const data = {
      articleLink,
      articleName,
    };
    Api.addBookmarkData(data).then((response) => {
      history.push("/showbookmark");
      // history.push({
      //   pathname: '/showbookmark',
      //   state: { BookmarkData: types }
      // });
      // setGetFeedData(response.data);
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {getFeedData.map((data) => {
            return (
              <>
                <div className="feedData">
                  {data.title} <br />
                  <a href={data.link} target="_blank" class="button">
                    Read
                  </a>
                  <Link
                    onClick={() => bookmark(data.title, data.link)}
                    className="bookmarkButton"
                  >
                    Bookmark
                  </Link>
                </div>
              </>
            );
          })}
        </>
      )}
    </>
  );
}

export default FeedData;
