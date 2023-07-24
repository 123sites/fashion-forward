import React from "react";
import "../../assets/style.css";
const stripe = () => {
  return (
    <div className="container col-10 mt-4">
      <div className="row shadow-lg donate-container">
        <div className="donate-title-box">
          <p className="col-12 donate-title d-flex mb-2 fw-bolder fs-1">
            Type message here ///////////////////////////////
          </p>
        </div>
        <div className="row col-12">
          <h5 className="mt-4 mb-4 fw-bolder fs-3 text-center">
            {/* Add icon and message here. */}
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center,",
          }}
        >
          {/* Add image here */}
        </div>
        <div className="mb-3 text-center">
          <a
            href="https://buy.stripe.com/test_6oEg1m8Ly2ES81y288"
            className="stripe-donate fs-3 mt-4 fw-bolder text-center"
          >
            message here
          </a>
        </div>
        <div className="mb-3 text-center">
          <a
            href="https://buy.stripe.com/test_fZe5mId1O93g0z66op"
            className="stripe-donate col fs-3 fw-bolder justify-content-center"
          >
            Message here
          </a>
        </div>
        <div className="mb-4 text=center">
          <a
            href="https://buy.stripe.com/test_5kA8yUbXK1AO95CeUW"
            className="stripe-donate d-flex fs-3 fw-bolder"
          >
            Message here...
          </a>
        </div>
      </div>
    </div>
  );
};
export default stripe;
