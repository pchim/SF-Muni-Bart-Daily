import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">SF Muni/Bart Daily</a>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li><a href="#">Home</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;