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
                    {/*{{gameConfig.currentRoomAction.text}}*/}
                    Si il n'y a pas d'obstacle particulier dans cette salle, vous vous arrêtez tout de même
                    pour regarder autour de vous. Les murs sont couverts d'étagères pleines de flacons et
                    pots, contenants toutes sortes de potions étranges, poisons perfides, onguents pour les
                    bleus et sirops pour la toux.
                </p>
            </div>


            <div className="room_choices">
                {
                    gameConfig.currentRoomAction.choices.map((choice) => {
                        return (<RoomActionChoice choiceText={choice.text} targetRoomActionCode={choice.target ?? false}/>)
                    })
                }
            </div>

        </section>
    )
}
