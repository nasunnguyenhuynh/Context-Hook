import { useState, useEffect, createContext } from "react";

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDay, setIsDay] = useState(true);
    const [userData, setUserdata] = useState({})

    const themeStyle = {
        day: {
            backgroundColor: 'rgb(228, 228, 228)',
            color: 'black'
        },
        night: {
            backgroundColor: 'black',
            color: 'white'
        }
    }

    useEffect(() => {
        fetch('https://reqres.in/api/users/2')
            .then(res => res.json())
            .then(res => {
                setUserdata(res.data)
                console.log(res.data)
            })
    }, [])

    return <AppContext.Provider value={{
        userData, isOpen, setIsOpen, isDay, setIsDay,
        themeStyle: themeStyle[isDay ? 'day' : 'night']
    }}>
        {children}
    </AppContext.Provider>
}

