import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParameterList = {
 IntroScreen: undefined
}

export type RootNavigationProps<Screen extends keyof RootStackParameterList > = NativeStackScreenProps<RootStackParameterList, Screen>