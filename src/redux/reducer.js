import { Types } from "./types.js"

const INITIAL_STATE = {
    data: null,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.GET_DATA_START:
            return {
                ...state
            }

        case Types.GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload
            }

        case Types.RESET_STATE:
            localStorage.setItem("current-user", null)
            return {
                data: null
            }

        default:
            return state
    }
}


export default reducer;