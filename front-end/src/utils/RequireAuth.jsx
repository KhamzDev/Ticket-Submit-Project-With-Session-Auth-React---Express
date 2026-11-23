import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


function RequireAuth({ children }) {

    const [data, setData] = useState(null);

    useEffect(() => {

        const handleFetch = async () => {
            try{
                const response = await fetch("http://localhost:3000/api/auth/check", {
                    credentials: "include"
                });
                if(!response.ok){
                    throw new Error(`Could not check auth in: RequireAuth`);
                }
                const data = await response.json();
                setData(data);
            }catch(err){
                console.log(err)
                setData({loginStatus: false})
            }

        }

        handleFetch();

    }, []);

    if(data === null) return;

    return data?.loginStatus !== true ? <Navigate to="/login" replace/> : children

}

export default RequireAuth