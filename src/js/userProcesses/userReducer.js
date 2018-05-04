export default function reducer(state = {
    users: {
        id: null,
        name: null,
        username: null,
        email: null,
        address: {
            street: null,
            suite: null,
            city: null,
            zipcode: null,
            geo: {
                lat: null,
                lng: null,
            },
        },
        phone: null,
        website: null,
        company: {
            name: null,
            catchPhrase: null,
            bs: null,
        },
        checked: false,
    },
    isAllChecked: false,
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
    case 'FETCH_USERS': {
        return {...state, fetching: true};
    }
    case 'FETCH_USERS_REJECTED': {
        return {...state, fetching: false, error: action.payload};
    }
    case 'FETCH_USERS_FULFILLED': {
        return {
            ...state,
            fetching: false,
            fetched: true,
            users: action.payload,
        };
    }
    case 'CHECK_USER': {
        const id = action.payload.id;
        const newUsers = [...state.users];
        const userToUpdate = newUsers.findIndex(user => user.id === id);
        newUsers[userToUpdate].checked = !action.payload.check;
        return {
            ...state,
            users: newUsers,
        };
    }
    default : {
        break;
    }
    }

    return state;
}
