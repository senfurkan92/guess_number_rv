import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  return (
    <LinearGradient style={styles.grandpa} colors={['rgba(242, 235, 233, 1)', 'rgba(124, 62, 102, 1)']}>
      <ImageBackground source={require('./assets/dices.jpg')} resizeMode="cover" style={styles.image}
        imageStyle={{opacity:0.3}}
      >
        <View style={styles.content}>
          <StartGameScreen/>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  grandpa: {
    flex: 1
  },
  image: {
    flex: 1,
  },
  content: {
    marginVertical: '4%',
    padding: '8%'
  }
})