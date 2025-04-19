import React from 'react'
import Card from './Card'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import { View, Text } from 'react-native'
import CardFooter from './CardFooter'
import SoundTouchable from '../SoundTouchable'
import { BasilExchangeOutline } from '../icons/Change'
import { colors } from '@/constant/color'
import { RiFilePaper2Fill } from '../icons/Paper'

type Props = {}

const Alias = (props: Props) => {
    const aliasInfo = 'Alias is a nickname for your character. It is used to identify your character in the game.'
    return (
        <Card>
            <CardHeader hasInfo={true} infoContent={aliasInfo} title='Alias' icon={<RiFilePaper2Fill color={colors['background-bright']} width={18} height={18} />} />
            <CardBody>
                <View className='flex items-center gap-y-2'>
                    <Text className='text-primary font-bold  text-lg'> King of RNG</Text>
                </View>
            </CardBody>
            <CardFooter className='flex flex-row justify-between gap-x-2'>
                <SoundTouchable className='p-2 bg-background-dark rounded-lg flex flex-row items-center gap-x-2'>
                    <BasilExchangeOutline color={colors.white} />
                    <Text className='text-white font-bold text-xs'>Change</Text>
                </SoundTouchable>
                <SoundTouchable className='p-2 bg-background-dark rounded-lg flex flex-row items-center gap-x-2'>
                    <Text className='text-white font-bold text-xs'>Let's Solve</Text>
                </SoundTouchable>
            </CardFooter>
        </Card>
    )
}

export default Alias