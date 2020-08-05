import React, {useContext} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";

export default function RoomFooter() {
    const {gameConfig} = useContext(GameConfigContext);

    return (
        <div className="character">
            <div className="character_life character_child">
                <div className="character_title"><p>Vie : {gameConfig.player.life}</p></div>
            </div>
            <div className="character_items character_child">
                <div id='objects'>
                    <div className="character_title"><p>Objets :</p></div>
                    <ul>
                        {
                            gameConfig.player.objects.map((object, index) => (
                                <div key={index}>{object}</div>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
