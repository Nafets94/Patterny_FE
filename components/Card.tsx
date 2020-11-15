import * as React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Dimensions, Image} from "react-native";

interface CardProps {
    title: string;
    titleFontSize: number;
    titleFontFamily: string;

    subTitle: string;
    subTitleFontSize: number;
    subTitleFontFamily: string;

    backgroundColor: string;
    onPress: () => void;

    image: Image;
    height?: number;
}

const Card : React.FC<CardProps> = ({title, titleFontSize, titleFontFamily, subTitle, subTitleFontSize, subTitleFontFamily, backgroundColor, onPress, image, height} : CardProps) => {
    if (height === undefined)
    {
        height = styles.container.height;
    }
    return(
        <>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.container, {height: height, backgroundColor: backgroundColor}]}>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        <View style={{flex: 4, flexDirection: 'column'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', padding: Dimensions.get('window').height / 40}}>
                                <Text style={{fontSize: titleFontSize, fontFamily: titleFontFamily}}>
                                    {title}
                                </Text>
                             </View>
                             <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: Dimensions.get('window').height / 40, paddingBottom: Dimensions.get('window').height / 40}}>
                                <Text style={{fontSize: subTitleFontSize, fontFamily: subTitleFontFamily}}>
                                    {subTitle}
                                </Text>
                             </View>
                        </View>
                        <View style={{flex: 1.5, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={image} style={{transform: [{scale: 0.15}]}}></Image>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').height / 5.9,
    },
})

export default Card;