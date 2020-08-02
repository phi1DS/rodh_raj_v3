import React, {useContext} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";

export default function RoomActionChoice({choiceText, targetRoomActionCode}) {
    const {changeRoomAction} = useContext(GameConfigContext);

    const goToRoomAction = () => {
        changeRoomAction(targetRoomActionCode);
    }

    return (
        <div className="room_choice bckg-grey" onClick={goToRoomAction}>
            <div className="fl">
                <img src="/img/fleche.png" alt=""/>
            </div>
            <div className="room_choice_txt">
                {{choiceText}}
            </div>
        </div>
    )
}
