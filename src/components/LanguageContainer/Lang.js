import React, { Component } from 'react';
import Questions from '../QuestionsContainer/QuestionsContainer.js';

class Lang extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: this.props.location.state.langSelected
    }
  }
  render() {
    return (
      <div>
        <h3> {this.state.language.name} Questions </h3>
        <Questions />
      </div>
    )
  }
}

export default Lang;
