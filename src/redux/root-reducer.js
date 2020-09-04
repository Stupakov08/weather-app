import { combineReducers } from 'redux';
import searchReducer from './search/search.reducer';
import detailsReducer from './details/details.reducer';

const rootReducer = combineReducers({
	search: searchReducer,
	details: detailsReducer,
});

export default rootReducer;
