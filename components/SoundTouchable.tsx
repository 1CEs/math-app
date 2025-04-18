import { Audio } from 'expo-av'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
    children: React.ReactNode
}

const SoundTouchable = ({ children, onPress, ...props }: Props) => {
    const [sound, setSound] = useState<Audio.Sound | null>(null);

    useEffect(() => {
        const loadSound = async () => {
            const { sound } = await Audio.Sound.createAsync(
                require('../assets/sounds/click.mp3')
            );
            setSound(sound);
        };
        loadSound();
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    const handlePress = async (e: any) => {
        if (sound) {
            await sound.replayAsync();
        }
        onPress?.(e);
    }

    return (
        <TouchableOpacity {...props} onPress={handlePress}>
            {children}
        </TouchableOpacity>
    )
}

export default SoundTouchable