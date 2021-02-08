import {takeLatest, put, all, call} from "redux-saga/effects"

import { Types } from "./types.js"

import {getUserStart, getUserSuccess} from "./actions.js"

// saga functions

export function* getUser({payload : input}) {
    try {
        const response = yield fetch(`https://instagram40.p.rapidapi.com/account-info?username=${input.toLowerCase().trim()}`, {"method": "GET","headers": {"x-rapidapi-key": "971346fa9fmsh942519ee7e82eb9p1b706ejsn3fd22fc0cd6c", "x-rapidapi-host": "instagram40.p.rapidapi.com" }})
        // console.log(response.json())
        yield put(getUserSuccess(response.json()))
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