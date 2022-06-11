import { useState, useContext, createContext } from "react";

const ScreenContext = createContext()

export default function ScreenProvider({children}) {
    const [screenNo, setScreenNo] = useState(0)

    return (
        <ScreenContext.Provider value={{
            screenNo,
            setScreenNo
        }}>
            {children}
        </ScreenContext.Provider>
    )
}

export const useScreenContext = () => useContext(ScreenContext)