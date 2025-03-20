import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'

import EmptyStatus from '../../components/EmptyStatus'
import { getUserPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'
import { useGlaobalContext } from '../../context/GlobalProvider'
import InfoBox from '../../components/InfoBox'

import { router } from 'expo-router'


const Profile = () => {
    const { user, setUser, setIsLoggedIn } = useGlaobalContext();
    const { data: Posts } = useAppwrite(() => getUserPosts(user.$id));

    console.log(query, Posts)

    const logout = async () => {
        await signOut();
        setUser(null)
        setIsLoggedIn(false)

        router.replace('/sign-in')
    }

    return (

        <SafeAreaView className="bg-primary h-full">

            <FlatList
                data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                keyExtractor={(item) => item.$id}
                renderItem={(item) => (
                    <VideoCard video={item} />
                )}

                ListHeaderComponent={() => (
                    <View className="w-full justify-center items-center mt-6 mb-12 px-4">

                        <TouchableOpacity
                            className="w-full items-end mb-10"
                            onPress={logout}
                        >
                            <Image
                                source={icons.logout}
                                resizeMode='contain'
                                className="w-6 h-6 "
                            />
                        </TouchableOpacity>

                        <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
                            <Image
                                source={{ uri: user?.avatar }}
                                className="w-[90%] h-[90%] rounded-lg"
                                resizeMode='cover'
                            />
                        </View>

                        <InfoBox
                            title={title?.username}
                            containerStyles='mt-5'
                            titleStyles='text-lg'
                        />

                        <View className="mt-5 flex-row ">
                            <InfoBox
                                title={Posts.length || 0}
                                subTitle="Posts"
                                containerStyles='mr-10'
                                titleStyles='text-xl'
                            />
                            <InfoBox
                                title="1.2k"
                                subTitle="Followers"
                                titleStyles='text-xl'
                            />
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

export default Profile