import React, {FC} from "react";
import './Item.scss';
import IItem from "../../models/IItem";
import {useAppSelector} from "../../hooks/redux";
import {playerAPI} from "../../services/PlayerService";
import {Link, useParams} from "react-router-dom";
import InventoryItem, {InventoryItemStyle} from "../../components/Player/InventoryItem/InventoryItem";
import Button, {ButtonTypes} from "../../components/button/Button";
import IEquipQuery from "../../models/IEquipQuery";

interface ItemProps {

}

const Item: FC<ItemProps> = ({}) => {

    const {id} = useAppSelector(state => state.telegramUserReducer);
    const {id: itemId} = useParams();
    const {data: inventory, error: errorItem, isLoading: isLoadingItem} = playerAPI.useFetchPlayerInventoryQuery(id, {
        pollingInterval: 1000
    });
    const [updatePlayer, {}] = playerAPI.useUpdatePlayerInventoryMutation();

    const item : IItem | undefined = inventory && inventory.find(item => item?.id === Number(itemId));

    const handleEquip = (equipQuery: IEquipQuery) => {
        updatePlayer(equipQuery);
    }

    if (item === undefined) return (
        <div className="itemPage">
            Предмет не найден
        </div>
    )

    return (
        <div className="itemPage">
            <Link to="/player"><div className="link">Вернуться к инвентарю</div></Link>
            <div className="title">{item?.data.name}</div>
            <div className="body">
                <div className="body__left">
                    <div>{item?.data.description}</div>
                </div>
                <div className="body__right">
                    <InventoryItem item={item} style={InventoryItemStyle.Profile}/>
                </div>
            </div>
            <div className="item_property">Необходимый уровень: {item?.data.requiredLevelToUse}</div>
            <div className="button_container">
                {item.isEquipped
                    ? <Button onClick={() => handleEquip({tgid: id, itemId: item.id, equip: false})} type={ButtonTypes.Red}>Снять</Button>
                    : <Button onClick={() => handleEquip({tgid: id, itemId: item.id, equip: true})}>Надеть</Button>
                }
            </div>
        </div>
    )
}

export default Item