import { combineReducers } from 'redux-immutable';

import { reducer as navLeftReducer } from '../common/NavLeft/store';

const reducer = combineReducers({
    navLeft: navLeftReducer,
})

export default reducer;