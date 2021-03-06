import React from 'react'
import {GameConfigProvider} from "../../Context/GameConfigContext";
import RoomHeader from "./Header/RoomHeader";
import RoomFooter from "./Footer/RoomFooter";
import RoomAction from "./Body/RoomAction";

export default function GameWrapper() {

    return (
        <GameConfigProvider>
            <div className="wrapper" id="wrapper">

                <div className="container_donjon">
                    <RoomHeader/>
                    <RoomAction/>
                </div>
            </div>
            <RoomFooter/>
        </GameConfigProvider>
    )
}
