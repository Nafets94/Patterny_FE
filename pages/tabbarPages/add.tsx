import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Image, Text, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import Card from '../../components/Card';
import NavigationBar from '../../components/NavigationBar';

import plus_sign_full from "../../assets/images/tabbarIcons/plus_sign_full.png";
import bell_full from "../../assets/images/tabbarIcons/bell_full.png";
import calendar_full from "../../assets/images/tabbarIcons/calendar_full.png";
import imageBackground from "../../assets/images/appbackground.png";
import notification_bell_extra_full from "../../assets/images/tabbarIcons/notification_bell_extra_full.png";
import lightBulbYellow from "../../assets/images/lightbulbYellow.png";
import girlStarHair from "../../assets/images/girlStarHair.png";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon01 from "../../assets/images/activityIcons/Icon-01.png";
import Icon02 from "../../assets/images/activityIcons/Icon-02.png";
import Icon03 from "../../assets/images/activityIcons/Icon-03.png";
import Icon04 from "../../assets/images/activityIcons/Icon-04.png";
import Icon05 from "../../assets/images/activityIcons/Icon-05.png";
import Icon06 from "../../assets/images/activityIcons/Icon-06.png";
import Icon07 from "../../assets/images/activityIcons/Icon-07.png";
import Icon08 from "../../assets/images/activityIcons/Icon-08.png";
import Icon09 from "../../assets/images/activityIcons/Icon-09.png";
import Icon10 from "../../assets/images/activityIcons/Icon-10.png";
import Icon11 from "../../assets/images/activityIcons/Icon-11.png";
import Icon12 from "../../assets/images/activityIcons/Icon-12.png";
import Icon13 from "../../assets/images/activityIcons/Icon-13.png";
import Icon14 from "../../assets/images/activityIcons/Icon-14.png";
import Icon15 from "../../assets/images/activityIcons/Icon-15.png";

const images = [Icon01, Icon02, Icon03, Icon04, Icon05, Icon06, Icon07, Icon08, Icon09, Icon10, Icon11, Icon12, Icon13, Icon14, Icon15];
const descImages = ["Sleep", "Work", "Eat", "Relax", "Exercise", "Cook", "Clean", "Self-care", "Family time", "Drive", "Learn", "Shop", "Pet", "Socialize", "DIY"];

import { observer } from "mobx-react";
import Store from '../../store/store.js';

const add = observer(( {route, navigation } : any) => {
    const [data, setData] = useState("");
    const [value, setValue] = useState("");

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
                
                <View style={styles.subContainer}>

                      {/*tips card*/}
                      <View style={styles.tipsView}>
                            <View style={{flex: 0.80, justifyContent: 'center', alignItems: 'center'}}>
                                  <FontAwesome5 name="lightbulb" size={30} color="#6F8FC9"/>
                            </View>
                            <View style={{flex: 6, alignItems: 'center'}}>
                                <Text style={styles.recommendationsText}>
                                    How was your day? Tap here for help.
                                </Text>
                            </View>
                      </View>

                      {/*choose activity modal*/}    
                      <TouchableOpacity style={{flex: 2}} onPress={() => navigation.navigate("ActivityModal")}>
                          <View style={styles.selectActivityView}>
                            <View style={{flex: 0.80, justifyContent: 'center', alignItems: 'center'}}>
                                  <FontAwesome5 name="grin-alt" size={30} color="#6F8FC9"/>
                            </View>
                            <View style={{flex: 6, justifyContent: 'space-evenly', alignItems: 'center'}}>
                                <Text style={styles.recommendationsText}>
                                    Tap here to choose an activity.
                                </Text>
                               
                               <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.recommendationsText}>
                                        Chosen activity: {Store.selectedValue == -1 ? "None" : descImages[Store.selectedValue] + " "}
                                    </Text>
                                    <Image source={images[Store.selectedValue]} style={{width: Dimensions.get('window').width / 20, height: Dimensions.get('window').width / 20}}></Image>
                                </View>
                            </View>
                           </View>
                      </TouchableOpacity>  
                        
                      
                      <View style={{flex: 7}}>
                      {Store.selectedValue == -1 ?
                            <>
                            <Image source={girlStarHair} style={{alignSelf: 'stretch', flex: 1, resizeMode: 'contain', width: 'auto', marginVertical: 20 }}></Image>
                            </>
                            :
                            <>

                            </>
                      }
                      </View>
                </View>
                </ImageBackground>
            </View>
        </>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    subContainer: {
        flex: 6,
        flexDirection: 'column',
        marginBottom: Dimensions.get('window').height / 40,
    },
    tipsView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: (Dimensions.get('window').width - Dimensions.get('window').width / 1.2) / 2,
      backgroundColor: 'white',
      marginBottom: 10,
      marginTop: 10,
      borderRadius: 5
    },
    recommendationsText: {
      fontFamily: "NunitoSans-Regular",
      fontSize: 16,
      color: 'black'
    },
    selectActivityView: {
      flex: 2,
      flexDirection: 'row',
      marginHorizontal: (Dimensions.get('window').width - Dimensions.get('window').width / 1.2) / 2,
      backgroundColor: 'white',
      marginBottom: 10,
      borderRadius: 5
    },
  });

export default add;