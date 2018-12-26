import { createStore, combineReducers } from "redux"
import rootReducer from "./reducer"
import partyReducer from './partyReducer'
import tableReducer from './table_reducer'

const store = createStore(combineReducers({root : rootReducer, party : partyReducer, table : tableReducer}))

export default store
