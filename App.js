import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.grandpa}>
      <ImageBackground source={require('./assets/dices.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <StartGameScreen/>
        </View>
      </ImageBackground>
    </View>
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