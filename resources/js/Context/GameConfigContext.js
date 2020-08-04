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
        },
        alreadyPassedRoomsCodes: []
    };

    const [gameConfig, setGameConfig] = useState({
        ...defaultGameConfig
    });

    useEffect(() => {
        fetchFromApi(ConstantCollection.API_BASE_URL + '/room/get-start', changeRoomFromResponse);

        // TODO fetch local storage config ? | sinon prend la première
    }, []);

    useEffect(() => {
        // si dans blacklist, refais une promesse
        // BlackList
        if (gameConfig.alreadyPassedRoomsCodes.includes(gameConfig.currentRoomAction.code)) {
            fetchRandomRoom();
            return;
        }

    }, [gameConfig.currentRoomAction]);

    function resetGameConfig() {
        fetchFromApi(ConstantCollection.API_BASE_URL + '/room/get-start', (response) => {
            const newConfig = {...defaultGameConfig};
            newConfig.currentRoomAction = response[0];

            setGameConfig(newConfig);
        });
    }

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

        console.log(response[0]);

        newConfig.currentRoomAction = response[0];

        setGameConfig(newConfig);
    };

    function changeRoomAction(roomActionCode) {
        fetchFromApi(ConstantCollection.API_BASE_URL + '/room-action/' + roomActionCode, changeRoomFromResponse)
    }

    function goToBossRoom() {
        fetchFromApi(ConstantCollection.API_BASE_URL + '/room/get-end', changeRoomFromResponse);
    }

    function fetchRandomRoom(response) {
        const newConfig = {...gameConfig};
        newConfig.alreadyPassedRoomsCodes.push(newConfig.currentRoomAction.code);
        newConfig.roomNumber = newConfig.roomNumber + 1;

        console.log(response[0]);
        newConfig.currentRoomAction = response[0];

        setGameConfig(newConfig);
    }

    function goToNewRoom() {
        fetchFromApi(ConstantCollection.API_BASE_URL + '/room/get-random', fetchRandomRoom);
    }

    return(
        <GameConfigContext.Provider value={{
            gameConfig,
            setGameConfig,
            roomPassed,
            goToNewRoom,
            goToBossRoom,
            changeRoomAction,
            resetGameConfig
        }}>
            {children}
        </GameConfigContext.Provider>
    );
};
