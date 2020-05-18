import React from "react";

import "./CustomBtn.scss";

const CustomBtn = ({ value, type, googleBtn }) => (
  <button className={`${googleBtn ? "googleBtn" : ""} btn`} type={type}>
    {value}
  </button>
);

export default CustomBtn;
