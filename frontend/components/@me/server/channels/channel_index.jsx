import React from 'react';



class ChannelIndex extends React.Component {

    render(){

        return (
            <h1>{ this.props.sID ? "xD" : `${this.props.sID}` } </h1>
        )
    }
};
export default ChannelIndex;