import { StyleSheet, View } from 'react-native'
import colors from '../../util/colors'

export default function GameArea({children}) {
    return (
        <View style={styles.container}>
            <View style={styles.sub_container}>
                {children}
            </View>
        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 10,
        elevation: 100,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height:20
        },
        shadowRadius: 20,
        shadowOpacity: 0,
        backgroundColor: colors.snow,
    },
    sub_container: {
        borderRadius: 20,
        backgroundColor: 'transparent'
    }
})