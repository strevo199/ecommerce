import { View, Text } from 'react-native'
import React from 'react'
import { RootNavigationProps } from 'src/navigation/type'

export const IntroScreen = ({navigation}: RootNavigationProps<"IntroScreen">) => {
  return (
    <View>
      <Text>IntroScree</Text>
    </View>
  )
}

