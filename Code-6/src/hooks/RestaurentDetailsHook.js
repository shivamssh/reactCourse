
import { useState, useEffect } from 'react';
import { restaurentDetailsGet } from './../constant';

const ResaurentDeatilsHook = (id) => {
    const [restaurentDetailsData, setRestaurentDataDetails ] = useState(null);
    

    useEffect(() => {
        getDetailsOfRestaurent();
    },[]);

    async function getDetailsOfRestaurent() {
        let details = await fetch(restaurentDetailsGet+id+'&catalog_qa=undefined&submitAction=ENTER')
        let json = await details.json();
        setRestaurentDataDetails(json?.data)
    }

    
    return restaurentDetailsData;
}

export default ResaurentDeatilsHook;