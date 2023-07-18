import React from "react";
class ClassComCard extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "green",
    };
  }

  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({ color: this.props.color });
  //     }, 2000);
  //   }
  //   static getDerivedStateFromProps(props, state) {
  //     return { color: props.color };
  //   }
  //   shouldComponentUpdate() {
  //     return true;
  //   }

  componentWillUnmount() {
    alert("component deleted");
  }
  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>Class component</h1>
        <button onClick={() => this.setState({ color: "red" })}>Update</button>
      </div>
    );
  }
}
export default ClassComCard;
