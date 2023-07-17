import React from "react";

// function component
// const Input = (props) => {
// const Input = ({ type, title, placeholder, value, onChange }) => {
//     return (
//         <div>
//             {/* props */}
//             {/* <p>{props.title} :- </p>
//             <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} /> */}
//             <p>{title} :- </p>
//             <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
//         </div>
//     )
// }
// export default Input

// class component


class Input extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <input type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}/>
            </div>
        )
    }
}
export default Input