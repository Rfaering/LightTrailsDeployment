import style from './Example.css';
import React from 'react';
import { TweenMax } from "gsap";

class ExampleVideo extends React.Component {
  constructor(props) {
    super(props);    
    this.state = { isPlaying: false };
  }  
  
  videoMouseEnter( e ){
    this.setState( { isPlaying: true } );
    var target = e.target;
      if( !this.state.isPlaying ){
        this.fadeOut( target, () => {      
        target.play();
        target.loop = true;
        this.fadeIn( target );
      } );
    }
  }

  fadeIn( target, callback ){
    TweenMax.to( target, 0.5, { opacity: 1 } );
  }

  fadeOut( target, callback ){
    TweenMax.to( target, 0.5, { opacity: 0, onComplete: callback } );    
  }

  render(){
    return <div className={style.item}>
                <video width="512" height="512" className="exampleVideo" src={this.props.video} poster={this.props.poster} onClick={ this.videoMouseEnter.bind(this) }/>
           </div>;
            
  }
}

export default ExampleVideo;