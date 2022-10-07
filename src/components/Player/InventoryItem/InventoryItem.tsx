import React, {FC} from "react";
import './InventoryItem.scss';
import IItem from "../../../models/IItem";
import {ASSETS_URL} from "../../../config/constants";
import InventoryItemCheckbox from "./InventoryItemCheckbox/InventoryItemCheckbox";

interface InventoryItemProps {
    item: IItem | undefined;
    style?: InventoryItemStyle;
}

export enum InventoryItemStyle {
    List, // обычный размер, который используется в инвентаре
    Profile, // увеличенная версия для карточки предмета
}

const InventoryItem: FC<InventoryItemProps> = ({item, style= InventoryItemStyle.List}) => {

    const getItemStyle = () => {
        let itemStyle = "inventory_item";

        if (style === InventoryItemStyle.Profile) itemStyle += " inventory_item__profile";
        if (style === InventoryItemStyle.List) itemStyle += " inventory_item__list";

        return itemStyle
    }

    return (
        <div className={getItemStyle()}>
            <InventoryItemCheckbox canEquip={item?.data.canEquip || false} isEquipped={item?.isEquipped || false} count={item?.count || 0}/>
            <img alt="" src={ASSETS_URL + item?.data.image}/>
        </div>
    )
}

export default InventoryItem