import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Api from "../Api";

export default function Otp() {
  const [mobile_number, setMobile_number] = useState("");
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      mobile_number,
    };
    Api.postOtp(data).then((response) => {
      history.push({
        pathname: "/verify",
        state: {
          mobile_data: response.data.mobile_number,
          hash: response.data.hash,
          value: true,
        },
      });
    });
  };

  return (
    <div className="outer">
      <div className="inner">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>

          <div class="form-group  ">
            <label for="name">Mobile Number :</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setMobile_number(e.target.value)}
              class="form-control registerInputField"
              placeholder="Mobile Number "
            />
          </div>
          <button
            type="Submit"
            className="btn btn-dark btn-lg btn-block registerButton"
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
}
