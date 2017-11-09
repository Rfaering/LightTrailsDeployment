import React from 'react';
import ReactMarkdown from 'react-markdown';
import Text from './GetStarted.md';
import style from './GetStarted.css';
import Project from '../assets/images/walkthrough/Project.png';
import Details from '../assets/images/walkthrough/Details.png';
import Shader from '../assets/images/walkthrough/Shader.png';
import Particles from '../assets/images/walkthrough/Particles.png';
import Recorder from '../assets/images/walkthrough/Recorder.png';

class GetStarted extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    var text = Text;
    return <div className={style.mainText}>
       <ReactMarkdown className="started" source={Text} />
    </div>;
  }

}

export default GetStarted;