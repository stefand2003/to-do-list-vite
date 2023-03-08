import React from "react";
import "./create.scss";

export default function create({ children }) {
  return (
    <div className="create">
      <p className="create__para">Add Your New ToDo</p>
      <button type="button" className="create__btn">
        +
      </button>
    </div>
  );
}
