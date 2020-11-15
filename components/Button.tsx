import * as React from "react";
import {StyleSheet, View, TouchableOpacity, Text, Dimensions} from "react-native";

interface ButtonProps {
    label: string;
    textColor: string;
    backgroundColor: string;
    fontSize: number;
    fontFamily: string;
    onPress: () => void;
}

const ButtonLoginSignup : React.FC<ButtonProps> = ({label, textColor, backgroundColor, fontSize, fontFamily, onPress} : ButtonProps) => {
    const colorText = textColor;
    const sizeText = fontSize;
    const familyText = fontFamily;
    const colorBackground = backgroundColor;

    return(
        <>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.container, {backgroundColor: colorBackground}]}>
                    <Text style={[styles.container, {color: colorText, fontSize: sizeText, fontFamily: familyText, textAlign: 'center', textAlignVertical: 'center'}]}>
                        {label}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2.2,
        height: Dimensions.get('window').height / 13,
    }
})

export default ButtonLoginSignup;