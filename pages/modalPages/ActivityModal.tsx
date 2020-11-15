import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Image, Text, Dimensions, ImageBackground, Button, ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { observer } from "mobx-react";
import Store from '../../store/store.js';

//images
import imageBackground from "../../assets/images/appbackground.png";
import dog from "../../assets/images/dog.png";
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
/* const descText = ["Good sleep improves concentration, productivity and reduces the risk of heart disease and strokes.",
                  "If you're using physical or mental effort to do it and money comes in, then you're most likely working.",
                  "A good diet can help you lose weight, improve your mood and reduce the risk of developing certain diseases.",
                  "Relaxing slows down your heart rate, lowers your blood pressure and reduces anger and frustration.",
                  "Exercise can help you build the body of your dreams and it doesn't stop there: it also helps your mind!",
                  "Cooking helps you control what you're eating and let's be honest here, who doesn't love that?",
                  "Cleaning can help you feel less stressed, lessens the spread of germs and improves safety.",
                  "Self-care results in positivity, motivation and reduces allergies.",
                  "Spending time with family helps building stronger bonds",
                  "Eating helps you stay strong and healthy. A good diet can help you lose weight, improve your mood and reduce the risk of developing certain diseases.",
                  "Eating helps you stay strong and healthy. A good diet can help you lose weight, improve your mood and reduce the risk of developing certain diseases.",
                  "Eating helps you stay strong and healthy. A good diet can help you lose weight, improve your mood and reduce the risk of developing certain diseases.",
                  "Eating helps you stay strong and healthy. A good diet can help you lose weight, improve your mood and reduce the risk of developing certain diseases.",
                  "Eating helps you stay strong and healthy. A good diet can help you lose weight, improve your mood and reduce the risk of developing certain diseases.",
                  "Eating helps you stay strong and healthy. A good diet can help you lose weight, improve your mood and reduce the risk of developing certain diseases.",
                ]; */

const ActivityModal = observer(({route, navigation } : any) => {
    //const { description } = route.params;
    const [selectedItems, setSelectedItems] = useState([]);
    const [colors, setColors] = useState(['white','white','white','white','white','white','white','white','white','white','white','white','white','white','white']);
    const [activityDescriptionTop, setActivityDescriptionTop] = useState("Tap an icon below that fits as close as");
    const [activityDescriptionBottom, setActivityDescriptionBottom] = useState("possible to an activity you've done today");

    function _changeColor(i : any) {
      let colorsDup = ['white','white','white','white','white','white','white','white','white','white','white','white','white','white','white'];
      colorsDup[i] = '#99ccff';
      setColors(colorsDup);
      setActivityDescriptionTop("Activity chosen");
      setActivityDescriptionBottom(descImages[i]);
      Store.updateValue(i);
    }

    return (
      <>
          <ImageBackground source={imageBackground} style={{flex: 1}}>
            <View style={styles.container}>
            
            {/* tips view */}
            <View style={styles.tipsView}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome5 name="lightbulb" size={30} color="#6F8FC9"/>
                  </View>
                  <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.recommendationsText}>
                          {activityDescriptionTop} 
                      </Text>
                      <Text style={styles.recommendationsText}>
                          {activityDescriptionBottom}
                      </Text>
                  </View>
            </View>

            {/* main view */}
            <View style={styles.mainView}>
              <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-around', flex: 1}}>    
                    {colors.map((x,i) => {
                      return(
                      <View style={{flexDirection: "column", alignItems: "center"}} key={i}>
                            <TouchableOpacity key={i} onPress={() => _changeColor(i)}>
                              <View style={{
                                width: Dimensions.get('window').width/6.2,
                                height: Dimensions.get('window').width/6.2,
                                borderColor: colors[i],
                                borderWidth: 2,
                                borderRadius: 10,
                                margin: 10}}>
                                    <Image source={images[i]} style={{alignSelf: 'stretch', flex: 1, resizeMode: 'contain', width: 'auto', marginVertical: 5}}>
                                    </Image>
                                </View>
                            </TouchableOpacity>
                      <Text style={{marginTop: -12, fontFamily: 'NunitoSans-Regular', fontSize: 16}}>{descImages[i]}</Text>
                      </View>
                      )
                    })} 
              </View>
            </View>
            
            {/* return view */}
            <TouchableOpacity style={{flex: 0.7}} onPress={() => navigation.goBack()}>
                <View style={styles.returnView}>
                    <Text style={{fontFamily: 'NunitoSans-Regular', fontSize: 18, color: 'white'}}>Return</Text>
                </View>
            </TouchableOpacity>
            
            </View>
            </ImageBackground>
        </>
    );

  });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    backgroundImage: {
      flex: 1,
      position: 'absolute',
      left: 0,
      top: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    tipsView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: (Dimensions.get('window').width - Dimensions.get('window').width / 1.2) / 2,
      backgroundColor: 'white',
      marginTop: 10,
      borderRadius: 5
    },
    recommendationsText: {
      fontFamily: "NunitoSans-Regular",
      fontSize: 15,
      color: 'black',
      marginHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    mainView: {
      flex: 6,
      marginHorizontal: (Dimensions.get('window').width - Dimensions.get('window').width / 1.2) / 2,
      backgroundColor: 'white',
      marginVertical: 10,
      borderRadius: 5
    },
    returnView: {
      flex: 0.7,
      position:'relative',
      backgroundColor: '#54C6FD',
      borderColor: '#2E84FE',
      borderWidth: 2,
      marginHorizontal: (Dimensions.get('window').width - Dimensions.get('window').width / 1.2) / 2,
      marginBottom: 0,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default ActivityModal;