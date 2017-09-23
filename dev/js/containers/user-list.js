import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';

class UserList extends React.Component {

    createListItems() {
        return this.props.users.map(user => (
            <li
                key={user.id}
                className='username-list_item'
                onClick={() => this.props.selectUser(user)}
            >
                {user.first} {user.last}
            </li>
            )
        );
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    console.info('state from user-list', state);
    
    return (
    {
        users: state.users
    });
}

const matchDispatchToProps = dispatch => {
    console.info('dispatch from user-list', dispatch);

    return bindActionCreators({
        selectUser: actions.selectUser
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
