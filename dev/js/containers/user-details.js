import React from 'react';
import { connect } from 'react-redux';

class UserDetails extends React.Component {
    
    render() {
        if (!this.props.user) {
            return (
                <div>A user is not selected</div>
            );
        }

        return (
            <div>
                <img src={this.props.user.thumbnail} alt='user profile image'/>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state from user-details', state);
    return (
    {
        user: state.activeUser
    }
)
}

export default connect(mapStateToProps)(UserDetails);
