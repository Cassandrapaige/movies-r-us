import {useEffect} from 'react';

import {useAppContext} from '../providers/app.provider';

const useLocalState = () => {
    const [state, dispatch] = useAppContext();

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('favourites'));

        dispatch({
            type: "GET_LOCAL_STATE",
            payload: items ? items : [],
        });
    }, [dispatch]);
}

export default useLocalState;