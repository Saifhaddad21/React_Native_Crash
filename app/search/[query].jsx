import { View, Text} from 'react-native'
import React, { useEffect } from 'react'
import { FlatList, SafeAreaView } from 'react-native'

import SearchInput from '../../components/SearchInput'
import EmptyStatus from '../../components/EmptyStatus'
import { searchPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { useLocalSearchParams } from 'expo-router'

const Search = () => {
    const { query } = useLocalSearchParams()
    const { data: Posts, refetch } = useAppwrite(() => searchPosts(query));

    console.log(query, Posts)

    useEffect(() => {
        refetch()
    }, [query])

    return (
        <SafeAreaView className="bg-primary h-full"> 
            <FlatList
                data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                keyExtractor={(item) => item.$id}
                renderItem={(item) => (
                    <VideoCard video={item} />
                )}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4">

                        <Text className="font-pmedium text-sm text-gray-100 ">
                            Search results
                        </Text>

                        <Text className="text-2xl font-psemibold text-white">
                            {query}
                        </Text>

                        <View className="mt-6 mb-8">
                        <SearchInput intialQuery={query} />
                        </View>


                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyStatus
                        title="No videos found "
                        subTitle="No Videos found for this searh query"
                    />
                )}
            />
        </SafeAreaView>
    )

}

export default Search