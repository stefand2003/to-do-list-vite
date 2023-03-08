import React from "react";
import "./container.scss";

export default function container({ children }) {
  return <div className="container"> {children} </div>;
}
