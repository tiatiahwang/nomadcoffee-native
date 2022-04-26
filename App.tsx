import { useState } from 'react';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import client, { cache } from './apollo/client';
import { isLoggedInVar, TOKEN, tokenVar } from './apollo/vars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageWrapper, persistCache } from 'apollo3-cache-persist';
import TabsNav from './navigators/TabsNav';

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preloadAssets = async () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [
      require('./assets/logo.png'),
      require('./assets/logo_letter.png'),
    ];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    await Promise.all([...fontPromises, ...imagePromises]);
  };
  const preload = async () => {
    const token = await AsyncStorage.getItem(TOKEN);
    if (token) {
      isLoggedInVar(true);
      tokenVar(token);
    }
    await persistCache({
      cache,
      storage: new AsyncStorageWrapper(AsyncStorage),
    });
    return preloadAssets();
  };
  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <TabsNav />
      </NavigationContainer>
    </ApolloProvider>
  );
}
