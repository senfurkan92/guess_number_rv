import { Text, View, StyleSheet } from "react-native";
import MyButton from "../components/ui/MyButton";
import MyInput from "../components/ui/MyInput";
import GameArea from "../components/box/GameArea";
import { useState } from "react";
import { inputSchema } from '../schemas/index'


export default function StartGameScreen() {
    const [nmb, setNmb] = useState('1')

    const confirmHandler = async () => {
        inputSchema.validate({
            number: nmb
        }, {
            abortEarly: false
        })
            .then(x => alert(x.number))
            .catch(err => {
                const list = err.inner.map(x => x.message)
                alert(list.join('... '))
            })
    }

    const resetHandler = () => {
        setNmb('1')
    }

    return (
        <GameArea>
            <MyInput action={(text) => setNmb(text)} current_value={nmb}/>
            <View style={styles.btn_container}>
                <View style={{flex: 1}}>
                    <MyButton bgColor={'danger'} action={resetHandler}>
                        <Text style={{textAlign: 'center', color: 'white'}}>RESET</Text>
                    </MyButton>
                </View>
                <View style={{flex: 1}}>
                    <MyButton bgColor={'info'} action={confirmHandler}>
                        <Text style={{textAlign: 'center', color: 'white'}}>CONFIRM</Text>
                    </MyButton>
                </View>
            </View>
        </GameArea>
    )
}

const styles = StyleSheet.create({
    btn_container: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    }
})