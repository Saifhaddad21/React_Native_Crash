import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ScrollView } from 'react-native-web'

import { Images } from '../../assets/image'
import FormField from '../../components/FormField'

import  CustomButton  from '../../components/FormField'

const SingIn = () => {
const [form, setform] = useState({
    email: '',
    password: ''
})

    return (
        <SafeAreaView className="bg-primary h-full ">
            <ScrollView>
                <View className="w-full h-full justify-center px-4 my6">

                    <Image
                        source={Images.logo}
                        resizeMode='contain'
                        className="w-[115px] h-[35px] "
                    />

                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                        Log in to Aora
                    </Text>

                    <FormField 
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setform({ ...form,
                        email: e })}
                    otherStyles="mt-7"
                    keyboardType="email-address"
                    />

                    <FormField 
                    title="Password"
                    value={form.password}
                    handleChangeText={(e) => setform({ ...form,
                        password: e })}
                    otherStyles="mt-7"
                    />

                    <CustomButton 
                    
                    />
                
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SingIn