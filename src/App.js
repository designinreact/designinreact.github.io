import React, { Component } from 'react';
import { TinyLetter } from 'react-tinyletter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <div className="mw7 pa3 tl tc-ns center menlo white">
          <img className="mt5 mb5" src="logo.svg"/>
          <div className="mb5">
            <h1 className="sans-serif f1-lg f2 mb2">Bring your designs to life</h1>
            <div className="o-40 lh-copy">A mini course on designing interfaces with React.js</div>
          </div>
          <p className="copy lh-copy">
            The course will be released later this year. <br className="db-ns dn"/>
            If you want to stay in the loop enter your email below.
          </p>


          <TinyLetter list="designinreact">
            <input className="input-gray f6 f5-ns w-50-ns w-60 menlo" placeholder="Email Address" />
            <input className="btn-pink ml2" type="submit" value="Subscribe" />
          </TinyLetter>
        </div>
      </div>
    );
  }
}

export default App;
