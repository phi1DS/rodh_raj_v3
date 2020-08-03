import React, {useContext, useState, useEffect} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";
import RoomNumber from "./RoomNumber";

export default function RoomHeader() {
    const {gameConfig} = useContext(GameConfigContext);
    const [roomNumberArray, setRoomNumberArray] = useState([]);

    useEffect(() => {
        const roomNumberArrayCopy = [];
        for(let i = 0; i < gameConfig.maxRoomNumber; i++) {
            roomNumberArrayCopy.push(<RoomNumber i={i} key={i}/>);

            // if (i === gameConfig.roomNumber) {
            //     roomNumberArrayCopy.push(
            //         <RoomNumber i={i} className="underLined" key={i}/>
            //     )
            // }
            // else {
            //     roomNumberArrayCopy.push(
            //         <RoomNumber i={i} key={i}/>
            //     )
            // }
        }

        console.log(roomNumberArrayCopy);

        setRoomNumberArray(roomNumberArrayCopy);
    }, []);

    console.log(roomNumberArray);

    return (
        <div className="room_top">
            <div className="room_title">
                <h1>Salle des potions</h1>
            </div>

            <div className="room_number">
                {roomNumberArray}
            </div>
        </div>
    )

}
