import React, {useContext, useState, useEffect} from 'react'

export default function RoomNumber({i, ...props}) {
    return (
        <div {...props}>
            {{i}}
        </div>
    )

}
