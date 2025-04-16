import { tabsMenu } from '@/constant/tabs-menu';
import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Platform, TouchableOpacity, View, Text } from 'react-native';
import { colors } from '@/constant/color';

export default function TabLayout() {
  const [selectedTab, setSelectedTab] = useState(tabsMenu[0].path);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {
            backgroundColor: '#181818',
            borderTopWidth: 0,
            height: 55,
          },
        }),
      }}>
      {tabsMenu.map((tab: TabsMenu) => (
        <Tabs.Screen
          key={tab.id}
          name={tab.path}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(tab.path)
                  setSelectedTab(tab.path)
                }}
                className='flex-1 items-center justify-center'
              >
                <View className='flex items-center justify-center gap-y-1'>
                    {tab.icon(selectedTab === tab.path ? colors.primary : colors.gray, 24)}
                  <Text 
                    className={`${selectedTab === tab.path ? 'text-primary' : 'text-gray'} text-xs font-bold`}
                  >
                    {tab.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ),
          })}
        />
      ))}
    </Tabs>
  );
}
