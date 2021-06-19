import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Api from "../Api";
import { Link } from "react-router-dom";
import FeedData from "./FeedData";

function GetFeed(props) {
  const [getFeed, setGetFeed] = useState([]);
  const [changeId, setChangeId] = useState("");

  useEffect(() => {
    Api.getFeedTitle().then((response) => {
      debugger;
      setGetFeed(response.data);
      props.changeIds(response.data[0].id);
    });
  }, []);

  return (
    <div className="sideBar">
      {getFeed.map((ProductRecord) => {
        return (
          <div className="sidebarTitle">
            <a
              className="feedTitle"
              onClick={() => {
                props.changeIds(ProductRecord.id);
              }}
            >
              {ProductRecord.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default GetFeed;
