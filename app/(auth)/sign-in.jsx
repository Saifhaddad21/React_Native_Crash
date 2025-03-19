import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ScrollView } from 'react-native-web'
import { Link } from 'expo-router'


import { Images } from '../../assets/image'
import FormField from '../../components/FormField'

import  CustomButton  from '../../components/CustomButton'

const SingIn = () => {
const [form, setform] = useState({
    email: '',
    password: ''
})

const [isSubmitting, setIsSubmitting] = useState(false)

const submit = () => {

}

    return (
        <SafeAreaView className="bg-primary h-full ">
            <ScrollView>
                <View className="w-full min-h-[85vh] justify-center px-4 my6">

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
                        title="Sing In"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center pt-5 flex-row gab-2"> 
                        <Text className="text-lg text-gray-100 font-pregular">
                            D'ont have account?
                        </Text>

                        <Link href="/sign-up" className='text-lg font-psemibold text-secondary' > Sign Up
                        </Link>

                    </View>
                
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SingIn