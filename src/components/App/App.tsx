import React, {useEffect} from "react";
import "./App.scss";
import {useActions} from "../../hooks/redux";
import Routes from "../../config/routes";

declare global {
    interface Window {
        Telegram: any;
    }
}

function App() {

    const {fetchTelegramUser} = useActions();

    useEffect(() => {
        fetchTelegramUser()
    }, []);

    return (
        <div className="App">
            <Routes/>
        </div>
    );
}

export default App;
