import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { achievementReducer } from './achievementReducer';
import { filesReducer } from './filesReducer';
import { mainReducer } from './mainReducer';

const rootReducer = combineReducers({
    app: mainReducer,
    achievements: achievementReducer,
    files: filesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;