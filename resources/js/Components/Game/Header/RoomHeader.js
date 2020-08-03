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

        setRoomNumberArray(roomNumberArrayCopy);
    };

    return (
        <div className="room_top">
            <div className="room_title">
                <h1>{gameConfig.currentRoomAction.name}</h1>
            </div>

            <div className="room_number">
                {roomNumberArray.map((number) => {
                    return number === gameConfig.roomNumber ?
                        <div className="underLined" key={number}>{number}</div> :
                        <div key={number}>{number}</div>;
                })}
            </div>
        </div>
    )

}
