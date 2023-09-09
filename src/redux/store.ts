import { plots } from './actions/plot.action';
import { user } from './actions/user.action';
import rootReducer from './reducers';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

store.dispatch(plots())
store.dispatch(user())