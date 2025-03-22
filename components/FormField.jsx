import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web'

import {eye} from '../assets/icons/eye.png'
import {eyehide} from '../assets/icons/eye-hide.png'


const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium">
                {title}</Text>

            <View className="border-2 border-balck-200 w-full h-16 px-4 bg-black-100 rounded-2xl
            focus:border-secondary items-center flex-row">
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'password' && !showPassword}
                />

                {title === 'password' && (
                    <TouchableOpacity onPress={() =>
                        setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? eye : eye-hide}
                            className="w-6 h-6"
                            resizeMode='contain'
                        />

                    </TouchableOpacity>
                )}
            </View>

        </View>
    )
}

export default FormField