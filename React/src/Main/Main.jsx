import React from 'react';
import test from './Main.css'
import style from './Main.css';
import video from '../assets/videos/background.MP4';
import ExampleGrid from './ExampleGrid.jsx';
import Beta from '../assets/images/Beta.png';
import Image from '../assets/images/Image.png';
import Presentation from '../assets/images/Presentation.png';
import Webpage from '../assets/images/Webpage.png';
import Markdown from './Markdown.css';
import { Link } from 'react-router-dom';
import Test from '../assets/Images/Test2.png'

class Main extends React.Component {
  constructor(props) {
    super(props);    
  }

  renderSectionHeadline( img, text ){
    return <div className={style.sectionTitleContainer}>
              <img src={img} className={style.sectionTitleIcon}/><span className={style.sectionTitleText}> {text} </span>
           </div>;
  }

  renderSection( image, title, primary, secondary ){
    return <div style={{flexGrow: 1, margin: 30, fontFamily: 'Raleway', fontSize: 24}}>      
      { this.renderSectionHeadline( image, title ) }
      <hr/>
      <div style={{fontSize: 18, marginBottom: 15, marginTop: 15}}>
      { primary }      
      </div>

      <div style={{fontSize: 18}}>
      { secondary }      
      </div>
    </div>;
  }

  render() {        
    return (
      <main  style={{ width: '100%', display: 'block' }}>
        <div style={{ width: '100%', display: 'block' }}>
        
          <div className={style.presentationArea}>
                <div style={{backgroundImage: "url(" + Test + ")", backgroundSize: 'Cover',width: '100%', height: '100%', borderWidth: '0px 0px', borderStyle: 'solid', borderColor: '#00495a73'}}>
                  <div className={style.presentationContainer}>
                    <h1 className={style.presentaionTitle}>Bring life to your static images with Light Trails</h1>
                                
                    <div className={style.presentationLinkContainer}>
                      <a href="./software/LightTrails.msi">
                          <div className={ style.presentationLink }>
                              Download Now
                          </div>
                      </a>
                    
                      <Link to="walkthrough"><div style={{backgroundColor: '#3f3fbd'}} className={style.presentationLink}>Getting Started</div></Link>
                    </div>
                  </div>
                </div>
                
                <img src={Beta} style={{position: 'absolute', left: 0, top: 0, width: 150}}/>

                <video src={video} style={ { left: 0, top: 0, width: '100%', height: '100%', position: 'absolute', zIndex: '-1' } } autoPlay loop/>                
            </div>

            <div style={{display: 'flex', marginLeft: '15%', marginRight: '15%', marginTop: 20}}>
              { this.renderSection( Image, 'Image Effects', 'Add particle and shader effects to your images and export them to modern video formats', 'Try to click on the images below to see the transformation' ) }
              { this.renderSection( Webpage , 'Websites', 'Replace the static images on your websites with small video clip using the effects from Light Trails',' Effects can be a perfect way to put focus on important areas of your web site or set the mood using them as background aesthetic' ) }
              { this.renderSection( Presentation, 'Presentations', 'Use the effects from light trails to capture your audience for your next presentations' ) }
            </div>

            <hr style={{ marginTop: 50, marginBottom: 50 }}/>

            <div className="headLine">
                Click on the images to see the transition
            </div>

            <ExampleGrid/>
        </div>
      </main>
    );
  }

}

export default Main;