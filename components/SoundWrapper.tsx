import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Audio } from 'expo-av';

type SoundWrapperProps = {
  children: React.ReactNode;
  onPress?: () => void; // Optional handler to pass through
};

const SoundWrapper = ({ children, onPress }: SoundWrapperProps) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    // Request audio permissions first
    const setupAudio = async () => {
      try {
        // Request permission (important!)
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
          shouldDuckAndroid: true,
        });
        
        // Load sound
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/sounds/click.mp3')
        );
        setSound(sound);
      } catch (error) {
        console.error("Failed to load sound", error);
      }
    };

    setupAudio();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const handlePress = async () => {
    try {
      if (sound) {
        // Reset sound position before playing
        await sound.setPositionAsync(0);
        await sound.playAsync();
      }
      
      // Call the passed onPress handler if provided
      if (onPress) {
        onPress();
      }
    } catch (error) {
      console.error("Error playing sound", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SoundWrapper;