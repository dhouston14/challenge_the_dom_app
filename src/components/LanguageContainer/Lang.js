import React, { Component } from 'react';
// import {BrowserRouter as Route} from 'react-router-dom';
// import Questions from '../QuestionsContainer/QuestionsContainer.js';
import './LanguageContainer.css';
import '../App/App.css'

class Lang extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: this.props.location.state.langSelected
    }
  }

  whatLanguage(lit) {
  lit.preventDefault();
}

  newRedirect() {
   window.location = '/go_home_roger';
   alert("Thanks for your answer. Check back for Correct Answers Later today!");
 }

  render() {
    return (
      <div>
        <h3> {this.state.language.name} Questions </h3>

        <form onSubmit={this.whatLangauge}>
          <p> {this.state.language.question1}</p>
          <p> {this.state.language.question2}</p>
          <p> {this.state.language.question3}</p>
          <p> {this.state.language.question4}</p>
          <p> {this.state.language.question5}</p>
            <textarea id="user_answers" type="text" placeholder="Enter Answer" ></textarea>
        </form>

        <br/>
        <input id="enter" type="submit" value="Submit" onClick={this.newRedirect}/>

      </div>

    )
  }
}

export default Lang;
