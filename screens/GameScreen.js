import { View, Alert, StyleSheet, Text } from "react-native"
import { useEffect, useState } from "react"
import { useNumberContext } from '../store/number-context'
import { useScreenContext } from '../store/screen-context'
import GameArea from '../components/box/GameArea'
import MyText from '../components/ui/MyText'
import MyButton from "../components/ui/MyButton";
import MyLogs from "../components/ui/MyLogs"
import { randomGenarator } from '../util/methods'
import { Ionicons } from '@expo/vector-icons'

export default function GameScreen() {
    const {
        nmb,
    } = useNumberContext();
    const {
        setScreenNo
    } = useScreenContext();

    const [guessed, setGuessed] = useState('')
    const [guessHistory, setGuessHistory] = useState([])

    useEffect(() => {
        const random = randomGenarator(1, 99)
        setGuessed(random)
        addLog(random)
    } ,[])

    useEffect(() => {
        guessed && !guessHistory.includes(guessed) && addLog(guessed)
        if(guessed == nmb) {
            Alert.alert('Success', `The number has been found as ${guessed}`, [
                {
                    text: 'OK',
                    onPress: () => setScreenNo(2)
                }
            ]) 
        }
    } ,[guessed])

    const addLog = (logValue) => {
        setGuessHistory([
            ...guessHistory,
            logValue
        ])
    }

    const lowBtnClick = () => {
        if (guessed < nmb) {
            Alert.alert('Not lower', 'liar')
        } else {
            let sorted = guessHistory.sort((a,b) => a-b)

            let index = sorted.indexOf(guessed)
            let min = sorted[index-1] + 1 || 1

            const random = randomGenarator(min, guessed - 1)
            setGuessed(random)
        }        
    }

    const hignBtnClick = () => {
        if (guessed > nmb) {
            Alert.alert('Not higher', 'liar')
        } else {
            const sorted = guessHistory.sort((a,b) => a-b)

            let index = sorted.indexOf(guessed)
            let max = sorted[index+1] - 1 || 99
            
            const random = randomGenarator(guessed + 1, max)
            setGuessed(random)
        }
    }

    return (
        <View>
            <GameArea>
                <MyText color={'info'}>
                    Guess The Number
                </MyText>
                <MyText color={'secondary'}>Guessed: {guessed}</MyText>  
                <View style={styles.btn_container}>
                    <View style={{flex: 1}}>
                        <MyButton bgColor={'danger'} action={() => lowBtnClick()}>
                            <Ionicons name="remove-circle-outline" color={'snow'} size={18} style={{textAlign: "center"}}/>
                        </MyButton>
                    </View>
                    <View style={{flex: 1}}>
                        <MyButton bgColor={'info'} action={() => hignBtnClick()}>
                            <Ionicons name="add-circle-outline" color={'snow'} size={18} style={{textAlign: "center"}}/>
                        </MyButton>
                    </View>
                </View>
            </GameArea>
            <GameArea>
                <MyLogs logs={guessHistory}></MyLogs>
            </GameArea>    
        </View>
    )
}

const styles = StyleSheet.create({
    btn_container: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    }
})