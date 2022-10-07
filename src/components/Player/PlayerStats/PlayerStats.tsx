import React, {FC} from "react";
import './PlayerStats.scss';
import IPlayer from "../../../models/IPlayer";
import ProgressBar from "../ProgressBar/ProgressBar";

interface PlayerStatsProps {
    player: IPlayer | undefined;
}

const PlayerStats: FC<PlayerStatsProps> = ({player}) => {

    return (
        <div className="mainPage_stats">
            <div className="name">
                {player?.data.name} - {player?.data.level} lvl
            </div>
            <div>Здоровье:</div>
            <ProgressBar maxValue={player?.maxHP || 0} currentValue={player?.currentHP || 0} type={0}/>
            <div>Мана:</div>
            <ProgressBar maxValue={player?.maxMP || 0} currentValue={player?.currentMP || 0} type={1}/>
            <div className="statDescription">Урон: {player?.damage}</div>
            <div className="statDescription">Физическая защита {player?.currentPhysicDefence} / {player?.maxPhysDefence}</div>
            <div className="statDescription">Магическая защита {player?.currentMagicDefence} / {player?.maxMagicDefence}</div>
            <div className="statName">Основные статы:</div>
            <div className="statDescription">Сила: {player?.strength} Ловкость: {player?.agility} Интеллект: {player?.intelligence}</div>
            <div className="statName">Вторичные статы:</div>
            <div className="statDescription">Шанс уворота: {(player?.evasion || 0)}%</div>
            <div className="statDescription">Шанс крита: {(player?.critChance || 0)}%</div>
            <div className="statDescription">Критический урон: {100 + (player?.critDamage || 0)}%</div>
        </div>
    )
}

export default PlayerStats