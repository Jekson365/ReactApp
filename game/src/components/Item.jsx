import React from "react";
import $ from "jquery";

export const Item = () => {
  const handleToggleSlide = (event) => {
    console.log($(this).children());
  };
  return (
    <div className="box">
      <div className="question">
        <p id="q">this is question</p>
        <button className="btn btn-danger" id="show" onClick={handleToggleSlide}>
          Show Answer
        </button>
      </div>
      <div className="answer-collapse">
        <p id="ans">This is answer</p>
      </div>
    </div>
  );
};
