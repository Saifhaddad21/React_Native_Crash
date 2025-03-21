import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-web';

import {logo} from '../assets/image/logo.png'
import {cards} from '../assets/image/cards.png'
import {path} from '../assets/image/path.png'

import {CustomButton } from '../components/CustomButton';
import { useGlaobalContext } from '../context/GlobalProvider';

export default function App() {
const {isLoading,isLoggedIn } = useGlaobalContext();

if(!isLoading && !isLoggedIn) return <Redirect href="/home"/>

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center min-h-[84px] px-4">
                    <Image
                        source={logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />

                    <Image
                        source={cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode="contain"
                    />

                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                            Discover Endless Possibilities with {' '}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>

                        <Image
                            source={path}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                            resizeMode="contain"
                        />
                    </View>

                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovadtion: embark on a 
                        journy of limitless exploration with Aora</Text>

                        <CustomButton
                        title="Continue with email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"
                        />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light'/>

        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
