import React from 'react';
import style from './Header.css';
import Logo  from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);    
  }

  link( text, link ){
    return <Link to={link}><div className={style.link}>{text}</div></Link>
  }

  render() {
    // { this.link( 'Donate', 'donate' ) }
    return (
      <header className={style.header}>
        <div className={style.innerHeader}>        
            <Link to="/"><img src={ Logo } width="32"/></Link>
            <Link to="/"><div style={{ marginLeft: '16px', color: 'white', fontSize: '20px', lineHeight: '1', fontFamily: 'Raleway', textTransform: 'uppercase', textAlign: 'center' }}>Light Trails</div></Link>
            <nav className={style.nav}>
            { this.link( 'Release Notes', 'releasenotes' ) }
            </nav>        
        </div>
      </header>
    );
  }

}

export default Header;