# Context-Hook
1. useContext() to store userData fetched and use for other Component
2. change theme color

* create Context **export const AppContext = createContext({})**</br> and **export const AppProvider = ({ children }) => {logic_useEffect_useState_here}**  at *src/Context/AppContext.js*
  * useEffect() to fetch userData and save into useState()
  * return Component **<AppContext.Provider value={{value_of_state}}>{children}</AppContext.Provider>**
* *import { AppProvider } from './Context/AppContext';* and wrap all Component wanna use params in **AppProvider**
