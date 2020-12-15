import React, { useState, useEffect } from "react";

const Button = (props) => {
    const { text, lambda } = props;

    return (
        <button onClick={lambda}>
            {text}
        </button>
    );
}

export default Button;
