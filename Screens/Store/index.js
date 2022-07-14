import * as actions from './actionTypes'
import store from './store'
import * as action from './actions'
store.dispatch(action.searchAdd(description));
store.dispatch(action.searchRemoved(description));