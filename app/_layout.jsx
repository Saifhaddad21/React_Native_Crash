// import { Text, StyleSheet, View } from "react-native";
// //  import React from "react";  // 1 :
// import { Slot, SplashScreen, Stack } from 'expo-router'
// import { useFonts } from "expo-font";
// import { useEffect } from "react";
// import GlobalProvider from '../context/GlobalProvider'
// import { useGlobalContext } from '../context/GlobalProvider'; // Correct import


// SplashScreen.preventAutoHideAsync();

// const RootLayout = () => {

//     const [fontsLoaded, error] = useFonts({
//         "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
//         "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
//         "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
//         "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
//         "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
//         "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
//         "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
//         "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
//     });


//     // const [fontsLoaded, error] = useFonts ({
//     //     "Poppins-Black": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-Black.ttf") ,
//     //     "Poppins-Bold": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-Bold.ttf") ,
//     //     "Poppins-ExtraBold": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-ExtraBold.ttf") ,
//     //     "Poppins-ExtraLight": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-ExtraLight.ttf") ,
//     //     "Poppins-Light": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-Light.ttf") ,
//     //     "Poppins-Regular": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-Regular.ttf") ,
//     //     "Poppins-SemiBold": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-SemiBold.ttf") ,
//     //     "Poppins-Thin": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-Thin.ttf") ,
//     // });

//     useEffect(() => {
//         if (error) throw error;

//         if (fontsLoaded) SplashScreen.hideAsync();
//     }, [fontsLoaded, error])

//     if (!fontsLoaded && !error) return null;


//     return (
//         <GlobalProvider>
//             <Stack>
//                 <Stack.Screen name="index" options={{ headerShown: false }} />
//                 <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//                 <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//                 <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
//             </Stack>
//         </GlobalProvider>
//     )
// }


// export default RootLayout
// /*
// const RootLayout = () => {   // 2 : 
//     return (
//         <>
//             <Text>Header</Text>
//             <Slot />
//             <Text>Footer</Text>
//         </>
//     )
// }
// export default RootLayout
//     */


// /*   //  1 :
// const RootLayout = () => {
//     return (
//         <View style={styles.container}>
//             <Text>RootLayout</Text>
//         </View>
//     )
// }

// export default RootLayout 

// const styles = StyleSheet.create({
//     container: {
//         display: "flex",
//         flex: "1",
//         justifyContent: "center",
//         alignItems: "center"
//         }
// })
//         */





///////////////////////////////////////////////////////////////////////


// import { useGlobalContext } from '../context/GlobalProvider'; // Correct import
// import GlobalProvider from '../context/GlobalProvider'; // Correct import for GlobalProvider
// import { Stack } from 'expo-router';
// import { useFonts } from 'expo-font';
// import { useEffect } from 'react';
// import { SplashScreen } from 'expo-router';

// SplashScreen.preventAutoHideAsync();

// const RootLayout = () => {
//     const [fontsLoaded, error] = useFonts({
//         "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
//         "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
//         "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
//         "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
//         "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
//         "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
//         "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
//         "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
//     });

//     useEffect(() => {
//         if (error) throw error;
//         if (fontsLoaded) SplashScreen.hideAsync();
//     }, [fontsLoaded, error]);

//     if (!fontsLoaded && !error) return null;

//     return (
//         <GlobalProvider>
//             <Stack>
//                 <Stack.Screen name="index" options={{ headerShown: false }} />
//                 <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//                 <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//                 <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
//             </Stack>
//         </GlobalProvider>
//     );
// };

// export default RootLayout;


////////////////////////////////////////////////////////////////

import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { Stack } from 'expo-router';
import GlobalProvider from '../context/GlobalProvider';  
import { useGlobalContext } from '../context/GlobalProvider';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return (
        <GlobalProvider>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
            </Stack>
        </GlobalProvider>
    );
};

export default RootLayout;
