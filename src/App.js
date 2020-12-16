import './App.css';
import React, { useState, useEffect } from "react";
import story from "./assets/narration";
import Screen from "./Screen";
import Button from "./Button";
import "./assets/main.css"

function App() {
  const [ scene, setScene ] = useState({dialogue:["Loading..."], options: []});
  const [ options, setOptions ] = useState([]);
  const [ position, setPosition ] = useState(0);

  useEffect(() => {
    setScene(story.scenes[0]);
    setOptions(story.scenes[0].options);
  }, [])

  useEffect(() => {
    setScene(story.scenes[position]);
    setOptions(story.scenes[position].options);

  }, [position]);

  function handleOptionSelect(num) {
    setPosition(num);
  }

  return (
    <div className="App">
      <Screen display={scene.dialogue} />
      <div className="Options">
        {options.map((o) => <Button text={o.text} lambda={handleOptionSelect} goto={o.goto} />)}
      </div>
    </div>
  );
}

export default App;
