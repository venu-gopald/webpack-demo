import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/inbox">Inbox</Link></li>
  </ul>
);

export default Sidebar;