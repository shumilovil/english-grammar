import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { achievementsReducer } from './achievementsReducer';
import { filesReducer } from './filesReducer';
import { mainReducer } from './mainReducer';
import { recommendationsReducer } from './recommendationsReducer';
import { reviewsReducer } from './reviewsReducer';

const rootReducer = combineReducers({
    app: mainReducer,
    achievements: achievementsReducer,
    files: filesReducer,
    recommendations: recommendationsReducer,
    reviews: reviewsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;