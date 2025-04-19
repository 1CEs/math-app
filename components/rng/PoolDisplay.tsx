import React from "react";
import { View, Text, ScrollView } from "react-native";
import Divider from "../Divider";
import { colors, RarityColors } from "@/constant/color";
import { EntypoInfoWithCircle } from "../icons/Info";
import Tooltip from "../Tooltip";

export default function PoolDisplay() {

  return (
    <View className="p-4 bg-background-bright flex-1 gap-y-2 rounded-lg">
      <Divider content="Rewards Pool" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="h-28 bg-background-dark p-4 rounded-lg"
      >
        <View className="flex flex-row gap-x-4 items-center">
          {Object.keys(RarityColors).map((rarity, index) => (
            <View 
              style={{ borderColor: RarityColors[rarity as RarityType] }}
              key={index} 
              className="flex-1 items-center justify-center w-20 h-20 bg-background-dark border-2 border-background-bright rounded-lg">
              <Text style={{ color: RarityColors[rarity as RarityType] }} className=" text-xs font-bold">{rarity}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View className="flex flex-row gap-x-4 items-center justify-between">
          <Tooltip content="Information about the rewards pool">
            <EntypoInfoWithCircle color={colors['gray']} width={14} height={14} />
          </Tooltip>
          <Text className="text-white text-xs font-bold">Reset in 4:30</Text>
      </View>
    </View>
  );
}
