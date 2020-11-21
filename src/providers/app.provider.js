import React, { createContext, useContext, useReducer } from 'react'

import {addToFavourites, addToLocalStorage, removeFromFavourites} from './app.utils'

const AppContext = createContext();

const INITIAL_STATE = {
    favourites: [],
    total: 0,
    errorMessage: ""
}

const appStateReducer = (state, action) => {
    switch(action.type) {
        case "GET_LOCAL_STATE": {
            return {
                ...state,
                favourites: action.payload,
                total: action.payload.length
            }
        }
        case "ADD_TO_FAVOURITES": {
            let items = addToFavourites(state.favourites, action.payload);
            addToLocalStorage("favourites", items);
            return {
                ...state,
                favourites: items,
                total: items.length
            }
        }
        case "REMOVE_FROM_FAVOURITES": {
            let items = removeFromFavourites(state.favourites, action.payload);
            addToLocalStorage("favourites", items);
            return {
                ...state,
                favourites: items,
                total: items.length
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