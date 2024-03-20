import './LandingPageHeader.css';
import { Logo } from '../Logo/logo';

export const HeaderNavigation = () => {
  return (
    <header className='header'>
      {/* <div className='logo'>
        <Logo useWhite={true} /> {}
      </div> */}
      <div className='menu'>
        <NavigationMenu /> {/* Renamed component */}
      </div>
    </header>
  );
};

const NavigationMenu = () => { 
  return (
    <ul>
      <li><a href='#/Premium'>Premium</a></li>
      <li><a href='#/Support'>Support</a></li>
      <li><a href='#/Download'>Download</a></li>
      <li><a href='#/|'>|</a></li>
      <li className='active'><a href='#/Sign up'>Sign up</a></li>
      <li className='active'><a href='#/Log In'>Log In</a></li>
    </ul>
  );
};
