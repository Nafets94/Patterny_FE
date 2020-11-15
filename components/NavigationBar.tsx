import * as React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Dimensions, Image, Platform} from "react-native";

import patterny from '../assets/images/patterny.png';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

interface NavigationBarInterface {
    backgroundColor: string;
    onPressBackButton: () => void;
    onPressExtraNotifications: () => void;
    extraNotificationImage: Image;
}

const NavigationBar : React.FC<NavigationBarInterface> = ({backgroundColor, onPressBackButton, onPressExtraNotifications, extraNotificationImage} : NavigationBarInterface) => {
    return(
        <>
            <View style={[styles.container, {backgroundColor: backgroundColor}]}>
                {/* left back button */}
                
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    {Platform.OS === 'ios' &&
                    <TouchableOpacity onPress={onPressBackButton} style={{padding: 10}}>
                    <Icon
                        name="chevron-left"
                        size={30}
                        color="#6F8FC9"
                    />
                    </TouchableOpacity>}
                </View>

                {/* logo */}
                <View style={{flex: 5, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={patterny} style={styles.patternyLogo}></Image>
                </View>

                {/* extra notifications */}
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={onPressExtraNotifications} style={{padding: 10}}>         
                        <Image source={extraNotificationImage} style={styles.extraNotification}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        opacity: 0.8,
        width: Dimensions.get('window').width,
        //height: Dimensions.get('window').height / 16,
        flexDirection: 'row',
        flex: 0.5
    },
    extraNotification: {
        width: Dimensions.get('window').width / 10,
        height: undefined,
        aspectRatio: 334/335,
        //marginRight: Dimensions.get('window').width / 30,
    },
    patternyLogo: {
        width: Dimensions.get('window').width / 4.5,
        height: undefined,
        aspectRatio: 5364/2289,
    }
})

export default NavigationBar;