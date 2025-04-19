import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import DetailCard from './DetailCard'
import Svg, { Defs, Pattern, Path, Rect } from 'react-native-svg'

// Import all possible avatar images
import maleAvatar from '@/assets/game/humans/male.png'
import femaleAvatar from '@/assets/game/humans/female.png'
import angelAvatar from '@/assets/game/humans/angel.png'

// Create a mapping of avatar names to their imported images
const avatarMap: Record<string, any> = {
    'male': maleAvatar,
    'female': femaleAvatar,
    'angel': angelAvatar,
    'default': maleAvatar // Use male as default
}

type Props = {
    player: Player
}

const CARD_WIDTH = 350
const CARD_HEIGHT = 150

const PlayerCard = ({ player }: Props) => {
    // Get the avatar image based on the player's avatar name
    const getAvatarImage = () => {
        return avatarMap[player.avatar] || avatarMap.default
    }

    return (
        <View
            className="rounded-lg w-full flex flex-row items-center overflow-hidden justify-center border-2 border-black"
            style={{ position: 'relative', height: CARD_HEIGHT }}
        >
            <Svg
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
                viewBox={`0 0 ${CARD_WIDTH} ${CARD_HEIGHT}`}
                style={StyleSheet.absoluteFillObject}
            >
                <Defs>
                    <Pattern
                        id="minorGrid"
                        width="50"
                        height="50"
                        patternUnits="userSpaceOnUse"
                    >
                        <Path
                            d="M 160 0 L 0 0 0 160"
                            fill="none"
                            stroke="#1a1f26"
                            strokeWidth="1"
                        />
                    </Pattern>
                </Defs>
                <Rect width={CARD_WIDTH} height={CARD_HEIGHT} fill="url(#minorGrid)" />
            </Svg>

            {/* Content */}
            <View className="flex-1 items-center">
                <Image
                    source={getAvatarImage()}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                />
            </View>

            <View className="flex-1 flex gap-y-2">
                <DetailCard isTransform={true} title="Name" value={player.name || 'Unknown'} />
                <DetailCard isTransform={false} title="Level" value={(player.level || 1).toString()} />
                <DetailCard isTransform={false} title="Inventory" value={(player.inventory?.length || 0).toString()} />
                <DetailCard isTransform={true} title="Solved" value={(player.solved || 0).toString()} />
            </View>
        </View>
    )
}

export default PlayerCard
