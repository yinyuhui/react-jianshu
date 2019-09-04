import { combineReducers } from 'redux-immutable'
import reducers from './reducers'

export default combineReducers({
    ...reducers
})