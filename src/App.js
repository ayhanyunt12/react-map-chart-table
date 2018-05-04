/* eslint-disable react/forbid-prop-types *//* eslint react/prop-types: 0 */

import React from 'react';
import {connect} from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './css/chart-component.css';
import {checkUser, fetchUsers} from './js/userProcesses/userActions';
import {fetchPosts} from './js/postProcesses/postAction';
import MapComponent from './js/components/MapComponent';
import UserTableComponent from './js/components/UserTableComponent';
import ChartComponent from './js/components/ChartComponent';

/**
 * for connect component to store
 * @param dispatch
 * @returns {{fetchUsers: function(): *, checkUser: function(*=, *=): *, fetchPosts: function(): *}}
 */
const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    checkUser: (id, check) => dispatch(checkUser(id, check)),
    fetchPosts: () => dispatch(fetchPosts()),
});

/**
 * for connect component to store
 * @param state
 */
const mapStateToProps = state => ({
    userFetched: state.users.fetched,
    users: state.users.users,
    posts: state.posts.posts,
});

const App = (props) => {
    /**
     * attribute of store
     */
    const {users, userFetched, posts} = props;
    /**
     * actions of store
     */
    const {fetchUsers, checkUser, fetchPosts} = props;

    /**
     * when user check a box in userTableComponent
     * the userTableComponent will inform the parent component
     * and parent component will call this function to check a user
     * @param id
     * @param check
     */
    const toggleUser = (id, check) => {
        checkUser(id, check);
    };

    /**
     * if users and posts didn't fetch then fetch them
     */
    if (!userFetched) {
        fetchUsers();
        fetchPosts();
    }

    return (
        <div className="ui stackable centered grid">
            <div className="two column row">
                <div className="seven wide column">
                    <div className="ui segment">
                        <h1 align="center">User Location</h1>
                        <MapComponent
                            users={users}
                            userFetched={userFetched}
                        />
                    </div>
                </div>
                <div className="seven wide column">
                    <div className="ui segment chart-container">
                        <h1 align="center">Pie Chart</h1>
                        <ChartComponent
                            userFetched={userFetched}
                            users={users}
                            posts={posts}
                        />
                    </div>
                </div>
            </div>
            <div className="fourteen wide column">
                <div className="ui segment">
                    <h1 align="center">User Table</h1>
                    <UserTableComponent
                        users={users}
                        userFetched={userFetched}
                        toggleUser={(id, check) => toggleUser(id, check)}
                    />
                </div>
            </div>
        </div>
    );
};
const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(App);
export default WrappedComponent;
