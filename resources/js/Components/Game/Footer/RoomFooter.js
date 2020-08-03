import React, {useContext, useEffect, useState} from 'react'
import {GameConfigContext} from "../../../Context/GameConfigContext";

export default function RoomFooter() {
    const {gameConfig} = useContext(GameConfigContext);
    const [lifeBars, setLifeBars] = useState([]);

    const changeLifeBars = () => {
        const lifeBarsCopy = [];
        for(let i = 0; i < gameConfig.player.life; i++) {
            lifeBarsCopy.push(i);
        }

        setLifeBars(lifeBarsCopy);
    };

    useEffect(() => {
        changeLifeBars();
    }, [gameConfig.roomNumber]);

    return (
        <div className="character">
            <div className="character_life character_child">
                <div className="character_title"><p>Vie :</p></div>
                <div className="character_attribute">
                        {
                            lifeBars.map((lifePoint) => (
                                <p key={lifePoint}>|&nbsp;</p>
                            ))
                        }
                </div>
            </div>
            <div className="character_items character_child">
                <div className="character_title"><p>Objets :</p></div>
                <ul>
                    {
                        gameConfig.player.objects.map((object) => (
                            <div>{{object}}</div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
