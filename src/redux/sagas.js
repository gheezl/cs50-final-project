import {takeLatest, put, all, call} from "redux-saga/effects"

import { Types } from "./types.js"

import {getDataSuccess} from "./actions.js"

import {api_info} from "../api/api.js"

// saga functions

export function* getData({payload : input}) {
    try {
        const nationInfo = yield (yield fetch(`https://covid-193.p.rapidapi.com/statistics?country=${input.toLowerCase().trim()}`, api_info)).json()
        if (nationInfo.response[0] === undefined) alert("There is something wrong, make sure you enter the name of an existing nation, or try entering a different name or acroynym for the nation you allready entered.");
        yield put(getDataSuccess(nationInfo.response[0]))
    }
    catch (error) {
        alert(error.message)
    }
}

// listeners

export function* onGetDataStart() {
    yield takeLatest(Types.GET_DATA_START, getData)
}

// Final Saga

function* saga() {
    yield all([
        call(onGetDataStart),
    ])
}

export default saga;