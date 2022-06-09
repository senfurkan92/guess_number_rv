import { Text, View, StyleSheet } from "react-native";
import MyButton from "../components/ui/MyButton";
import MyInput from "../components/ui/MyInput";
import GameArea from "../components/box/GameArea";

export default function StartGameScreen() {
    return (
        <GameArea>
            <MyInput action={(text) => console.log(text)}/>
            <View style={styles.btn_container}>
                <View style={{flex: 1}}>
                    <MyButton bgColor={'danger'} action={() => console.log('reset')}>
                        <Text style={{textAlign: 'center', color: 'white'}}>RESET</Text>
                    </MyButton>
                </View>
                <View style={{flex: 1}}>
                    <MyButton bgColor={'info'} action={() => console.log('confirm')}>
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