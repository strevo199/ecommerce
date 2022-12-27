import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./altNavigation";
import { RootNavigation } from "./RootNavigation";

function Navigation() {
    return (
        <NavigationContainer ref={navigationRef}>
            <RootNavigation/>
        </NavigationContainer>
    )
}

export default Navigation;