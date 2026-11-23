import { useState, useEffect } from 'react';

function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!url){
            return;
        }
        setLoading(true);
        setError(null);

        const abort = new AbortController();
        const signal = abort.signal;

        const handleFetch = async () => {
            try{
                const response = await fetch(url, {
                    signal,
                    method: "GET",
                    credentials: "include"
                });
                if(!response.ok){
                    setError(`Could not fetch endpoint ${data} in: useFetch`)
                }
                const data = await response.json();
                setData(data);
            }catch(err){
                console.error(err)
            }finally{
                setLoading(false)
            }

        }

        handleFetch()

        return () => abort.abort;
    }, [url])

    

  return {data, loading, error}
}

export default useFetch