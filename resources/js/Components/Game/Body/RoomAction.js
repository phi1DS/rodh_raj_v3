import React, {useContext} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";
import RoomActionChoice from "./RoomActionChoice";
import RoomActionSpecialChoice from "./RoomActionSpecialChoice";
import RoomActionLockedChoice from "./RoomActionLockedChoice";
import RoomActionChanceChoice from "./RoomActionChanceChoice";

export default function RoomAction() {
    const {gameConfig} = useContext(GameConfigContext);

    return (
        <section className="room_action">
            <div className="room_mj">
                <div className="room_mj_head">
                    <img src="/img/mj.svg" draggable="false" alt="Game Master"/>
                </div>
                <div className="room_mj_bubble">
                    <img src="/img/bulle.svg" draggable="false" alt=""/>
                </div>
            </div>

            <div className="room_txt">
                <p>
                    {gameConfig.currentRoomAction.text}
                </p>
            </div>

            <div className="room_choices">
                {
                    gameConfig.currentRoomAction.choices.map((choice, index) => {
                            if (choice.hasOwnProperty('itemAction')) {
                                return gameConfig.player.objects.includes(choice.itemAction.item) ?
                                    <RoomActionSpecialChoice choiceText={choice.text} targetRoomActionCode={choice.target ?? false} key={index}/> :
                                    <RoomActionLockedChoice choiceText={choice.text} key={index}/>;
                            }
                            else if (choice.hasOwnProperty('chanceAction')){
                                return <RoomActionChanceChoice choiceText={choice.text} chanceActions={choice.chanceAction} key={index}/>
                            }
                            else {
                                return <RoomActionChoice choiceText={choice.text}
                                                         targetRoomActionCode={choice.target ?? false}
                                                         isBackToMenu={choice.hasOwnProperty('isBackToMenu')}
                                                         key={index}
                                />
                            }
                        }
                    )
                }
            </div>

        </section>
    )
}
