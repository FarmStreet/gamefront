import React, {FC} from "react";
import './Inventory.scss';
import IItem from "../../../models/IItem";
import {splitArrayIntoSubarrays} from "../../../functions/array";
import InventoryLine, {InventoryLineType} from "../InventoryLine/InventoryLine";
import InventoryItem from "../InventoryItem/InventoryItem";
import {Link} from "react-router-dom";

interface InventoryProps {
    itemList: IItem[] | undefined;
}

const Inventory: FC<InventoryProps> = ({itemList}) => {

    let itemLine = splitArrayIntoSubarrays(itemList || [], 6);

    const getInventoryItem = (itemList: IItem[] | undefined) => itemList === undefined ? <div></div> : itemList.map(item => <Link key={item.id} to={`/item/${item.id}`}>
        <InventoryItem item={item} />
    </Link>)

    return (
        <div className="inventory">
            <InventoryLine lineType={InventoryLineType.header}>{getInventoryItem(itemLine[0])}</InventoryLine>
            <InventoryLine>{itemLine.length >= 2 ? getInventoryItem(itemLine[1]) : ""}</InventoryLine>
            {itemLine.slice(2, -1).map((itemList, id) =>
                <InventoryLine key={id}>{getInventoryItem(itemList)}</InventoryLine>)}
            <InventoryLine lineType={InventoryLineType.footer}>{itemLine.length >= 3 ? getInventoryItem(itemLine[itemLine.length-1]) : ""}</InventoryLine>
        </div>
    )
}

export default Inventory