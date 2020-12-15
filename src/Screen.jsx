import React from "react";

const Screen = (props) => {
    const { display } = props; 
    let lines = [];
    
    async function delayedDisplay() {
        await Promise.all(display.forEach((t) => appendLine(t, lines)))
        return lines
    }

    async function appendLine(text, arr) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>resolve(arr.push(text)), 1000);
        });
    }

    return (
        <div className="Screen">
            {display.join(" ")}
        </div>
    );
}

export default Screen;