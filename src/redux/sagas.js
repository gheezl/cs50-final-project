import {takeLatest, put, all, call} from "redux-saga/effects"

import { Types } from "./types.js"

import {getPostSuccess, getUserSuccess} from "./actions.js"

import {api_info} from "../api/api.js"

// saga functions

export function* getUser({payload : input}) {
    try {
        const user_info = yield fetch(`https://the-instagram.p.rapidapi.com/v1/profile/${input.toLowerCase().trim()}`, api_info)
        yield put(getUserSuccess(user_info.json()))
        const posts = yield fetch(`https://the-instagram.p.rapidapi.com/v1/profile/${input.toLowerCase().trim()}/media`, api_info)
        yield put(getPostSuccess(posts.json()))
        yield localStorage.setItem("current-user", [user_info, posts]) 
        
    }
    catch (error) {
        alert(error.message)
    }
}

// listeners

export function* onGetUserStart() {
    yield takeLatest(Types.GET_USER_START, getUser)
}

// Final Saga

function* saga() {
    yield all([
        call(onGetUserStart),
    ])
}

export default saga;