import React, {useState, createContext} from 'react';
import ConstantCollection from "../constants";
import {fetchFromApi} from "../Services/ApiFetcher";

export const GameConfigContext = createContext(null);

export const GameConfigProvider = ({children}) => {
    const defaultGameConfig = {
        player: {
            life: 3,
            objects: []
        },
        maxRoomNumber: 10,
        roomNumber: 1,
        currentRoomAction: {}
    };

    const [gameConfig, setGameConfig] = useState({
        ...defaultGameConfig
    });

    // useEffect(() => {
    //     // TODO fetch local storage config ?
    // }, []);

    function roomPassed() {
        const newConfig = {...gameConfig};

        newConfig.roomNumber++;
        if (newConfig.roomNumber === newConfig.maxRoomNumber) {
            console.log('should go to boss');
        }

        setGameConfig(newConfig);
    }

    function changeRoomAction(roomActionCode) {
        fetchFromApi(ConstantCollection.API_BASE_URL + '/room-action/' + roomActionCode, (roomAction) => {
            const newConfig = {...gameConfig};
            newConfig.currentRoomAction = roomAction;

            setGameConfig(newConfig);
        })
    }


    return(
        <GameConfigContext.Provider value={{
            gameConfig,
            setGameConfig,
            roomPassed,
            changeRoomAction
        }}>
            {children}
        </GameConfigContext.Provider>
    );
};
