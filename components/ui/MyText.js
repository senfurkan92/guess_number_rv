import { Text, StyleSheet, View } from 'react-native' 
import colors from '../../util/colors';

export default function MyText({children, color}) {
    return (
        <View style={styles.container}>
            <Text 
                style={[styles.text, {
                    color: colors[color || 'default']
                }]} 
            >
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        alignItems: 'center',
    },  
    text: {
        padding:5,
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'default-font'
    },
})