import { createContext, useContext, useState } from "react"

const InputContext = createContext(null)

export default function InputVal({ children }) {

    const [ inputValue, setInputValue ] = useState("");

    return (
        <InputContext.Provider value={{ inputValue, setInputValue}}>
            {children} 
        </InputContext.Provider>
    )
}

export function useInputVal(){
    return useContext(InputContext);
}