import { View, ActivityIndicator } from "react-native";

import colors from "../theme"

export function Loading(){
    return (
        <View className="flex-1 items-center justify-center bg-GRAY_800">
            <ActivityIndicator color={colors.COLORS.BRAND_LIGHT} />
        </View>
    )
}