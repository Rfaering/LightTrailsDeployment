import React from 'react';
import style from './Example.css';
import ExampleVideo from './ExampleVideo.jsx';

import Dragon from '../assets/images/Dragon.png';
import DragonVideo from '../assets/videos/Dragon.MP4';

import Fire from '../assets/images/Fire.png';
import FireVideo from '../assets/videos/Fire.mp4';

import Love from '../assets/images/Love.png';
import LoveVideo from '../assets/videos/Love.mp4';

import Fireworks from '../assets/images/Fireworks.png';
import FireworksVideo from '../assets/videos/Fireworks.mp4';

class ExampleGrid extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return <div className={style.container}>
              <div className={style.item}>
                <ExampleVideo video={DragonVideo} poster={Dragon}/>
                <ExampleVideo video={FireVideo} poster={Fire}/>                
              </div>
              <div className={style.item}>
                <ExampleVideo video={LoveVideo} poster={Love}/>
                <ExampleVideo video={FireworksVideo} poster={Fireworks}/>                
              </div>              
            </div>;
  }
}

export default ExampleGrid;