import React, { useEffect, useState } from "react";
import Api from "../Api";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loading_True } from "../redux/index";
import Popup from "./Popup";

function FeedData(props) {
  const [getFeedData, setGetFeedData] = useState([]);
  const [popupState, setPopupState] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (props.selectedLink) {
      Api.getFeedData(props.selectedLink).then((response) => {
        setGetFeedData(response.data);
        dispatch(Loading_True());
      });
    }
  }, [props]);

  const bookmark = (articleLink, articleName) => {
    debugger;
    const data = {
      articleLink,
      articleName,
    };
    Api.addBookmarkData(data).then((response) => {
      setPopupState(true);
    });
  };

  return (
    <>
      <div>
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
      </div>
      {popupState ? <Popup /> : null}
    </>
  );
}

export default FeedData;
