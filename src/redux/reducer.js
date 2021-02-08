import { Types } from "./types.js"

const INITIAL_STATE = {
    user: null,
    posts: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.GET_USER_START:
            return {
                ...state
            }

        case Types.GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }

        case Types.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }
    }
}


export default reducer;