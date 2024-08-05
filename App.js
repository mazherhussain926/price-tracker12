import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import StackNavigator from './src/navigations/StackNavigator';
import { StatusBar } from 'expo-status-bar'; 
SplashScreen.preventAutoHideAsync();
export default function App() {
 const [loaded, error] = useFonts({
  'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf')
 });
 useEffect(() => {
   if (loaded || error) {
     SplashScreen.hideAsync();
   }
 }, [loaded, error]);

 if (!loaded && !error) {
   return null;
 }

 return (
  <>
  <StatusBar style="dark" />
    <StackNavigator/>
  </>

 )
}
