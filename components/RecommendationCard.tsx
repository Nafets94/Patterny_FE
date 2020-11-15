import * as React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Dimensions, Image} from "react-native";

interface RecommendationCardProps {
    categoryLabel: string;
    categoryColor: string;
    categoryStyle?: any;

    description: string;
    descriptionColor: string
    descriptionStyle?: any;

    backgroundColor: string;
    image: Image;

    onPress: () => void;
}

const RecommendationCard : React.FC<RecommendationCardProps> = ({categoryLabel, categoryColor, categoryStyle, description, descriptionColor, descriptionStyle, backgroundColor, image, onPress} : RecommendationCardProps) => {
    return(
        <>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.container, {backgroundColor: backgroundColor}]}>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        <View style={{flex: 4, flexDirection: 'column'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', padding: Dimensions.get('window').height / 40}}>
                                <Text style={{fontFamily: "NunitoSans-Bold", fontSize: 16, color: categoryColor}}>
                                    {categoryLabel}
                                </Text>
                             </View>
                             <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: Dimensions.get('window').height / 40, paddingBottom: Dimensions.get('window').height / 40}}>
                                <Text style={{fontFamily: "NunitoSans-Light", fontSize: 16, color: descriptionColor}}>
                                    {description}
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
        height: Dimensions.get('window').height / 7,
        borderRadius: 5
    },
})

export default RecommendationCard;