import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import '../global.css';
import SoundWrapper from '@/components/SoundWrapper';
import ChooseScreen from './choose';
import { usePlayerStore } from '@/store/player.store';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    'default': require('../assets/fonts/default.ttf'),
  });
  const loadPlayer = usePlayerStore((state) => state.loadPlayerFromStorage);
  const player = usePlayerStore((state) => state.player);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    loadPlayer();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View className='flex-1'>
      {player ? (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      ) : (
        <ChooseScreen/>
      )}
    </View>
  );
}
