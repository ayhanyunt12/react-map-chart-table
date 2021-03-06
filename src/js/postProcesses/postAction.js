/* eslint-disable import/prefer-default-export */
import axios from "axios";

export function fetchPosts() {
    return function (dispatch) {
        dispatch({type: "FETCH_POSTS"});

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                dispatch({type: "FETCH_POSTS_FULFILLED", payload:response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_POSTS_REJECTED", payload:err})
            })
    }
}
