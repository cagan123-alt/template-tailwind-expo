import { Stack } from "expo-router";
import "../global.css";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync()

export default function Layout(){
    // const [fontsLoaded] = useFonts({
    //     DMBold:require("../assets/fonts/DMSans-Bold.ttf"),
    //     DMMedium:require("../assets/fonts/DMSans-Medium.ttf"),
    //     DMBold:require("../assets/fonts/DMSans-Regular.ttf"),
    // })
    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded]);
    // if (!fontsLoaded) {
    //     return null;
    // }

    return <Stack 
    
    //onLayout={onLayoutRootView} 
    
    />
}

// Path: app\components\Layout.js
// Compare this snippet from Layout.js:
// import { Stack } from "expo-router";
