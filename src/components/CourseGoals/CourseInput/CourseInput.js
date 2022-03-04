import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isVAlid, setIsVAlid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim() != "") {
      setIsVAlid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim() == "") {
      setIsVAlid(false);
    } else {
      props.onAddGoal(enteredValue);
    }
  };
  //another working method
  // let classes = "form-control";
  // if (!isVAlid) {
  //   classes += " invalid";
  // }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isVAlid ? `invalid` : ``}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
