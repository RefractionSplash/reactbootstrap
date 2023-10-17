import { useState } from "react";
function Button() {
  let [x, y] = useState(localStorage.getItem("React App State"));
  function counter() {
    y(parseInt(x) + 1);
    localStorage.setItem("React App State", x + 1);
  }
  return (
    <div className="alert alert-warning" role="alert">
      This Website Is Currently Under Development.{"\n"}
      <a href="https://www.google.com" className="alert-link">
        Click Here{"\n"}
      </a>
      To Learn More.{"\n"}
      <span
        id="wb"
        onClick={counter}
        className="badge badge-pill badge-secondary"
      >
        {x}
      </span>
    </div>
  );
}

export default Button;
