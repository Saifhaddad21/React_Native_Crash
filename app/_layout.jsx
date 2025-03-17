import { Text, StyleSheet, View } from "react-native";
//  import React from "react";  // 1 :
import { Slot } from 'expo-router'

const RootLayout = () => {   // 2 : 
    return (
        <>
            <Text>Header</Text>
            <Slot />
            <Text>Footer</Text>
        </>
    )
}
/*export default RootLayout*/

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


