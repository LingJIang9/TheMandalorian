import "./Introduction.css";
import { Component } from "react";

class IntroductionData extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <div className="introduction1">
        <div className="left-text">
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="right-img">
          <img src={this.props.image1} alt="img"></img>
          <img src={this.props.image2} alt="img"></img>
        </div>
      </div>
    );
  }
}

export default IntroductionData;
