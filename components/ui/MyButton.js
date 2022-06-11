import { Pressable, View, StyleSheet } from 'react-native'
import colors from '../../util/colors';

export default function MyButton({children, bgColor, action}) {
    const btnStyle = ({pressed}) => [styles.btn, { backgroundColor: colors[bgColor || 'default'], opacity: !pressed ? 1 : 0.5}]
    const pressAct = () => (action && typeof action === 'function') && action()

    return ( 
        <View style={styles.btn_container}>
            <Pressable style={(e) => btnStyle(e)} onPress={pressAct} android_ripple={{color: 'white'}}>
                <View>
                    {children}
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    btn_container: {
        overflow: 'hidden',
        borderRadius: 10,
        margin:10,
    },
    btn: {
        padding:10,
    },

})