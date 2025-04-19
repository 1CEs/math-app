import LevelProgress from "@/components/card/LevelProgress";
import Divider from "@/components/Divider";
import Helper from "@/components/rng/Helper";
import PoolDisplay from "@/components/rng/PoolDisplay";
import RNGSubTabs from "@/components/rng/RNGSubTabs";
import { View, Text, ScrollView } from "react-native";

export default function RngScreen() {
    return (
        <ScrollView className='h-screen w-screen p-4 bg-background'>
            <View className='flex flex-col gap-y-2 pb-8'>
                <PoolDisplay />
                <Helper />
                <LevelProgress noFooter={true} />
                <Divider content="SOLVE IT" />
                <RNGSubTabs />
            </View>
        </ScrollView>

    );
}
