import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {

    const [palyers, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return (
        <div className="grid lg:grid-cols-3  md:grid-cols-2 space-x-4 space-y-5">
            {
                palyers.map(player => (
                    <Player key={player.id} player={player}></Player>
                ))
            }
        </div>
    );
};

export default Players;