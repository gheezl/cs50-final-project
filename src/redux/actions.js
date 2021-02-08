import { Types } from "./types.js"


export const getUserStart = (username) => ({
    type: Types.GET_USER_START,
    payload: username,
})

export const getUserSuccess = (user) => ({
    type: Types.GET_USER_SUCCESS,
    payload: user,
})

export const getPostSuccess = (posts) => ({
    type: Types.GET_POSTS_SUCCESS,
    payload: posts
})