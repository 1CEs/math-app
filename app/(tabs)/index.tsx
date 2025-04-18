import { Image, StyleSheet, Platform, View } from 'react-native';

import React from 'react';
import PlayerCard from '@/components/card/PlayerCard';
import { usePlayerStore } from '@/store/player.store';
export default function HomeScreen() {
  const { player } = usePlayerStore();
  return (
    <View className='h-screen w-screen p-4 bg-background'>
      {player && <PlayerCard player={player} />}
    </View>
  );
}