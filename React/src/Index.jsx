import React from 'react';
import ReactDOM from 'react-dom';
import style from './reset.css';

import { HashRouter, Route, Link } from 'react-router-dom';
import Header from './Header/Header.jsx';

import Main from './Main/Main.jsx';
import Donate from './Donate/Donate.jsx';
import ReleaseNotes from './ReleaseNotes/ReleaseNotes.jsx';
import Contact from './Contact/Contact.jsx';
import GetStarted from './GetStarted/GetStarted.jsx';

class App extends React.Component {
  render () {
    return (
      <HashRouter>
      <div>        
        <Header/>        
        <Route exact path="/" component={Main}/>
        <Route path="/donate" component={Donate}/>
        <Route path="/releasenotes" component={ReleaseNotes}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/walkthrough" component={GetStarted}/>
      </div>
      </HashRouter>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
);
