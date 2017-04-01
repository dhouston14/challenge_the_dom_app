import React, { Component } from 'react';
// import QuestionsContainer from '../QuestionsContainer/QuestionsContainer.js';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import LanguageContainer from '../LanguageContainer/LanguageContainer';
import Lang from '../LanguageContainer/Lang';

class Dom extends Component {
  constructor() {
    super()
    this.state = {
      languageOptions: [
        {name: "HTML", symbol: 'HTML'},
        {name: "CSS", symbol: 'CSS'},
        {name: "JavaScript", symbol: 'JavaScript'},
        {name: "Java", symbol: 'Java'},
        {name: "Ruby", symbol: 'Ruby'}
        // {name: "Python"}
      ]
    }
  }

  render() {
    return (
      <Router>
      <div>

      <h2> Welcome to Challenge the DOM </h2>
      <h5> Where you can learn, educate, or whatever </h5>

        <main>

          <nav>
            <Link to="/go_home_roger">Home</Link> || <Link to="/its_about_us">About</Link> || <Link to="/contact_me">Contact me!</Link>
          </nav>

          <Route path="/*" render={() => <LanguageContainer languageOptions={this.state.languageOptions} /> }/>
          <Route path="/*" render={() => {return <Redirect to="/go_home_roger" /> }} />
          <Route path="/go_home_roger" render={() => {
            return (
              <p>
                Above you can choose you daily code challenge created by Dom.
                I would suggest starting with the first language as each topic
                becomes progressively more difficult.
              </p>
              )
            }}/>
          <Route path="/go_home_roger/:name" component={Lang}/>
          <Route path="/its_about_us" component={About}/>
          <Route path="/contact_me" component={Contact}/>

          <h5>
            Many Thanks,
            Dominick
          </h5>

        </main>

      </div>
    </Router>
    )
  }
}

//
// <Route path="/go_home_roger" render={() => {return (<App />)}}/>


export default Dom;
