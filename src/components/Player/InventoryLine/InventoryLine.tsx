import React, {Children, FC} from "react";
import './InventoryLine.scss';

import inventoryHeader from "../../../assets/img/inventoryHeader.png";
import inventoryBody from "../../../assets/img/inventoryBody.png";
import inventoryFooter from "../../../assets/img/inventoryFooter.png";

interface InventoryLineProps {
    lineType?: InventoryLineType;
    children: React.ReactNode;
}

export enum InventoryLineType {
    header,
    body,
    footer,
}

const InventoryLine: FC<InventoryLineProps> = ({lineType= InventoryLineType.body, children}) => {

    let bgImage = inventoryBody;
    let bgStyle = "inventory_body";

    if (lineType === InventoryLineType.header) {
        bgImage = inventoryHeader;
        bgStyle = "inventory_header";
    }
    if (lineType === InventoryLineType.footer) {
        bgImage = inventoryFooter;
        bgStyle = "inventory_footer";
    }

    return <div className={bgStyle} style={{backgroundImage: 'url('+bgImage+')'}}>
        {children}
    </div>
}

export default InventoryLine