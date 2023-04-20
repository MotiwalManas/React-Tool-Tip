import React from "react";

class Tooltip extends React.Component {
  pos = () => {
    return `${this.props.position}`;
  };
  render() {
    return (
      <div className={`${this.pos()}`}>
        thankx for hovering"{this.props.position}" position!
      </div>
    );
  }
}

export default Tooltip;
