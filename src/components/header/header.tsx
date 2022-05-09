import * as React from 'react';
import { DataContext } from "../../contexts"
import './header.css';

export default class Header extends React.Component {

  render()
  {
    return (
      <>
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
        <div id='home' className='container header-container'>
          <DataContext.Consumer>
            {context => 
              {
                if(context.type == "user" || context.type == "manual")
                  return (
                    <>
                      <h3>
                        <p>
                          I<span>'</span>m
                        </p>
                        {context.name}
                      </h3>
                      <h2>{context.short_description}</h2>
                    </>
                    )
                  else
                    return (
                      <>
                      <h3>
                        <p>
                          We<span>'</span>re
                        </p>
                        {context.name}
                      </h3>
                        <h2>{context.short_description}</h2>
                      </>
                    )
              }
            }
          </DataContext.Consumer>
        </div>
      </>
    );
  }
}
