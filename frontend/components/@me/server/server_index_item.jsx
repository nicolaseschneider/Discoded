import React from 'react';

class ServerIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e){
    this.props.select(this.props.server.id)
  }

  render(){
    return (
    <div class-name="server-holder">
      <li onClick={this.handleSelect} className="server-icon">
        <p>
          {this.props.server.name.slice(0,2)}
        </p>
        <span className='server-name'>{this.props.server.name}</span>
      </li>
    </div>
    )
  }

};
export default ServerIndexItem;