import React, {FC, useEffect} from "react";
import {playerAPI} from "../../services/PlayerService";
import {useAppSelector} from "../../hooks/redux";
import './PlayerInfo.scss';
import Line from "../../components/Line/Line";
import PlayerStats from "../../components/Player/PlayerStats/PlayerStats";
import Inventory from "../../components/Player/Inventory/Inventory";

interface PlayerInfoProps {

}

const PlayerInfo: FC<PlayerInfoProps> = ({}) => {

    const {id} = useAppSelector(state => state.telegramUserReducer);
    const {data: player, error, isLoading} = playerAPI.useFetchPlayerQuery(id, {
        pollingInterval: 1000
    });
    const {data: inventory, error: errorItem, isLoading: isLoadingItem} = playerAPI.useFetchPlayerInventoryQuery(id, {
        pollingInterval: 1000
    });

    if (isLoading) return <div className="playerInfo">Загрузка...</div>

    if (error) return <div className="playerInfo">Произошла ошибка при загрузке игрока.</div>

    return (
        <div className="playerInfo">
            <div className="mainPage">
                <PlayerStats player={player}/>
                <Line/>
                <div className="mainPage_inventory">
                    <div className="name">
                        Инвентарь
                    </div>
                    <Inventory itemList={inventory}/>
                </div>
            </div>
        </div>
    )
}

export default PlayerInfo