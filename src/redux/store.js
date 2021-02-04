import { createStore, applyMiddleware } from "redux"
// import { persistStore } from "redux-persist"
import logger from "redux-logger"

import reducer from "./reducer.js"

const middlewares = []

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}



export const store = createStore(reducer, applyMiddleware(...middlewares))