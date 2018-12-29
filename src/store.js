import { createStore, combineReducers } from "redux"
import rootReducer from "./reducer"
import tableReducer from './table_reducer'

const store = createStore(combineReducers({root : rootReducer, table : tableReducer}))

export default store
