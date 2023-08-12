import { useState } from "react"

import { View,Text,ScrollView,SafeAreaView } from "react-native"
import { Stack,useRouter } from "expo-router"
import { TouchableOpacity } from "react-native-gesture-handler"
import HeaderButton from "../components/HeaderButton"
import Welcome from "../components/Welcome"
import TitleButton from "../components/TitleButton"
const Home =()=>{
    const router = useRouter()

    return(
        <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
            <Stack.Screen
           options={{
            headerStyle: {
              backgroundColor: "red",
              borderBottomWidth: 0,
              borderColor: "transparent",
              shadowColor: "transparent",
              elevation: 0,
            },
            headerShadowVisible: false,
            headerLeft: () => (
              //<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" width={40} height={40} />
              <HeaderButton/>
            ),
            headerRight: () => (
              //<ScreenHeaderBtn iconUrl={images.profile} dimension="100%" width={40} height={40} />
              <HeaderButton/>
            ),
          
            headerTitle: (props) =><TitleButton {...props}/>// Setting headerTitle to an empty string to remove the title
          }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex p-3">
                    <Welcome/>
                          
                 
                </View>

            </ScrollView>
            
        </SafeAreaView>
    )
}
export default Home
