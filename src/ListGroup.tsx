import React from "react";
import { useState } from "react";
import Button from "./components/banner";

function ListGroup() {
  return (
    <>
      <div className="container">
        <h1>Test Website</h1>
        <Button />
        <div className="form-check form-switch">
          <input
            value={1}
            name="button"
            className="form-check-input"
            data-toggle="fire"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          ></input>
          <label
            id="nosel"
            className="form-check-label"
            for="flexSwitchCheckDefault"
          >
            Dark Mode
          </label>
        </div>
      </div>
    </>
  );
}

export default ListGroup;
