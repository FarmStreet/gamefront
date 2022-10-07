import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IPlayer from "../models/IPlayer";
import IItemList from "../models/IItem";
import IEquipQuery from "../models/IEquipQuery";
import IItem from "../models/IItem";
import {API_URL} from "../config/constants";

export const playerAPI = createApi({
    reducerPath: 'playerAPI',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    tagTypes: ['player', 'items'],
    endpoints: (build) => ({
        fetchPlayer: build.query<IPlayer, number>({
            query: (telegramId: number) => ({
                url: `/getplayerdata`,
                params: {
                    tgid: telegramId
                }
            }),
            providesTags: result => ['player']
        }),
        fetchPlayerInventory: build.query<IItem[], number>({
            query: (telegramId: number) => ({
                url: `/getplayerinventory`,
                params: {
                    tgid: telegramId
                }
            }),
            providesTags: result => ['items']
        }),
        updatePlayerInventory: build.mutation<IPlayer, IEquipQuery>({
            query: ({tgid, itemId, equip}) => ({
                url: `/changeequipstate`,
                method: "post",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: {
                    tgid,
                    inventoryItemId: itemId,
                    equip,
                },
            }),
            invalidatesTags: ['items'],
        }),
    })
})