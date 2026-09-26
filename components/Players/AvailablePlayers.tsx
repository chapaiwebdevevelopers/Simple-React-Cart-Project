
import type { Dispatch, SetStateAction } from "react";
import { IPlayer } from "../../src/types/playerType";
import PlayerCard from './PlayerCard'

// interface  PlayersProps{
//     playersPromise:Promise<IPlayer[]>
// }
interface IAvaliableProps{
    players:IPlayer[];
    coin:number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers:IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const AvailablePlayers = ({players,coin,setCoin,selectedPlayers,setSelectedPlayers}:IAvaliableProps) => {
    // console.log(coin,setCoin)
    return (
        <div className="grid grid-cols-3 gap-20">
            {
                players.map((player:IPlayer,index:number)=>{
                    return(
                       
                            <PlayerCard player={player} key={index} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}> </PlayerCard>

                    )
                })
            }
        </div>
    );
};

export default AvailablePlayers;