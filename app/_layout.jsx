import { Text, StyleSheet, View } from "react-native";
//  import React from "react";  // 1 :
import { Slot, SplashScreen, Stack  } from 'expo-router' 
import { useFonts } from "expo-font";
import { useEffect } from "react";
import GlobalProvider from '../context/GlobalProvider'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
const [fontsLoaded, error] = useFonts ({
    "Poppins-Black": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-Black.ttf") ,
    "Poppins-Bold": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-Bold.ttf") ,
    "Poppins-ExtraBold": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-ExtraBold.ttf") ,
    "Poppins-ExtraLight": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-ExtraLight.ttf") ,
    "Poppins-Light": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-Light.ttf") ,
    "Poppins-Regular": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-Regular.ttf") ,
    "Poppins-SemiBold": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-SemiBold.ttf") ,
    "Poppins-Thin": require("D:\Saif-Project\react_native_crash_course\assets\fonts\Poppins-Thin.ttf") ,
});

useEffect ( () => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
}, [fontsLoaded, error])

if(!fontsLoaded && !error) return null;


    return (
        <GlobalProvider>
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: flase}}/>
            <Stack.Screen name="(auth)" options={{ headerShown: flase}}/>
            <Stack.Screen name="(tabs)" options={{ headerShown: flase}}/>
            {/* <Stack.Screen name="/search/[query]" options={{ headerShown: flase}}/> */}
        </Stack>
        </GlobalProvider>
    )
}


export default RootLayout
/*
const RootLayout = () => {   // 2 : 
    return (
        <>
            <Text>Header</Text>
            <Slot />
            <Text>Footer</Text>
        </>
    )
}
export default RootLayout
    */


/*   //  1 :
const RootLayout = () => {
    return (
        <View style={styles.container}>
            <Text>RootLayout</Text>
        </View>
    )
}

export default RootLayout 

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: "1",
        justifyContent: "center",
        alignItems: "center"
        }
})
        */


