import SelectorBox from "@/components/box/Selector-box";
import { View, Text } from "react-native";
import { useState } from "react";

export default function ChooseScreen() {
    const [selected, setSelected] = useState<number>(0);
  return (
    <View className="flex-1 items-center justify-center gap-y-5 bg-background">
      <Text style={{ color: "#fff", fontFamily: "Default"}} className="text-2xl font-bold text-center text-white">Choose your character</Text>
      <View className=" flex flex-row bg-background gap-x-3 rounded-lg">
        {[0, 1].map((item) => (
          <SelectorBox key={item} isSelected={selected === item} handleSelect={() => setSelected(item)} />
        ))}
      </View>
    </View>
  );
}