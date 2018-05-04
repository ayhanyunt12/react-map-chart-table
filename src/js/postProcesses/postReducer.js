export default function reducer(state = {
    posts: {
        id: null,
        userID: null,
        title: null,
        body: null,
    },
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
    case "FETCH_POSTS": {
        return {...state, fetching: true}
    }
    case "FETCH_POSTS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_POSTS_FULFILLED": {
        return {
            ...state,
            fetching: false,
            fetched: true,
            posts: action.payload,
        }
    }
    default : {
        break;
    }
    }
    return state
}
