import React from 'react';
import { createChannel } from '../../../../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';




const msp = state => ({
    cUser: state.session.currentUser,
})



const mdp = dispatch => ({

    createDM: (formData) => dispatch(createChannel(formData))

})

class NewDMForm extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            user_id: this.props.user.id,
            message: "",
            curruser_id: this.props.cUser
        }

    }
    componentDidMount() {
        const closeDM = this.props.closeDM;
        $(window).click( () => {
            closeDM();
        });
    }
    
    handleChange(e){
        this.setState({ message: e.target.value, user_id: this.state.user_id, curruser_id: this.state.curruser_id });
    }

    handleSubmit(e){

        e.preventDefault();

        this.props.createDM(this.state).then(channel => {
            this.props.history.push(`/@me/${this.props.cUser}/DMs/${channel.id}`)
        })
    }

    render(){
        
        return (
            <div className="DM-form" onClick={(e)=> e.stopPropagation()}>

                <header>
                    <img className='dm-icon' src={window.chatIcon} />
                    <span className="member-username">{this.props.user.username}</span> 
                </header> 

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder={`message @${this.props.user.username}`} onChange={this.handleChange.bind(this)} value={this.state.message} />
                </form>

            </div>
        )
    }


}

export default withRouter(connect(msp,mdp)(NewDMForm))