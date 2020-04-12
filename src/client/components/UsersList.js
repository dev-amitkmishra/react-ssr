import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
    componentDidMount() {
        console.log('dsfhbfjdhsf', this.props.fetchUsers())
        this.props.fetchUsers();
    }

    renderUsers() {
        console.log('aya ya nahi', this.props);
        const users = [
            { id: 1, name: 'amit', age: 21, email: 'amit@email.com' },
            { id: 2, name: 'kumar', age: 19, email: 'kumar@email.com' },
            { id: 3, name: 'mishra', age: 16, email: 'mishra@email.com' },
            { id: 4, name: 'test', age: 25, email: 'test@email.com' }
         ];
        return this.props.users.map(user => {
            return <li key={ user.id }>{ user.name }</li>
        });
    };

    render() {
        const { users } = this.props;
        return (
            <div>
                list of users will come soon here!!
                {/* <ul>{this.renderUsers()}</ul> */}
                {/* <ul>{users && users.map(user => <li key={user.id}>{user.name}</li>)}</ul> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('states datat', state);
    return { 
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);