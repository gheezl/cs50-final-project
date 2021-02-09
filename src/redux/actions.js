import { Types } from "./types.js"


export const getDataStart = (nationName) => ({
    type: Types.GET_DATA_START,
    payload: nationName,
})

export const getDataSuccess = (data) => ({
    type: Types.GET_DATA_SUCCESS,
    payload: data,
})

export const resetState = () => ({
    type: Types.RESET_STATE,
})