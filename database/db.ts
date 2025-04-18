import AsyncStorage from '@react-native-async-storage/async-storage';

export const savePlayer = async (player: Player) => {
  await AsyncStorage.setItem('player', JSON.stringify(player));
};

export const loadPlayer = async (): Promise<Player | null> => {
  const data = await AsyncStorage.getItem('player');
  return data ? JSON.parse(data) : null;
};

export const clearPlayer = async () => {
  await AsyncStorage.removeItem('player');
};
