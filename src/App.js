import './App.css';
import React, { useState, useEffect } from "react";
import story from "./assets/narration";
import Button from "./Button";

function App() {
  const [line, setCurrLine] = useState("");
  const [scene, setScene] = useState({dialogue:["hi"], options: [{text:"no", goto: 1}]});
  const [buttons, setButtons] = useState([]);
  const [buttonjsx, setBJsx] = useState([]);
  const [position, setPosition] = useState(0);
  
  useEffect(()=>{
    if (scene) {
      setCurrLine(scene.dialogue[0]);
      setButtons(scene.options);
      console.log(line)
      console.log(buttons)
    }
  }, [scene]);

  useEffect(()=> {
    setScene(story.scenes[position]);
  }, [position]);

  useEffect(()=> {
    console.log("buttons")
    let jsx = [];
    for (let i = 0; i < buttons.length; i++) {
      let butt = <Button lambda={setPosition(buttons[i].goto)} 
                         text={buttons[i].text}/>
      jsx.push(butt);
    }
    setBJsx(jsx);
  }, [buttons]);

  return (
    <div className="App">
      <div className="container">
        <div className="container__dialogue">
          {line}
        </div>
        <div className="container__options">
          {buttonjsx}
        </div>
      </div>
    </div>
  );
}

export default App;
