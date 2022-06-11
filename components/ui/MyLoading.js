import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import LottieView from "lottie-react-native";

export default function MyLoading() {
    return (
        <View style={styles.container}>         
            <LottieView source={require('../../assets/99947-loader.json')} autoPlay loop style={{backgroundColor: 'transparent'}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
    },
})
