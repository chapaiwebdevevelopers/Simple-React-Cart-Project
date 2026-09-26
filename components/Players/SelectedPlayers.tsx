// import React from 'react';

import type { Dispatch, SetStateAction } from "react";

import type { IPlayer } from "../../src/types/playerType";
import SelectedPlayerCard from "./SelectedPlayerCard";



interface ISelectedPlayersProps{
    selectedPlayers:IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}
const SelectedPlayers = ({selectedPlayers,setSelectedPlayers,coin, setCoin}:ISelectedPlayersProps) => {

    if(selectedPlayers.length===0){
        return <h2 className="font-bold text-3xl text-center"> No selected Players</h2>
    } else {
            return (
        <div className="grid grid-cols-1 gap-3">
            {selectedPlayers.map((player:IPlayer,index:number) =>{
                return (
                    <SelectedPlayerCard key={index} player={player}  selectedPlayers={selectedPlayers}setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin ={setCoin}></SelectedPlayerCard>
                ) 

            })}
        </div>
    );
    }

};

export default SelectedPlayers;