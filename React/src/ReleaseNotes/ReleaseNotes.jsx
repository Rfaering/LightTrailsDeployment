import React from 'react';
import ReactMarkdown from 'react-markdown';
import Text from './Input.md';
import style from './ReleaseNotes.css';

class ReleaseNotes extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    var text = Text;
    return <div className={style.mainText}>
       <ReactMarkdown source={Text} />
    </div>;
  }

}

export default ReleaseNotes;