import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

export default () => {
    const { items } = usePage();

    return (
        <ul>
            {items.map(({name}, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    );
};
