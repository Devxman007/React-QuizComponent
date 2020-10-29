import React, { Component } from "react";

class QuizQuestionButton extends Component {
  render() {
    return (
      <li>
       <button>{this.props.button_text[0]}</button>
      </li>
    );
  }
}
export default QuizQuestionButton;
