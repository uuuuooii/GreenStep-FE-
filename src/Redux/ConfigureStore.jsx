import { configureStore, combineReducers } from '@reduxjs/toolkit';
import feed from './modules/feed';

const rootReducer = combineReducers({ feed });
const store = configureStore({ reducer: rootReducer });

export default store;
