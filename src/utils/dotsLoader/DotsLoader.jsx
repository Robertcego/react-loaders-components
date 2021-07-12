import React from 'react';
import './DotsLoader.component.scss';
function DotsLoader() {
  return (
    <div>
      <div className='spinner'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>
    </div>
  );
}

export default DotsLoader;
