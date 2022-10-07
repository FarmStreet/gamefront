export default interface IPlayer {
    "data": IPlayerData;
    "currentHP": number;
    "currentMP": number;
    "currentPhysicDefence": number;
    "currentMagicDefence": number;
    "maxPhysDefence": number;
    "maxMagicDefence": number;
    "maxHP": number;
    "maxMP": number;
    "damage": number;
    "strength": number;
    "intelligence": number;
    "agility": number;
    "initiative": number;
    "actionPoints": number;
    "evasion": number;
    "critDamage": number;
    "critChance": number;
}

interface IPlayerData {
    "money": number;
    "currentExp": number;
    "currentLocationId": number;
    "chatId": number;
    "tgid": number;
    "level": number;
    "damageType": number;
    "description": string;
    "name": string;
    "id": number;
}