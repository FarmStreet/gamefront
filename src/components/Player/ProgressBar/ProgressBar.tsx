import React, {FC} from "react";
import './ProgressBar.scss';

interface ProgressBarProps {
    maxValue: number;
    currentValue: number;
    type: number;
}

// 0 - health
// 1 - mana

const ProgressBar: FC<ProgressBarProps> = ({currentValue, maxValue, type}) => {

    const getBg = () : string => type === 0 ? 'health-bg' : 'mana-bg';

    return (
        <div className="ProgressBar">
            <div className={"ProgressBar--active " + getBg()} style={{width: currentValue / maxValue * 100 + '%'}}/>
            <div className={"ProgressBar_value"}><div>{currentValue} / {maxValue}</div></div>
        </div>
    )
}

export default ProgressBar