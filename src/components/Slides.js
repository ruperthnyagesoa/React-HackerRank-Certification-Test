import React from "react";
import { useState } from "react";
function Slides({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  function slidesNextHandler() {
    console.log("next clicked");
    setCurrent(current === length - 1 ? length - 1 : current + 1);
  }

  function slidesPrevHandler() {
    console.log("prev clicked");
    setCurrent(current === 0 ? 0 : current - 1);
  }

  function restartHandler() {
    setCurrent(0);
  }

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={restartHandler}
          disabled={current === 0}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={slidesPrevHandler}
          disabled={current === 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={slidesNextHandler}
          disabled={current === length - 1}
        >
          Next
        </button>
      </div>
      {slides.map(function (s, index) {
        return (
          <div key={index}>
            {index === current && (
              <div id="slide" className="card text-center">
                <h1 data-testid="title">{s.title}</h1>
                <p data-testid="text">{s.text}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slides;
