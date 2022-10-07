import {telegramUserSlice} from "../reducers/telegramUserSlice";
import {AppDispatch} from "../store";

export const fetchTelegramUser = () => {
    return (dispatch: AppDispatch) => {
        let data = window.Telegram.WebApp.initDataUnsafe;
        if (data && data.user) {
            dispatch(telegramUserSlice.actions.telegramUserIdFetching(data.user.id));
            return;
        }

        dispatch(telegramUserSlice.actions.telegramUserIdFetching(425197389))
    }
}