import React from "react";
import preloader from "../../assets/image/spinner.svg";

const Spinner = () => (
  <div style={{ backgroundColor: "white" }}>
    <img src={preloader} />
  </div>
);

export default Spinner;
