import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Api from "../Api";

function GetFeed(props) {
  const [getFeed, setGetFeed] = useState([]);
  const [activeLink, setActiveLink] = useState();

  useEffect(() => {
    Api.getFeedTitle().then((response) => {
      setGetFeed(response.data);
      props.changeIds(response.data[0].id);
      setActiveLink(response.data[0].id);
    });
  }, []);

  return (
    <>
      <div className="sideBar">
        {getFeed.map((ProductRecord) => {
          return (
            <div className="sidebarTitle">
              <a
                // className="feedTitle"
                className={`feedTitle ${
                  activeLink === ProductRecord.id ? "active" : ""
                }`}
                onClick={() => {
                  props.changeIds(ProductRecord.id);
                  setActiveLink(ProductRecord.id);
                }}
              >
                {ProductRecord.title}
              </a>
            </div>
          );
        })}{" "}
      </div>
    </>
  );
}

export default GetFeed;
