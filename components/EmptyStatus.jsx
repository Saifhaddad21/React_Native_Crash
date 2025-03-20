import { View, Text, Image } from 'react-native'
import React from 'react'

import { image } from '../assets'

import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyStatus = ({ title, subtitle}) => {
    return (
        <View className="justify-center items-center px-4">
            <Image
                source={image.empty}
                className="w-[270px] h-[215px]"
                resizeMode='contain'
            />

            <Text className="text-xl text-center font-psemibold text-white mt-2">
            {title}
            </Text>
            <Text className="font-pmedium text-sm text-gray-100 ">
            {subtitle}
            </Text>

            <CustomButton 
            title="Crate Video"
            handlePress={() => router.push('/Create')}
            containerStyles="w-full my-5"
            />

        </View>
    )
}

export default EmptyStatus