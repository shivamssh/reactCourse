import { useEffect, useState } from "react";

const useInternetState = () => {
    let [internetStatus, setInternetStatus] = useState(false);

    function getStatusValue(state) {
        setInternetStatus(state);
    }

    useEffect(() => {
        window.addEventListener('offline', (event) =>{
            getStatusValue(true);
        });
        window.addEventListener('online', (event) =>{
            getStatusValue(false);
        });
        return () => {
            window.removeEventListener('online',getStatusValue);
            window.removeEventListener('offline',getStatusValue)
        }
    },[]);
    

    return internetStatus;

}

export default useInternetState;