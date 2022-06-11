import { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import StartGameScreen from '../screens/StartGameScreen';
import GameScreen from '../screens/GameScreen';
import GameOverScreen from '../screens/GameOverScreen';
import {useScreenContext} from '../store/screen-context';

export default function MyRouter() {
    const {
        screenNo
    } = useScreenContext()

    const [currentScreen, setCurrentScreen] = useState(<StartGameScreen/>)

    useEffect(() => {
        switch (screenNo) {
            case 0:
                setCurrentScreen(<StartGameScreen/>)   
                break;
            case 1:
                setCurrentScreen(<GameScreen/>)   
                break;
            case 2:
                setCurrentScreen(<GameOverScreen/>)   
                break;
            default:
                setCurrentScreen(<StartGameScreen/>)   
                break;
        }
    },[screenNo])

    return (
        <View>
            {currentScreen}
        </View>
    )
}