import React from "react";
const Button = (props) => {
    console.log("button props >>>>>> ", props)
    return (
        <button style={{ backgroundColor: props.bgColor === "" ? "black" : props.bgColor }} onClick={() => alert(props.message)}>
            {props.title}
        </button>
    )
}
export default Button