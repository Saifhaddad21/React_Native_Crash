import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { Image } from 'react-native'

import FormField from '../../components/FormField'

import  CustomButton  from '../../components/CustomButton'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { useGlaobalContext } from '../../context/GlobalProvider'

const SingIn = () => {
    const { setUser, setIsLoggedIn} = useGlaobalContext
    const [form, setform] = useState({
        email: '',
        password: ''
})

const [isSubmitting, setIsSubmitting] = useState(false)

const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert('Error', 'please fill in all the fields')
        }
        setIsSubmitting(true)

        try {
            await signIn(form.email, form.password)

            const result = await getCurrentUser();

            setUser(result);
            setIsLoggedIn(true);

            router.replace('/home')
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <SafeAreaView className="bg-primary h-full ">
            <ScrollView>
                <View className="w-full min-h-[85vh] justify-center px-4 my6">

                    <Image
                        source={Image.logo}
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