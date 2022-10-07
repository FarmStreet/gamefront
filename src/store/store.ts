import {combineReducers, configureStore} from "@reduxjs/toolkit";
import telegramUserReducer from "./reducers/telegramUserSlice";
import {playerAPI} from "../services/PlayerService";

const rootReducer = combineReducers({
    telegramUserReducer,
    [playerAPI.reducerPath]: playerAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(playerAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']