import { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../../src/types/playerType';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from'./SelectedPlayers';
// import { Dispatch, SetStateAction } from "react";

interface PlayersProps {
  playersPromise: Promise<IPlayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}


const Players = ({playersPromise,coin,setCoin }: PlayersProps) => {
  const players=use(playersPromise);
  const [buttontype,setButtonType]=useState<"Available" | "Selected">("Available")
    const handleButtonUpdate=(type:"Available" | "Selected")=>{
        setButtonType(type);
    }
  
  const [selectedPlayers,setSelectedPlayers]=useState<IPlayer[]>([]);
    return (
      <div className='container mx-auto space-y-1 my-15'>
        <div className='flex justify-between  '>
          <h2 className='text-2xl font-bold'>{buttontype==="Available" ? "Available Players":"Selected Players"}</h2>
          <div className='flex'>
           <button onClick={()=>handleButtonUpdate("Available")}  className={`btn ${buttontype === 'Available' ? 'btn-success':''} rounded-r-none`}>Available</button>
           <button onClick={()=>handleButtonUpdate("Selected")} className={`btn rounded-l-none ${buttontype === 'Selected' ? 'btn-success':''}` }>Selected</button>
          </div>
        </div>

            {buttontype === "Available"? <AvailablePlayers players={players}  coin ={coin} setCoin={setCoin}  selectedPlayers={selectedPlayers} setSelectedPlayers ={setSelectedPlayers} ></AvailablePlayers> : <SelectedPlayers  selectedPlayers={selectedPlayers} setSelectedPlayers ={setSelectedPlayers} coin ={coin} setCoin={setCoin}></SelectedPlayers> }
    
      </div>
    );
};

export default Players;