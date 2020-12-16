import React from "react";

const Button = (props) => {
    const { text, goto, lambda } = props;

    function handleClick() {
        lambda(goto)
    }

    return (
        <button onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button;
