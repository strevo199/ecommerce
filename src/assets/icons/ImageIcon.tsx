import React,{ FC } from "react";
import { ImageProps } from "react-native";
import { Image } from "react-native"
import { Theme, useTheme } from "src/theme";
import {imageIconPack, ImageIconPackType} from './ImageIconPack'

export type ImageIconProps = {
    name: ImageIconPackType;
    size?: keyof Theme["iconSizes"];
    source?: ImageProps["source"];
    color?: keyof Theme["colors"];
    style?: ImageProps["style"];
    imageProps?: Omit<ImageProps, "source" | "style">
}

export const ImageIcon: FC<ImageIconProps> = (props) => {
    const {
        name,source,size='sm',style,color = "whiteColor", imageProps
    } = props;

    const theme =useTheme()
    const icon = imageIconPack[name];
    const iconSize = theme.iconSizes[size]
    const iconColor = theme.colors[color]

    return(
        <Image
            fadeDuration={0}
            resizeMode= "contain"
            source={source || icon}
            style= {[
                {
                    ...iconSize,tintColor: iconColor
                },style
            ]}
            {...imageProps}
        />
    )
}