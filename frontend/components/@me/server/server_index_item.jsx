import React from 'react';
export default (props) => (
  <li className="server-icon">
    {props.server.name.slice(0,2)}
  </li>
);