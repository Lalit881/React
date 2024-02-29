import React, { createContext } from "react";
import Parent from "./Parent";

export const prop = createContext();

function UseContextHook(){
    return(
        <prop.Provider value={"Hello"}>
        <Parent></Parent>
        </prop.Provider>
    )
}

export default UseContextHook;

// Usage
// Passing data deeply into the tree
// Updating data passed via context
// Specifying a fallback default value
// Overriding context for a part of the tree
// Optimizing re-renders when passing objects and functions
