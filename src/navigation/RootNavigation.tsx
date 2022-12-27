import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { IntroScreen } from "../screens";
import { RootStackParameterList } from "./type";

const Stack = createNativeStackNavigator<RootStackParameterList>();

export function RootNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="IntroScreen"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen
                component={IntroScreen}
                name ="IntroScreen"
            />
        </Stack.Navigator>
    )
}