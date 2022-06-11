import { FlatList, Text, StyleSheet, View } from 'react-native'
import colors from '../../util/colors'

export default function MyLogs({logs}) {
    const flatItem = ({item, index}) => (
        <View style={styles.area}>
            <Text style={{textAlign: 'center', fontFamily: 'default-font'}}>{item}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList contentContainerStyle={styles.list}
                data={logs} 
                renderItem={(e) => flatItem(e) } 
                keyExtractor={(item, index) => index } 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 450
    },
    list: {
        flexGrow: 1
    },  
    area: {
        backgroundColor: colors.snow,
        padding: 4,
        margin: 4,
        borderRadius: 10,
    }
})