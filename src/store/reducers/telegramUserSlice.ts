import ITelegramUser from "../../models/ITelegramUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: ITelegramUser = {
    id: 0,
}

export const telegramUserSlice = createSlice({
    name: 'telegramUser',
    initialState,
    reducers: {
        telegramUserIdFetching(state, action: PayloadAction<number>) {
            state.id = action.payload;
        }
    },
})

export default telegramUserSlice.reducer;