import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-web';

import { Images } from '../assets/image'

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%'}}>  
                <View className="w-full justify-center items-center h-full px-4">
                <Image 
                source={Images.logo}
                className="w-[130px] h-[84px]"
                resizeMode="contain"
                />

                <Image
                source={Images.cards}
                className="max-w-[380px] w-full h-[300px]"
                resizeMode="contain"
                />

                <View className="relative mt-5">

                </View>

                </View>
            </ScrollView>

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
