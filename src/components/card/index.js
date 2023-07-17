import React from "react";
class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: "iSkillers"
        }
    }
    render() {
        console.log("card props data >>>>, ", this.props)
        // console.log("card  state data >>>>, ", this.state.fullName)
        return (
            <div style={{ border: "1px solid red" }}>
                <p>{this.props.fullName}</p>
                <div style={{border:"2px solid green"}}>
                   {this.props.children}
                </div>
            </div>
        )
    }
}
export default Card