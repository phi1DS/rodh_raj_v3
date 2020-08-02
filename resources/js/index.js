import React from "react";
import ReactDOM from "react-dom";
import DashboardEdit from "./dashboard-config-edit-components/DashboardEdit";

if (document.getElementById("game-display")) {
    ReactDOM.render(
        <DashboardEdit />,
        document.getElementById("dashboard-edit-form")
    );
}

if (document.getElementById("dashboard-display")) {
    ReactDOM.render(
        <DashboardDisplay />,
        document.getElementById("dashboard-display")
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
