import { combineReducers } from 'redux';
import searchReducer from './search/search.reducer';
import detailsReducer from './details/details.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const detailsPersistConfig = {
	key: 'weatherApp',
	storage,
	whitelist: ['rehidrationCoord'],
};

const rootReducer = combineReducers({
	search: searchReducer,
	details: persistReducer(detailsPersistConfig, detailsReducer),
});

export default rootReducer;
