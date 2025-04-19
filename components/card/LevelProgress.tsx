import React from 'react'
import Card from './Card'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import { View, Text } from 'react-native'
import { CarbonSkillLevelAdvanced } from '../icons/Level'
import { colors } from '@/constant/color'
import { LinearGradient } from 'expo-linear-gradient'
import SoundTouchable from '../SoundTouchable'

type Props = {
    progress?: number; // Progress value between 0 and 100
}

const LevelProgress = ({ progress = 23 }: Props) => {
    return (
        <Card>
            <CardHeader title='Level Progress' icon={<CarbonSkillLevelAdvanced color={colors['background-bright']} width={18} height={18} />} />
            <CardBody>
                <View className='flex flex-col gap-y-2 py-2'>
                    <View className='flex flex-row justify-between'>
                        <Text className='text-sm text-gray-light'>Level 1</Text>
                        <Text className='text-sm text-gray-light'>{progress}%</Text>
                    </View>
                    <View className='h-2 bg-gray rounded-full overflow-hidden'>
                        <LinearGradient
                            colors={[colors.primary, colors.secondary]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{
                                width: `${progress}%`,
                                height: '100%',
                            }}
                        />
                    </View>
                </View>
            </CardBody>
            <CardFooter className='flex flex-row justify-end'>
                <SoundTouchable className='p-2 bg-background-dark rounded-lg'>
                    <Text className='text-sm text-white font-bold'>Let's level up</Text>
                </SoundTouchable>
            </CardFooter>
        </Card>
    )
}

export default LevelProgress