import React, { useState } from 'react'
import { createContext } from "react";

export const UpdateViewContext = createContext();



export function UpdateViewContextProvider(props) {
    const [updateView, setUpdateView] = useState(0);
    return (
        <UpdateViewContext.Provider value={{ updateView, setUpdateView }} >
            {props.children}
        </UpdateViewContext.Provider>
    )
}
