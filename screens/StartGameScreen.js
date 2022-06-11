import { Text, View, StyleSheet } from "react-native";
import MyButton from "../components/ui/MyButton";
import MyInput from "../components/ui/MyInput";
import MyText from "../components/ui/MyText";
import GameArea from "../components/box/GameArea";
import { useNumberContext } from '../store/number-context'
import { useScreenContext } from '../store/screen-context'

export default function StartGameScreen() {
    const {
        nmb,
        setNmb,
        resetHandler,
        confirmHandler
    } = useNumberContext();

    const {
        setScreenNo
    } = useScreenContext();

    const customizeConfirmHandler = async () => {
        if (await confirmHandler()) {
            setScreenNo(1)
        }
    }

    return (
        <GameArea>
            <MyText color={'info'}>
                Keep A Number (1-99)
            </MyText>
            <MyInput action={(text) => setNmb(text)} current_value={nmb}/>
            <View style={styles.btn_container}>
                <View style={{flex: 1}}>
                    <MyButton bgColor={'danger'} action={resetHandler}>
                        <Text style={{textAlign: 'center', color: 'white'}}>RESET</Text>
                    </MyButton>
                </View>
                <View style={{flex: 1}}>
                    <MyButton bgColor={'info'} action={customizeConfirmHandler}>
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