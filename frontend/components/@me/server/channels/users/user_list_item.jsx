import React from 'react';
import NewDMForm from './newDM_form';

class UserListItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {open: false}

    }

    openDM(e){
        e.preventDefault();
        this.setState({open: false});
        setTimeout(() => {
            this.setState({open: true});
        });
    }
    closeDM() {
        this.setState({ open: false});
        $(window).unbind("click");
    }
    render(){
        const { user } = this.props;
        if (this.props.user){
            return (
                <div>
    
                    <li key={user.id} onClick={this.openDM.bind(this)} className="user-list-item">
                        <img src={window.userIcon} />
                        <h1>{user.username}</h1>
                    </li>
    
                    {this.state.open ? <NewDMForm user={this.props.user} closeDM={this.closeDM.bind(this)} /> : ""}
                </div>
            )
        } else {
            return ""
        }

    }
}

export default UserListItem;