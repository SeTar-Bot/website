import * as React from "react"
import HeaderLogo from "./Logo";
import HeaderNavbar from "./Navbar";
import HeaderBanner from "./Banner";

import './Header.css';

export default class Header extends React.Component <{}> {

   render()
   {
      return (
         <header>
            <div  className="head_top">
               <div className="header">
                  <div className="container-fluid">
                     <div className="row">
                        <HeaderLogo/>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                           <nav className="navigation navbar navbar-expand-md navbar-dark ">
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                 <span className="navbar-toggler-icon"></span>
                              </button>
                              <HeaderNavbar/>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
               <HeaderBanner/>
            </div>
         </header>
      );
   }
}