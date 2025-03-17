import { Text, StyleSheet, View } from "react-native";
//  import React from "react";  // 1 :
import { Slot, Stack  } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: flase}}/>
        </Stack>
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


