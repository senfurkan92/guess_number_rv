import { Pressable, View, StyleSheet } from 'react-native'

export default function MyButton({children, bgColor, action}) {
    let computedBgColor = null
    switch (bgColor) {
        case 'success':
            computedBgColor = 'rgb(55, 226, 213)'
            break;
        case 'info':
            computedBgColor = 'rgb(89, 6, 150)'
            break;
        case 'danger':
            computedBgColor = 'rgb(199, 10, 128)'
            break;
        case 'warning':
            computedBgColor = 'rgb(251, 203, 10)'
            break;
        default:
            computedBgColor = 'rgb(255, 255, 255)'
            break;
    }

    const btnStyle = ({pressed}) => [styles.btn, { backgroundColor: computedBgColor, opacity: !pressed ? 1 : 0.5}]
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