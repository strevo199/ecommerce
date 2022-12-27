import { createNavigationContainerRef } from "@react-navigation/native";
import type { RootStackParameterList } from "./type";

export const navigationRef = createNavigationContainerRef();
type RouteName = keyof RootStackParameterList;

export const navigate= (name: RouteName, params: RootStackParameterList) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name ,params)
    }
}