import Message from "../msg";
import ListGroup from "../ListGroup";
import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "Waterloo"];
  let [x] = useState(true);
  x = false;
  if (x == true) {
    return (
      <div>
        <Message />
      </div>
    );
  }
  return (
    <div id="divedit">
      <ListGroup />
    </div>
  );
}
export default App;
