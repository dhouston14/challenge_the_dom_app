import React, { Component } from 'react';
import './QuestionsContainer.css';

class Questions extends Component {
  constructor() {
    super()
    this.state = {
      html: "What is HTML?",
      css: "What is CSS?",
      javascript: "What is Javascript?",
      java: "What is Java?",
      ruby: "What is Ruby?"
    }
  }
  render() {
    return (
      <div>
        <form>
          <p> {this.state.html}</p>
            <input id="user_answers" type="text" placeholder="Enter Answer" ></input>
          <p> {this.state.css}</p>
            <input id="user_answers" type="text" placeholder="Enter Answer" ></input>
          <p> {this.state.javascript}</p>
            <input id="user_answers" type="text" placeholder="Enter Answer" ></input>
          <p> {this.state.java}</p>
            <input id="user_answers" type="text" placeholder="Enter Answer" ></input>
          <p> {this.state.ruby}</p>
            <input id="user_answers" type="text" placeholder="Enter Answer" ></input>

            <br/>
            <br/>

          <button type="submit">Done?</button>

        </form>
      </div>

    )
  }
}

// <button onClick={() => this.props.addItem(item)}>+</button>

export default Questions;
