import React from 'react';
import {useRoutes} from "react-router-dom";
import PlayerInfo from "../pages/PlayerInfo/PlayerInfo";
import Home from "../pages/Home/Home";
import Item from "../pages/Item/Item";

const Routes: React.FunctionComponent<{}> = props => {

    const routes = useRoutes([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/player',
            element: <PlayerInfo/>
        },
        {
            path: '/item/:id',
            element: <Item/>
        },
    ]);

    return (routes);
}

export default Routes;
