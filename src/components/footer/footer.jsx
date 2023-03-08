import React from "react";
import "./footer.scss";

export default function footer() {
  return (
    <div className="footer">
      <div className="footer__notification"> You have 4 pending tasks</div>
      <button type="button" className="footer__btn">
        Clear All
      </button>
    </div>
  );
}
