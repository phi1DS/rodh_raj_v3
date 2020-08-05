import React, {useContext} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";

export default function RoomActionSprecialChoice({choiceText, targetRoomActionCode}) {
    const {gameConfig, changeRoomAction} = useContext(GameConfigContext);

    const goToRoomAction = () => {
        if (gameConfig.player.isDead) {
            window.location.href =  location.protocol + "//" + location.host + "/dead";
        }

        console.log('-- Go to roomAction');
        changeRoomAction(targetRoomActionCode);
    };

    return (
        <div className="room_choice bckg-green" onClick={goToRoomAction}>
            <div className="fl">
                <img src="/img/fleche.png" alt=""/>
            </div>
            <div className="room_choice_txt">
                {choiceText}
            </div>
        </div>
    )
}
