import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import colors from "../theme"

type ButtonProps = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
}

export function Button({title, isLoading, ...rest}: ButtonProps){
    return (
        <TouchableOpacity 
            className="flex-1 min-h-[56] max-h-[56] rounded-md p-5 items-center justify-center bg-BRAND_MID"
            disabled={isLoading}
            activeOpacity={0.7}
            {...rest}
            >
                {
                    isLoading 
                    ? <ActivityIndicator color={colors.COLORS.BRAND_LIGHT} />
                    : <Text className="text-white text-MD font-BOLD text-center">{title}</Text>
                }
            
        </TouchableOpacity>
    )
}