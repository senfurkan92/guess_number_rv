import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import MyRouter from './routes';
import { LinearGradient } from 'expo-linear-gradient'
import NumberProvider from './store/number-context'
import ScreenProvider from './store/screen-context';
import colors from './util/colors';

export default function App() {

  return ( 
      <LinearGradient style={styles.grandpa} colors={[colors.gradientStart, colors.gradientEnd]}>
        <ImageBackground source={require('./assets/dices.jpg')} resizeMode="cover" style={styles.image}
          imageStyle={{opacity:0.3}}
        >
          <SafeAreaView style={styles.content}>
            <NumberProvider>
              <ScreenProvider>
                <MyRouter></MyRouter>
              </ScreenProvider>
            </NumberProvider>
          </SafeAreaView>
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