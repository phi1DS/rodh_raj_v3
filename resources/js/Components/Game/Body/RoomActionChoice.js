import React, {useContext} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";

export default function RoomActionChoice({choiceText, targetRoomActionCode}) {
    const {gameConfig, changeRoomAction, goToBossRoom, goToNewRoom} = useContext(GameConfigContext);

    const goToRoomAction = () => {

        console.log(gameConfig.roomNumber);
        console.log(gameConfig.maxRoomNumber);

        if (gameConfig.roomNumber >= gameConfig.maxRoomNumber && targetRoomActionCode === false) {
            goToBossRoom();
            return;
        }

        if (targetRoomActionCode === false) {
            goToNewRoom();
            return;
        }

        changeRoomAction(targetRoomActionCode);
    };

    return (
        <div className="room_choice bckg-grey" onClick={goToRoomAction}>
            <div className="fl">
                <img src="/img/fleche.png" alt=""/>
            </div>
            <div className="room_choice_txt">
                {choiceText}
            </div>
        </div>
    )
}
