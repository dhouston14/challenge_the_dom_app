import React, { Component } from 'react';
import {BrowserRouter as Route} from 'react-router-dom';
import Questions from '../QuestionsContainer/QuestionsContainer.js';

class Lang extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: this.props.location.state.langSelected
    }
  }

  newRedirect() {
    // <Redirect to="/go_home_roger" />
   window.location = '/home';
   alert("Thanks for your answer. Check back for Correct Answers Later today!");
 }

  render() {
    return (
      <div>
        <h3> {this.state.language.name} Questions </h3>
        <Questions />
        <Route>
          <input type="submit" value="Submit" onClick={this.newRedirect}/>
        </Route>
      </div>
    )
  }
}

export default Lang;
