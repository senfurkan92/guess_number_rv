import { createContext, useContext, useState } from 'react'
import { Alert } from 'react-native'
import { inputSchema } from '../schemas/index'

const NumberContext = createContext();

export default function NumberProvider({children}) {
    const [nmb, setNmb] = useState('')

    const resetHandler = () => {
        setNmb('')
    }

    const confirmHandler = () => {
        return inputSchema.validate({
            number: nmb
        }, {
            abortEarly: false
        })
            .then(x => true)
            .catch(err => {
                const list = err.inner.map(x => x.message)
                Alert.alert('Validation Error', list.join('... '), [
                    {
                        text: 'Ok',
                        style: 'destructive',
                        onPress: () => resetHandler()
                    }
                ])
                return false
            })
    }

   return (
    <NumberContext.Provider value={{
        nmb,
        setNmb,
        resetHandler,
        confirmHandler
    }}>
        {children}
    </NumberContext.Provider>
   ) 
}

export const useNumberContext = () => useContext(NumberContext);