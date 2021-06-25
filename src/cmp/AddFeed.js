import React, { useState } from "react";
import "../App.css";
import Api from "../Api";
import { useHistory } from "react-router-dom";

function AddFeed() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      url,
    };
    Api.postFeed(data).then((response) => {
      history.push("/feed");
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="box">
          <h1>Add Feeds Here</h1>
          <form onSubmit={onFormSubmit}>
            <div className="inputBox">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoComplete="off"
              />
              <label>Feed Name</label>
            </div>
            <div className="inputBox">
              <input
                type="text"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                autoComplete="off"
              />
              <label>Feed URL</label>
            </div>
            <input type="submit" value="Add" className="addFeedButton" />
          </form>
        </div>
      </div>
    </>
  );
}

export default AddFeed;
