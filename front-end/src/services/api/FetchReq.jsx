import { useState } from "react";


function FetchReq() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFetch = async ({url, mth, by}) => {

        setLoading(true);
        setError(null);

        try{
            const response = await fetch(url, {
                method: mth,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(by),
                credentials: "include",
            });
            if(!response.ok){
                setError(`Unsucceful attempt to fetch the url: ${url}`);
                return;
            }
            
            const data = await response.json();
            setData(data);
            return data;
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    }

    return {handleFetch, data, loading, error};

}

export default FetchReq;