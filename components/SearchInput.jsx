import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web'

import { search } from '../assets/icons/search.png'

import { router, usePathname } from 'expo-router'



const SearchInput = ( { intiilQuery } ) => {

    const pathname = usePathname()

    const [query, setQuery] = useState(intiilQuery || '')

    return (
            <View className="border-2 border-balck-200 w-full h-16 px-4 bg-black-100 rounded-2xl
            focus:border-secondary items-center flex-row space-x-4 ">
                <TextInput
                    className="text-base mt-0.5 text-white flex-1 font-pregular " 
                    value={query}
                    placeholder="Search for a video topic"
                    placeholderTextColor="#CDCDE0"
                    onChangeText={(e) => setQuery(e)}
                />

                <TouchableOpacity
                onPress={() => {
                    if(!query) {
                        return Alert.alert('Missing query', "Plese input something to search result across database")
                    }
                    if(pathname.startsWith('/search')) router.setParams({ query })
                        else router.push(`/search/${query}`)
                }}
                >
                    <Image 
                    source={search}
                    className="w-5 h-5"
                    resizeMode='contain'
                    /> 

                </TouchableOpacity>
            </View>
    )
}

export default SearchInput