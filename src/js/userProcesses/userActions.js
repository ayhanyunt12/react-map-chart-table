/* eslint-disable no-return-assign,no-param-reassign */
import axios from 'axios';

export function fetchUsers() {
    return function(dispatch) {
        dispatch({type: 'FETCH_USERS'});

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                /**
                 * we add checked attribute to each user that came from API
                 * we will use this attribute in map and chart component
                 * we will mark the user's location if users->checked is true
                 * we will print data in chart if users->checked is true
                 * if we didn't add this attribute we need to create another reducer
                 */
                response.data.map(responses => responses.checked = false);
                dispatch(
                    {type: 'FETCH_USERS_FULFILLED', payload: response.data});
            })
            .catch((err) => {
                dispatch({type: 'FETCH_USERS_REJECTED', payload: err});
            });
    };
}

/**
 * find the user with given id and
 * make it's check attribute to given check parameter
 * @param id
 * @param check
 * @returns {Function}
 */
export function checkUser(id, check) {
    return function(dispatch) {
        dispatch({type: 'CHECK_USER', payload: {id, check}});
    };
}