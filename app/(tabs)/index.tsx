import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import PlayerCard from '@/components/card/PlayerCard';
import { usePlayerStore } from '@/store/player.store';
import LevelProgress from '@/components/card/LevelProgress';
import SoundTouchable from '@/components/SoundTouchable';
import { useNavigation } from 'expo-router';
import { Image } from 'react-native';
import Divider from '@/components/Divider';
import Equipments from '@/components/Equipments';
import Alias from '@/components/card/Alias';
import StatusCard from '@/components/card/StatusCard';

export default function HomeScreen() {
  const { player } = usePlayerStore();
  const navigation = useNavigation();
  const navigationList = [
    {
      title: 'Inventory',
      iconImagePath: require('@/assets/game/icons/bag.png'),
      onPress: () => { },
    },
    {
      title: 'Pets',
      iconImagePath: require('@/assets/game/icons/pet.png'),
      onPress: () => { },
    },
    {
      title: 'Mounts',
      iconImagePath: require('@/assets/game/icons/mount.png'),
      onPress: () => { },
    },
    {
      title: 'Evolution',
      iconImagePath: require('@/assets/game/icons/evo.png'),
      onPress: () => { },
    },
  ]
  return (
    <ScrollView className='h-screen w-screen p-4 bg-background'>
      <View className='flex flex-col gap-y-2 pb-8'>
        {player && <PlayerCard player={player} />}
        <LevelProgress />
        <View className='flex flex-row gap-x-2'>
          {navigationList.map((item) => (
            <SoundTouchable key={item.title} className='p-2 flex-1 justify-center items-center bg-background-bright rounded-lg'>
              <Image source={item.iconImagePath} className='w-14 h-14' />
              <Text className='text-gray-light font-bold text-xs'>{item.title}</Text>
            </SoundTouchable>
          ))}
        </View>
        <Divider content='EQUIPMENTS' />
        <Equipments />
        <Alias />
        <StatusCard />
      </View>

    </ScrollView>
  );
}