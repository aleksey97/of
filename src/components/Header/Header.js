import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';

export default function Header() {
  return (
      <div className="header">
          <div className="logo"/>
          <div className="menu">
              <Link className="link" to="/">Dashboard</Link>
              <Link className="link" to="/Events">Events</Link>
              <Link className="link" to="/Help">Help</Link>
          </div>
          <div className="info">
              <div className="message"/>
              <div className="account"/>
          </div>
      </div>
  );
}
