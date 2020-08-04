import React, {useContext} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";

export default function RoomActionChanceChoice({choiceText, chanceActions}) {
    const {changeRoomAction} = useContext(GameConfigContext);

    const goToRoomAction = () => {
        const attempt = Math.floor(Math.random() * Math.floor(10));
        if (attempt <= chanceActions.chance) {
            console.log('-- Chance action success');
            changeRoomAction(chanceActions.successRoomActionCode);
        } else {
            console.log('-- Chance action failure');
            changeRoomAction(chanceActions.failureRoomActionCode);
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
