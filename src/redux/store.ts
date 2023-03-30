import { configureStore } from "@reduxjs/toolkit";
import grillaReducer from './grilla-slice';

const store = configureStore({
    reducer: {
		grilla: grillaReducer
    },
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;