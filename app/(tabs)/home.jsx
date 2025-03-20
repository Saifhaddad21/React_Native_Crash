import { View, Text, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView } from 'react-native'

import { images } from '../../assets'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyStatus from '../../components/EmptyStatus'
import { getAllPosts } from '../../lib/appwrite'

const Home = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await getAllPosts()

                setData(response);
            } catch (error) {
                Alert.alert('Error' ,error.message)
            }finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    console.log(data);

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = async () => {
        setRefreshing(true);
        // re call videos -> if any new videos appeard 
        setRefreshing(false);
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <FlatList
                data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                keyExtractor={(item) => item.$id}
                renderItem={(item) => (
                    <Text className="text-3xl text-white"> {item.id}  </Text>
                )}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6 ">
                        <View className="justify-between items-start flex-row mb-6">

                            <View>
                                <Text className="font-pmedium text-sm text-gray-100 ">
                                    Welcome back
                                </Text>
                                <Text className="text-2xl font-psemibold text-white">
                                    JSmastery
                                </Text>
                            </View>

                            <View className="mt-1.5">
                                <Image
                                    source={images.Logo - small}
                                    className="w-9 h-10"
                                    resizeMode='contain'
                                />
                            </View>
                        </View>

                        <SearchInput

                        />

                        <View className="w-full flex-1 pt-5 pb-8">
                            <Text className="text-gray-100 text-lg font-pregular mb-3">
                                Latest videos
                            </Text>

                            <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? [] } />

                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyStatus
                    title="No videos found "
                    subTitle="be the first one to upload a video "
                    />
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        </SafeAreaView>
    )
}

export default Home