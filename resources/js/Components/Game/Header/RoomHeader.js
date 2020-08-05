import React, {useContext, useState, useEffect} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";

export default function RoomHeader() {
    const {gameConfig} = useContext(GameConfigContext);
    const [roomNumberArray, setRoomNumberArray] = useState([]);

    useEffect(() => {
        changeRoomNumber();
    }, [gameConfig.roomNumber]);

    const changeRoomNumber = () => {
        const roomNumberArrayCopy = [];
        for(let i = 1; i <= gameConfig.maxRoomNumber; i++) {
            roomNumberArrayCopy.push(i);
        }
        roomNumberArrayCopy.push('Boss');

        setRoomNumberArray(roomNumberArrayCopy);
    };

    return (
        <div className="room_top">
            <div className="room_title">
                <h1>{gameConfig.currentRoomAction.name}</h1>
            </div>

            <div className="room_number">
                {
                    gameConfig.roomNumber <= gameConfig.maxRoomNumber &&
                    <div>Salle : {gameConfig.roomNumber}/{gameConfig.maxRoomNumber}</div>
                }
                {
                    gameConfig.roomNumber > gameConfig.maxRoomNumber &&
                    <div>Salle du Boss</div>
                }
            </div>
        </div>
    )

}
