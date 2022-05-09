import './home.css';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import * as React from 'react';
import { DataContext } from '../../contexts';

export default class Home extends React.Component {

  render()
  {
    return (
      <DataContext.Consumer>
      {context => (
        <div id='home' className='container home-container'>
          <div className='logo'>
            <div className='hover-show'>
              <span className='circle'></span>
              <span className='circle'></span>
              <span className='circle'></span>
              <span className='circle'></span>
              <span className='circle'></span>
              <span className='circle'></span>
              <span className='circle'></span>
              <span className='circle'></span>
            </div>
    
            <img src={context.avatar_url} alt={context.name} />
          </div>
    
          <a href='#footer' className='scroll-down'>
            <hr />
            <h5>scroll down</h5>
            <BsMouse className='scroll' />
            <hr />
          </a>
          <h2>
            <span id="about">About {context.pronounce}</span> <br />
            <p>
              {context.description}
            </p>
          </h2>
          <Buttons />
        </div>
      )}
      </DataContext.Consumer>
    );
  }
}
