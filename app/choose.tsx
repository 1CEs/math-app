import SelectorBox from "@/components/box/SelectorBox";
import { View, Text, TextInput, Platform, Image, ImageSourcePropType } from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from "@/constant/color";
import { StreamlineEmojisGameDice } from "@/components/icons/Dice2";
import SoundTouchable from "@/components/SoundTouchable";
import { usePlayerStore } from "@/store/player.store";
import Background from "@/components/Background";
import uuid from 'react-native-uuid';

const randomNames = [
    "Alex", "Jordan", "Taylor", "Morgan", "Casey",
    "Riley", "Jamie", "Quinn", "Drew", "Blake",
    "Sam", "Charlie", "Max", "Avery", "Skyler",
    "Peyton", "Dylan", "Reese", "Bailey", "Cameron"
];

export default function ChooseScreen() {
    const [selected, setSelected] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("male.png");
    const [avatarImage, setAvatarImage] = useState<ImageSourcePropType>(require("@/assets/game/humans/male.png"));

    const { player } = usePlayerStore();

    useEffect(() => {
        console.log("Player state updated:", player);
    }, [player]);

    const handleEnter = () => {
        if (!name.trim()) {
            return;
        }
        const newPlayer = {
            id: uuid.v4(),
            name,
            avatar,
            inventory: [],
            level: 1,
            solved: 0
        };

        usePlayerStore.getState().setPlayer(newPlayer);
    }

    const generateRandomName = () => {
        const randomIndex = Math.floor(Math.random() * randomNames.length);
        setName(randomNames[randomIndex]);
    }

    return (
        <Background className="flex-1 items-center bg-background justify-center gap-y-3">
            <Text style={{ color: "#fff" }} className="text-xl uppercase font-extrabold text-center text-white">Choose your character</Text>
            <View className="flex flex-row items-center py-8">
                <Image style={{ width: 200, height: 200 }} source={avatarImage} />
            </View>
            <View className=" flex flex-row gap-x-3 rounded-lg">
                {[
                    { path: "male.png", image: require("@/assets/game/humans/male.png") },
                    { path: "female.png", image: require("@/assets/game/humans/female.png") }
                ].map((item, idx) => (
                    <SelectorBox
                        key={idx}
                        imagePath={item.image}
                        isSelected={selected === idx}
                        handleSelect={() => {
                            setSelected(idx)
                            setAvatar(item.path)
                            setAvatarImage(item.image)
                        }}
                    />
                ))}
            </View>
            <View className="flex gap-y-3">
                <View className="flex flex-row items-center gap-x-3 w-1/3">
                    <TextInput
                        style={{ textAlignVertical: "bottom" }}
                        placeholder="Enter your name"
                        className="w-full text-white h-10 text-center placeholder:text-xs placeholder:text-gray-light bg-background/50 border border-gray-light rounded-lg"
                        onChangeText={(text) => setName(text)}
                        value={name}
                    />
                    <SoundTouchable
                        className="rounded-lg"
                        onPress={generateRandomName}
                    >
                        <StreamlineEmojisGameDice width={26} height={26} />
                    </SoundTouchable>
                </View>
                <SoundTouchable onPress={handleEnter} className="rounded-lg" disabled={!name.trim()}>
                    {Platform.OS === 'web' ? (
                        <View style={{
                            backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                            padding: 8,
                            borderRadius: 8,
                            opacity: !name.trim() ? 0.5 : 1
                        }}>
                            <Text style={{ color: "#fff" }} className="text-sm font-bold text-center text-white">Enter</Text>
                        </View>
                    ) : (
                        <LinearGradient
                            colors={[colors.primary, colors.secondary]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ padding: 8, borderRadius: 8, opacity: !name.trim() ? 0.5 : 1 }}
                        >
                            <Text style={{ color: "#fff" }} className="text-sm font-bold text-center text-white">Enter</Text>
                        </LinearGradient>
                    )}
                </SoundTouchable>
            </View>
        </Background>
    );
}