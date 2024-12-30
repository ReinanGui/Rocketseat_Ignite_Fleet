import { SignIn } from './src/screens/signIn';

import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold } from '@expo-google-fonts/roboto';

import "./src/styles/global.css"
import { Loading } from './src/components/loading';
import { SafeAreaView, StatusBar } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular,Roboto_700Bold})

  if(!fontsLoaded){
    return <Loading />
  }

  return (
   <SafeAreaView className='flex-1'>
    <StatusBar
      barStyle="light-content" 
      backgroundColor="transparent" 
      translucent />
    <SignIn/>
   </SafeAreaView>
  );
}

