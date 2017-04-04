import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import Lang from '../LanguageContainer/Lang';
import './LanguageContainer.css';


class Langauges extends Component {
  render() {
  let languageOptions = this.props.languageOptions.map((lang, id) => {
    let pathname = `/go_home_roger/${lang.symbol}`
    return <li key={id}>
            {lang.name}
            (<Link to={{pathname, state: {langSelected: lang}}}>{lang.symbol}</Link>)
          </li>
      })
      return (
        <div>
          <h3> Languages </h3>
            <ul>
              {languageOptions}
            </ul>
        </div>
      )
    }
  }

  // (<Link to={{ path, state: {selectedStock: stock}}}>
  //   </Link>)
  //
export default Langauges;
