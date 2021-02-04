import { createStore, applyMiddleware } from "redux"
// import { persistStore } from "redux-persist"
import logger from "redux-logger"
import createSagaMidddleWare from "redux-saga"

import reducer from "./reducer.js"

import saga from "./sagas"

const sagaMiddleware = createSagaMidddleWare()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

export const store = createStore(reducer, applyMiddleware(...middlewares))

sagaMiddleware.run(saga)