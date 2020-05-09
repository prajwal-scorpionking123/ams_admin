import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className={className}>{children}</div>
  </div>
);

export default Base;
