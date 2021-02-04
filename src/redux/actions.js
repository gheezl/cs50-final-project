import { Types } from "./types.js"


export const getUserStart = (username) => ({
    type: Types.GET_USER_START,
})

export const getUserSuccess = (user) => ({
    type: Types.GET_USER_SUCCESS,
    payload: user,
})