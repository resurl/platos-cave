import React from "react";

const Screen = (props) => {
    const { display } = props; 

    return (
        <div className="Screen">
            {display.map((line) => <p>{line}</p>)}
        </div>
    );
}

export default Screen;