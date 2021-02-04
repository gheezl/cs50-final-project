import { Types } from "./types.js"

const INITIAL_STATE = {
    user: null
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
    }
}


export default reducer;