import React, {useState, createContext, useEffect} from 'react';
import {ConstantCollection} from "../constants";
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
        currentRoomAction: {
            code: "",
            name: "",
            text: "",
            choices: []
        }
    };

    const [gameConfig, setGameConfig] = useState({
        ...defaultGameConfig
    });

    useEffect(() => {
        fetchFromApi(ConstantCollection.API_BASE_URL + '/room/get-start', changeRoomFromResponse)
        // TODO fetch local storage config ? | sinon prend la première
    }, []);

    function roomPassed() {
        const newConfig = {...gameConfig};

        newConfig.roomNumber++;
        if (newConfig.roomNumber === newConfig.maxRoomNumber) {
            console.log('should go to boss');
        }

        setGameConfig(newConfig);
    }

    const changeRoomFromResponse = (response) => {
        const newConfig = {...gameConfig};
        newConfig.currentRoomAction = response[0];

        setGameConfig(newConfig);
    };

    function changeRoomAction(roomActionCode) {
        fetchFromApi(ConstantCollection.API_BASE_URL + '/room-action/' + roomActionCode, changeRoomFromResponse)
    }

    function goToBossRoom() {
        fetchFromApi(ConstantCollection.API_BASE_URL + '/room/get-end', changeRoomFromResponse);
    }

    function goToNewRoom() {
        const gameConfigClone = {...gameConfig};
        gameConfigClone.roomNumber++;
        setGameConfig(gameConfigClone);

        fetchFromApi(ConstantCollection.API_BASE_URL + '/room/get-end', changeRoomFromResponse);
    }

    return(
        <GameConfigContext.Provider value={{
            gameConfig,
            setGameConfig,
            roomPassed,
            goToNewRoom,
            goToBossRoom,
            changeRoomAction

        }}>
            {children}
        </GameConfigContext.Provider>
    );
};
