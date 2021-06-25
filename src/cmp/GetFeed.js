import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Api from "../Api";
import { useDispatch } from "react-redux";
import { Loading_True } from "../redux/index";
import { Loading_False } from "../redux/index";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function GetFeed(props) {
  const [getFeed, setGetFeed] = useState([]);
  const [activeLink, setActiveLink] = useState();
  const [activeNAV, setActiveNAV] = useState(false);
  const [emptyData, setEmptyData] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const openNav = () => {
    setActiveNAV(true);
  };

  const closeNav = () => {
    setActiveNAV(false);
  };

  useEffect(() => {
    dispatch(Loading_False());
    Api.getFeedTitle().then((response) => {
      if (response.data == "") {
        dispatch(Loading_True());
        setEmptyData(true);
      } else {
        setGetFeed(response.data);
        props.changeIds(response.data[0]?.id);
        setActiveLink(response.data[0]?.id);
      }
    });
  }, [location]);

  return (
    <>
      {emptyData ? (
        <>
          <div>
            <h2 className="emptyDataTitle">
              No link is added here , but it doesn't have to be! Add link below
            </h2>
            <br />
            <Link to="/addfeed" className="emptyDataButton ">
              Add link
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className={`sideNav ${activeNAV ? "activeNavBar" : ""}`}>
            <p className="sideNavTitle">Your Links Here</p>
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={closeNav}
            >
              &times;
            </a>
            {getFeed.map((ProductRecord) => {
              return (
                <div className="sidebarTitle">
                  <a
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
          <span className="menuLines" onClick={openNav}>
            &#9776;
          </span>
        </>
      )}
    </>
    // <>
    //   <div className="sideBar">
    //     {getFeed.map((ProductRecord) => {
    //       return (
    //         <div className="sidebarTitle">
    //           <a
    //             className={`feedTitle ${
    //               activeLink === ProductRecord.id ? "active" : ""
    //             }`}
    //             onClick={() => {
    //               props.changeIds(ProductRecord.id);
    //               setActiveLink(ProductRecord.id);
    //             }}
    //           >
    //             {ProductRecord.title}
    //           </a>
    //         </div>
    //       );
    //     })}{" "}
    //   </div>
    // </>
  );
}

export default GetFeed;
