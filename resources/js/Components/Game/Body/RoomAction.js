import React, {useContext} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";
import RoomActionChoice from "./RoomActionChoice";

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
                            const isBackToMenu = choice.hasOwnProperty('isBackToMenu');

                            let chanceActions = null;
                            if (choice.hasOwnProperty('chanceAction')) {
                                chanceActions = choice.chanceAction
                            }

                            return <RoomActionChoice choiceText={choice.text}
                                                     targetRoomActionCode={choice.target ?? false}
                                                     isBackToMenu={isBackToMenu}
                                                     chanceActions={chanceActions}
                                                     key={index}
                            />
                        }
                    )
                }
            </div>

        </section>
    )
}
