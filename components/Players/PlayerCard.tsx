import  { useState, type Dispatch, type SetStateAction } from "react";
import { FaUser, FaStar } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import { toast } from "react-toastify";
import type { IPlayer } from "../../src/types/playerType";


interface IplayerCardProps{
    player:IPlayer
    coin:number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers:object[];
    setSelectedPlayers:Dispatch<SetStateAction<object[]>>;
}
const PlayerCard = ({ player,coin,setCoin,selectedPlayers,setSelectedPlayers}:IplayerCardProps) => {
    const[isSelected, setIsSelected] = useState(false);


    const handleSelectPlayer =()=>{
        // Selected and Coin update 
        if(coin>player.price){
        setIsSelected(true);
        const newCoin= coin- player.price;
        setCoin(newCoin);
        toast.success(`${player.playerName} successfully Purchased`)
            setSelectedPlayers([...selectedPlayers,player]);
        }else{
            toast.error("insufficient Balance")
        }
        // send to Selected player to select tab

    
        
        

    }
    // console.log(coin,setCoin+"Playercard")
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Player Image */}
            <div className="relative overflow-hidden bg-gray-100">
                <img
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={player.playerImage}
                    alt={player.playerName}
                />

                {/* Player Type */}
                <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-[#E7FE29] px-4 py-2 text-sm font-bold text-gray-900 shadow">
                        {player.playerType}
                    </span>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-5">

                {/* Name & Origin */}
                <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7FE29]">
                                <FaUser className="text-sm" />
                            </span>

                            {player.playerName}
                        </h2>

                        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                            <IoFlag className="text-lg text-gray-800" />
                            {player.origin}
                        </div>
                    </div>
                </div>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-2">
                    <div className="flex gap-1 text-[#E7FE29]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                    </div>

                    <span className="text-sm font-semibold text-gray-600">
                        4.5
                    </span>
                </div>

                {/* Player Information */}
                <div className="grid grid-cols-2 gap-3 border-y border-gray-200 py-4">

                    <div className="rounded-xl bg-gray-50 p-3">
                        <p className="mb-1 text-xs font-medium text-gray-500">
                            Batting Style
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                            {player.battingStyle}
                        </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-3">
                        <p className="mb-1 text-xs font-medium text-gray-500">
                            Bowling Style
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                            {player.bowlingStyle}
                        </p>
                    </div>

                </div>

                {/* Price + Button */}
                <div className="mt-5 flex items-center justify-between gap-3">

                    <div>
                        <p className="text-xs text-gray-500">
                            Player Price
                        </p>

                        <p className="text-xl font-extrabold text-gray-900" id="playerPrice">
                            ${player.price.toLocaleString()}
                        </p>
                    </div>

                    <button onClick={()=>handleSelectPlayer()} className={`rounded-xl bg-[#E7FE29] px-5 py-3 font-bold text-gray-900 shadow-sm transition-all duration-200 hover:bg-[#d8ef20] hover:shadow-md`} disabled={isSelected===true ? true:false }>
                        {isSelected ? "Selected":"Choose Player"}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlayerCard;