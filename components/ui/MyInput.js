import { TextInput, StyleSheet, View } from 'react-native' 
import colors from '../../util/colors'

export default function MyInput({placeholder, action, maxLength, current_value}) {

    const changeAct = (text) => (action && typeof action === 'function') && action(text.trim())

    return (
        <View style={styles.container}>
            <TextInput 
                maxLength={maxLength || 2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input} 
                placeholder={placeholder || 'Enter here...'}
                onChangeText={changeAct}
                value={current_value.toString() || ''}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom:10,
        alignItems: 'center',
    },  
    input: {
        backgroundColor: 'transparent',
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
        borderRadius: 10,
        color: colors.primary,
        padding:5,
        width: 150,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
})