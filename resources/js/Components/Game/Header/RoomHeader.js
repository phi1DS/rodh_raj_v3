import React, {useContext} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";

export default function RoomHeader() {
    const {gameConfig} = useContext(GameConfigContext);

    const displayRoomNumbers = () => {
        const roomNumberArray = [];

        for(let i = 0; i < gameConfig.maxRoomNumber; i++) {
            if (i === gameConfig.roomNumber) {
                roomNumberArray.push(
                    <div className="underLined">
                        {{i}}
                    </div>
                )
            }
            else {
                roomNumberArray.push(
                    <div>
                        {{i}}
                    </div>
                )
            }
        }

        return roomNumberArray;
    }

    return (
        <div className="room_top">
            <div className="room_title">
                <h1>Salle des potions</h1>
            </div>

            <div className="room_number">
                {
                    displayRoomNumbers()
                }
            </div>
        </div>
    )
}
