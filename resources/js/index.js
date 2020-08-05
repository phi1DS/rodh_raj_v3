import React from "react";
import ReactDOM from "react-dom";
import GameWrapper from "./Components/Game/GameWrapper";

if (document.getElementById("game-display")) {
    ReactDOM.render(
        <GameWrapper />,
        document.getElementById("game-display")
    );
}


// require('./Components/Example');

// import React from 'react';
// import { render } from 'react-dom';
// import { InertiaApp } from '@inertiajs/inertia-react';

// const app = document.getElementById('app');
//
// render(
//     <InertiaApp
//         initialPage={JSON.parse(app.dataset.page)}
//         resolveComponent={name =>
//             import(`./Pages/${name}`).then(module => module.default)
//         }
//     />,
//     app
// );
