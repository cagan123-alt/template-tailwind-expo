import React from 'react'
import { View, Image } from 'react-native'
export default function TitleButton() {
  return (
    <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginRight:"20%" }}>
    <Image
      source={require('job-app/assets/icon.png')} // Replace with the actual path to your image
      style={{ width: 50, height: 50 }} // Adjust the width and height as needed
    />
  </View>
    )
}
