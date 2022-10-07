import React, {FC} from "react";
import './InventoryItemCheckbox.scss';
import galca from "../../../../assets/img/galya.png";

interface InventoryItemCheckboxProps {
    canEquip: boolean;
    isEquipped: boolean;
    count: number;
}

const InventoryItemCheckbox: FC<InventoryItemCheckboxProps> = ({canEquip, isEquipped, count}) => {

    if (canEquip) {
        return <div className="inventory_item_checkbox inventory_item_checkbox__equippable">
            {isEquipped && <img alt="" src={galca} className="galca"/>}
        </div>
    }

    return (
        <div className="inventory_item_checkbox inventory_item_checkbox__counting">
            <div
                className="inventory_item_checkbox__counting_text">{count > 999 ? '999+' : count}</div>
        </div>
    )
}

export default InventoryItemCheckbox