import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (
  <div className="sidebar">
    <ul>
      <li><Link to="/">DisplayDate</Link></li>
      <li><Link to="/inbox">Inbox</Link></li>
    </ul>
  </div>
);

export default Sidebar;
