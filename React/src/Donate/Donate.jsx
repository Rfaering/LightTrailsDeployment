import React from 'react';
import style from './Donate.css';
import Cofee from '../assets/images/Cofee.png';
import Server from '../assets/images/Server.png';
import Food from '../assets/images/Food.png';

class Donate extends React.Component {
  constructor(props) {
    super(props);    
  }

  renderLocalItem( img, text ){
    return <div className={style.localItemContainer}>
              <img src={img} className={style.localItem}/><span className={style.localItemText}> {text} </span>
           </div>;
  }

  render() {
    return <div> 
      <div className={style.mainTitle}>
        Donate
      </div>
      <div className={style.mainText}>
        <p>This project has just started and many good ideas still needs implementation</p>
        <br/>
        <p>Any help with license, server cost or other maintenaince cost, like coffee during long programming nights would be very appreciated</p>
        <br/>
        <p>So if you have an extra dollar to spare and the software has given value to your project, feel free to help the project move forward</p>
      </div>
      <div className={style.donation}>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value="Q4TZ9XZBDGUEJ"/>
          <input type="image" src="https://www.paypalobjects.com/da_DK/DK/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – den sikre og nemme måde at betale på nettet."/>
          <img alt="" border="0" src="https://www.paypalobjects.com/da_DK/i/scr/pixel.gif" width="1" height="1"/>
        </form>
      </div>

      <div className={style.mainTitle}>
        Donations will help with the following...
      </div>
      { this.renderLocalItem( Cofee, '6 $ will pay for a great local cup of cofee' ) }      
      { this.renderLocalItem( Food, '35 $ will pay for a bite to eat at at the local resturent' ) }
      { this.renderLocalItem( Server, '50 $ will pay for a month of server and license fees' ) }
    </div>;
  }
}

export default Donate;