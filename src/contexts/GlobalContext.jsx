import { createContext, useState} from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// aqui cria as infos salvas no contexto
    const[usuario, setUsuario] = useState('Lucas')
    const[jogadorDoDia, setJogadorDoDia] = useState ('Neymar')
    const anoDaCopa = 2026

    return(
        <GlobalContext.Provider value={{
                usuario, setUsuario, anoDaCopa, jogadorDoDia, setJogadorDoDia
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
