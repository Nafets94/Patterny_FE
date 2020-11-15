import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Image, Text, Dimensions, ImageBackground} from 'react-native';
import Card from '../../components/Card';
import NavigationBar from '../../components/NavigationBar';

import plus_sign_full from "../../assets/images/tabbarIcons/plus_sign_full.png";
import bell_full from "../../assets/images/tabbarIcons/bell_full.png";
import calendar_full from "../../assets/images/tabbarIcons/calendar_full.png";
import imageBackground from "../../assets/images/appbackground.png";
import notification_bell_extra_full from "../../assets/images/tabbarIcons/notification_bell_extra_full.png";

const home = ( {route, navigation } : any) => {
    const [data, setData] = useState("");
    const [gender, setGender] = useState("female");
    //const { name } = route.params;

    useEffect(() => {
        fetch('http://10.0.2.2:5000/api/values/')
            .then(response => response.json())
            .then(data => setData(JSON.stringify(data)));
    });

    return (
        <>
            <View style={styles.container}>
            <ImageBackground source={imageBackground} style={styles.backgroundImage}>
            <NavigationBar
                backgroundColor="white"
                onPressBackButton={() => console.log("back")}
                onPressExtraNotifications={() => console.log("hello")}
                extraNotificationImage={notification_bell_extra_full}
            >
            </NavigationBar>
                <View style={styles.twoColumns}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <Text style={{fontFamily: 'NunitoSans-ExtraBold', fontSize: 38, color: 'white'}}>Welcome,</Text>
                        <Text style={{fontFamily: 'NunitoSans-ExtraBold', fontSize: 38, color: 'white'}}>Cristi</Text>
                    </View>
                    {gender == "female" ?
                    (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../../assets/images/yellowHairGirl.png')} style={styles.characterGirl}></Image>
                    </View>) :
                    (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../../assets/images/yellowHairBoy.png')} style={styles.characterBoy}></Image>
                    </View>)}
                </View>
                <View style={styles.subContainer}>
                    <Card
                        title={"How was your day?"}
                        titleFontSize={16}
                        titleFontFamily={"NunitoSans-Bold"}
                        subTitle={"Give us some info so we can discover some patterns"}
                        subTitleFontSize={16}
                        subTitleFontFamily={"NunitoSans-Light"}
                        backgroundColor={"white"}
                        onPress={() => console.log("hello")}
                        image={plus_sign_full}>
                    </Card>
                    <Card
                        title={"Check the recommendations"}
                        titleFontSize={16}
                        titleFontFamily={"NunitoSans-Bold"}
                        subTitle={"See our recommendations from what we discovered"}
                        subTitleFontSize={16}
                        subTitleFontFamily={"NunitoSans-Light"}
                        backgroundColor={"white"}
                        onPress={() =>  navigation.navigate('Main', {
                            screen: 'Notifications',
                            params: { passParam: 'param' },
                        })}
                        image={bell_full}>
                    </Card>
                    <Card
                        title={"See the past days"}
                        titleFontSize={16}
                        titleFontFamily={"NunitoSans-Bold"}
                        subTitle={"See the info you added the past days"}
                        subTitleFontSize={16}
                        subTitleFontFamily={"NunitoSans-Light"}
                        backgroundColor={"white"}
                        onPress={() => console.log("hello")}
                        image={calendar_full}>
                    </Card>
                </View>
            </ImageBackground>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    twoColumns: {
        flex: 2,
        flexDirection: 'row',
        marginLeft: Dimensions.get('window').width / 14
    },
    subContainer: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Dimensions.get('window').height / 40,
    },
    characterGirl: {
        width: Dimensions.get('window').width / 1.8,
        height: undefined,
        aspectRatio: 2126/1460,
    },
    characterBoy: {
        width: Dimensions.get('window').width / 2.2,
        height: undefined,
        aspectRatio: 1603/1444,
    },
  });

export default home;