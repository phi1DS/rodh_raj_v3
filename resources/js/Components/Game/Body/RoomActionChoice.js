import React, {useContext} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";

export default function RoomActionChoice({choiceText, targetRoomActionCode, isBackToMenu}) {
    const {gameConfig, changeRoomAction, goToBossRoom, goToNewRoom, resetGameConfig} = useContext(GameConfigContext);

    const goToRoomAction = () => {
        if (gameConfig.player.isDead) {
            window.location.href =  location.protocol + "//" + location.host + "/dead";
        }

        if (isBackToMenu) {
            console.log('-- Back to menu');
            resetGameConfig();
        }
        else if (gameConfig.roomNumber >= gameConfig.maxRoomNumber && targetRoomActionCode === false) {
            console.log('-- Go to boss room');
            goToBossRoom();
        }
        else if (targetRoomActionCode) {
            console.log('-- Go to roomAction');
            changeRoomAction(targetRoomActionCode);
        }
        else {
            console.log('-- Go to new room');
            goToNewRoom();
        }
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
