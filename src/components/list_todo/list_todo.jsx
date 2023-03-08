import React from "react";
import "./list_todo.scss";

export default function list_todo() {
  return (
    <div className="ListToDo">
      <div className="ListToDo__row">
        <div className="ListToDo__item">Buy New Laptop</div>
        <div className="ListToDo__delete">Del</div>
      </div>

      <div className="ListToDo__row">
        <div className="ListToDo__item">Return library books</div>
        <div className="ListToDo__delete">Del</div>
      </div>

      <div className="ListToDo__row">
        <div className="ListToDo__item">Chemistry Exam on Tuesday</div>
        <div className="ListToDo__delete">Del</div>
      </div>

      <div className="ListToDo__row">
        <div className="ListToDo__item">Call doctors</div>
        <div className="ListToDo__delete">Del</div>
      </div>
    </div>
  );
}
