import PoolDisplay from "@/components/PoolDisplay";
import { View, Text, ScrollView } from "react-native";

export default function RngScreen() {
    return (
        <ScrollView className='h-screen w-screen p-4 bg-background'>
            <View className='flex flex-col gap-y-2 pb-8'>
                <PoolDisplay />
            </View>
        </ScrollView>

    );
}
