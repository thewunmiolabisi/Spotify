

import React from 'react';
import './LandingPageHeader.css';
import { Logo } from '../Logo/logo';
 import {HeaderNavigation} from "./HeaderNavigation"
 import MenuIcon from '../../assets/icons/menu.svg'

export const LandingPageHeader = () => {
  const state = React.useState (false);
 
  return (

    <header className="header">
      <div className="logo">
        <Logo useWhite={true} />
      </div>
      <div className="menu">
      <HeaderNavigation />
   
    <img src={MenuIcon} alt='Menu Icon'/>
        
      </div>
    </header>
  );
  
}

export default LandingPageHeader;
