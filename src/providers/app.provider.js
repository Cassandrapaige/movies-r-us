import React, { createContext, useContext, useReducer } from 'react'
import App from '../App';


const AppContext = createContext();

const INITIAL_STATE = {
    favourites: [],
    total: 0,
    errorMessage: ""
}

const appStateReducer = (state, action) => {
    switch(action.type) {
        case "INCREASE_TOTAL": {
            return {
                total: state.total += 1
            }
        }
        default: {
            return state;
        }
    }
}

export const useAppContext = () => useContext(AppContext);

export const AppStateProvider = ({children}) => {
    let value = useReducer(appStateReducer, INITIAL_STATE);
    return <AppContext.Provider value= {value}>{children}</AppContext.Provider>
}