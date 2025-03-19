import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ScrollView } from 'react-native-web'
import { Link, router } from 'expo-router'


import { Images } from '../../assets/image'
import FormField from '../../components/FormField'

import CustomButton from '../../components/CustomButton'

import { createUser } from '../../lib/appwrite'

const SingUp = () => {
    const [form, setform] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {
        if (!form.username || !form.email || !form.password) {
            Alert.alert('Error', 'please fill in all the fields')
        }
        setIsSubmitting(true)

        try {
            const result = await createUser(form.email, form.password, form.username)

            //set it tpo global state...

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
                        source={Images.logo}
                        resizeMode='contain'
                        className="w-[115px] h-[35px] "
                    />

                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                        Sign up to Aora
                    </Text>

                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setform({
                            ...form,
                            username: e
                        })}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setform({
                            ...form,
                            email: e
                        })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setform({
                            ...form,
                            password: e
                        })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="Sing Up"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center pt-5 flex-row gab-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Have an account already ?
                        </Text>

                        <Link href="/sign-in" className='text-lg font-psemibold text-secondary' > Sign in
                        </Link>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SingUp