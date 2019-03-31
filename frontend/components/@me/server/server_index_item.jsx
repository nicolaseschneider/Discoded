import React from 'react';
export default (props) => (
  <div>
    <li className="server-icon">
      <p>
        {props.server.name.slice(0,2)}
      </p>
      <span className='server-name'>{props.server.name}</span>
    </li>
  </div>
);