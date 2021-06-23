import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function ProtectedRoute(props) {
  console.log(props.cmp);
  let Cmp = props.cmp;
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/");
    }
  }, []);
  return (
    <>
      <Cmp />
    </>
  );
}

export default ProtectedRoute;
