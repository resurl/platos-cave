import React from "react";

const Button = (props) => {
    const { text, goto, lambda } = props;

    function handleClick() {
        lambda(goto)
    }

    return (
        <button onClick={handleClick}
                style={{
                        backgroundColor: "white",
                        color: "black",
                        height: "100px",
                        width: "100px"
                    }}>
            {text}
        </button>
    );
}

export default Button;
