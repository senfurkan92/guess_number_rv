import { Text, View } from "react-native";
import GameArea from '../components/box/GameArea'
import MyButton from "../components/ui/MyButton";
import MyText from "../components/ui/MyText";
import { useScreenContext } from '../store/screen-context'
import { useNumberContext } from '../store/number-context'

export default function GameOverScreen() {
    const { setScreenNo } = useScreenContext();
    const { resetHandler } = useNumberContext();

    const replay = () => {
        resetHandler()
        setScreenNo(0)
    }

    return (
        <GameArea>
            <MyText color={'info'}>
                Play Again
            </MyText>
            <MyButton action={replay} bgColor={'default'}>
                <Text style={{textAlign: 'center'}}>Play</Text>
            </MyButton>
        </GameArea>
    )
}
