import {useState, useEffect} from 'react';

import axios from 'axios';

const useGoogleApi = (address) => {
    const [map, setMap] = useState({});

    const API = `${process.env.linkId}${address}`;

    useEffect(async () => {
        const res = await axios(API);
        setMap(res.data.data[0])
    }, []);
    return map;
}

export default useGoogleApi;