export default interface IItem   {
    "id": number;
    "data": IItemData;
    "playerId": number;
    "count": number;
    "itemId": number;
    "isEquipped": boolean;
}

export interface IItemData {
    "id": number;
    "name": string;
    "description": string;
    "maxCountInStack": number;
    "itemLevel": number;
    "requiredLevelToUse": number;
    "itemType": number;
    "useActionName": string;
    "equipActionName": string;
    "uneqiupActionName": string;
    "image": string;
    "additionalPhysicDef": number;
    "additionalMagicDef": number;
    "additionalMaxHP": number;
    "additionalMaxMP": number;
    "additionalDmg": number;
    "stength": number;
    "agility": number;
    "intelligence": number;
    "initiative": number;
    "actionPoints": number;
    "critChance": number;
    "critDamage": number;
    "evasion": number;
    "canEquip": boolean;
}