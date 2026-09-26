import React from 'react';
import type { Dispatch, SetStateAction } from "react";
import { IPlayer } from '../../src/types/playerType';
import { FaRegTrashAlt } from 'react-icons/fa';

interface IselectedPlayerCard{
        player:IPlayer
        selectedPlayers:IPlayer[]
        setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
        coin: number;
        setCoin: Dispatch<SetStateAction<number>>;
}


const SelectedPlayerCard = ({player,selectedPlayers,setSelectedPlayers,coin,setCoin}:IselectedPlayerCard) => {

        const handleRemovePlayer =(player:IPlayer)=>{
            const restPlayer= selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName )
            // console.log(restPlayer)
             setSelectedPlayers(restPlayer)
             const newCoin = coin+player.price;
             setCoin(newCoin)
        }


    return (
                    <div className="border-1 border-gray-200 rounded-xl p-3 my-5 flex justify-between gap-10 items-center " >
                        <div className="flex gap-20 items-center">
                            <img src={player.playerImage} alt="" className="h-[100px] w-[130px] rounded-xl"/>
                            <div> 
                                <h3 className="text-xl  ">{player.playerName}</h3>
                                <p>{player.battingStyle}</p>
                            </div>
                        </div>
                            <span className="mr-20 text-3xl" onClick={()=>handleRemovePlayer(player)}>
                                <FaRegTrashAlt></FaRegTrashAlt>
                            </span>
                    </div>
    );
};

export default SelectedPlayerCard;