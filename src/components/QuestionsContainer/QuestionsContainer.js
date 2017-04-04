import React, { Component } from 'react';
// import Lang from '../LanguageContainer/Lang';
import './QuestionsContainer.css';

class Questions extends Component {
  constructor() {
    super()
    this.state = {
      random: "new New",
      html: "What is HTML",
      css: "What is CSS?",
      javascript: "What is Javascript?",
      java: "What is Java?",
      ruby: "What is Ruby?"
    }
  }

  whatLanguage(lit) {
  lit.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.whatLangauge}>
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
        </form>
      </div>

    )
  }
}

// <button onClick={() => this.props.addItem(item)}>+</button>

export default Questions;
