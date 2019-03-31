import React from 'react';
export default (props) => {
  
  return(
  <div class-name="server-holder">
    <li onClick={() => props.select(props.server.id)} className="server-icon">
      <p>
        {props.server.name.slice(0,2)}
      </p>
      <span className='server-name'>{props.server.name}</span>
    </li>
  </div>
)};