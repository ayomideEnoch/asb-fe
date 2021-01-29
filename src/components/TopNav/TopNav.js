import React from 'react';
// import { Link } from 'react-router-dom';
import './TopNav.css';

function TopNav() {
  return (
    <div className="TopNav">
      <div className="float-left">
        {/* <Link to ='/'>Home</Link> */}
        <h1 className="icon"><img alt="" /><a href="/">FE Engineer Test 1</a></h1>
        <h1><img className="img2" alt="" /><a className="link" href='/'>Home</a></h1>
        <h1><img className="img3" alt="" /><a className="link" href='/'>Entries</a></h1>
        <h1 className="active"><img className="img4" alt="" /><a href='/'>Divisions</a></h1>
      </div>
      <div className="float-right">
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input type="text" className="form-control" />
        </div>
        <a href="/"><img className="img5" alt="" /></a>
        <a href="/"><img className="img6" alt="" /></a>
        <a href="/"><img className="img7" alt="" /></a>
      </div>
    </div>
  );
}

export default TopNav;