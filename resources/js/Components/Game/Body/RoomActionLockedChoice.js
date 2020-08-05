import React, {useContext} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";

export default function RoomActionLockedChoice({choiceText}) {

    return (
        <div className="room_choice bckg-grey" title={"Vous n'avez pas l'objet nécéssaire"}>
            <div className='roomLock'></div>
            <div className="fl">
                <img src="/img/fleche.png" alt=""/>
            </div>
            <div className="room_choice_txt">
                {choiceText}
            </div>
        </div>
    )
}
