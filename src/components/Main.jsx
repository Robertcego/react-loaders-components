import React from 'react';
import DotsLoader from '../utils/dotsLoader/DotsLoader';
import SpinnerLoader from '../utils/spinnerLoader/SpinnerLoader';
import WindowsLoader from '../utils/windowsLoader/WindowsLoader';

import './Main.component.scss';

function Main() {
  return (
    <div className='wrapper'>
      <h1>Robertcego</h1>
      <h2>Loaders demo:</h2>
      <div className='container'>
        <div className='loaders'>
          <h3>Loading</h3>
          <DotsLoader />
        </div>
        <div className='loaders'>
          <h3>Loading</h3>
          <SpinnerLoader />
        </div>
        <div className='loaders'>
          <h3>Loading</h3>
          <WindowsLoader />
        </div>
      </div>
    </div>
  );
}

export default Main;
