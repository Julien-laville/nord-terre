import { createStore, combineReducers } from "redux"
import rootReducer from "./reducer"
import partyReducer from './partyReducer'

const store = createStore(combineReducers({root : rootReducer, party : partyReducer}))

export default store
