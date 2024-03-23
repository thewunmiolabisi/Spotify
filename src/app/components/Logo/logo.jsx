
import React from 'react'; 
import style from "./styles.modules.css"
import SpotifyWhite from '../../assets/images/SpotifyWhite.png'; 
import SpotifyBlack from '../../assets/images/SpotifyBlack.png';  
import { ReactComponent} from '../../assets/images/spotify-black.svg';


export function Logo(props) {
  return (
    <a href='#/dashboard' className={style.logo}>
     {!props.useWhite? <ReactComponent /> : <img src={SpotifyWhite} alt="Spotify logo" />}

   </a>
  );
}

export function NavigationLogoText() {
  return (<h1>Spotify</h1>);
}

