import React, { useState, useEffect, useRef } from 'react';
import {StyleSheet, View, Image, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, SegmentedControlIOSComponent} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import RecommendationCardProps from '../../components/RecommendationCard';
import NavigationBar from '../../components/NavigationBar';

import imageBackground from "../../assets/images/appbackground.png";
import notification_bell_extra_full from "../../assets/images/tabbarIcons/notification_bell_extra_full.png";
import plus_sign_full from "../../assets/images/tabbarIcons/plus_sign_full.png";
import lightBulbYellow from "../../assets/images/lightbulbYellow.png";
import megaphone from "../../assets/images/icons/megaphone.png";
import megaphone_extended from "../../assets/images/icons/megaphone_extended.png";
import girlPaper from "../../assets/images/girlPaper.png";
import boyHeart from "../../assets/images/boyHeart.png";
import heart from "../../assets/images/icons/heart.png";

import Card from "../../components/Card";
import DetailsCard from "../../components/DetailsCard";

const notifications = ( {route, navigation } : any) => {
    const [data, setData] = useState("");
    const [recommendations, setRecommendation] = useState<any[]>([]);
    const [favorites, setFavorites] = useState<any[]>([]);
    const [view, setView] = useState("recommendations");

    const [recommendationsTabColor, setRecommendationsTabColor] = useState("#FFFFFF");
    const [recommendationsTabTextColor, setRecommendationsTabTextColor] = useState("black");

    const [favoritesTabColor, setFavoritesTabColor] = useState("#00000050");
    const [favoritesTabTextColor, setFavoritesTabTextColor] = useState("white");

    //const [detailedViewMode, setDetailedViewMode] = useState(false);
    const [currentRecommendation, setCurrentRecommendation] = useState("");
    const [currentType, setCurrentType] = useState("");
    const [infobar, setInfobar] = useState(false);

    function showView() {
        setInfobar(true);
        setTimeout(() => {
            setInfobar(false);
          }, 3000);
    }
    
    useEffect(() => {
        /* fetch('http://10.0.2.2:5000/api/values/')
            .then(response => response.json())
            .then(data => setData(JSON.stringify(data))); */
        fetch('https://run.mocky.io/v3/a45984a1-2251-4e10-98d9-c1ffe4aba1f0')
            .then(response => response.json())
            .then(data => setRecommendation(data));
        /* fetch('http://www.mocky.io/v2/5ed938f931000053b2c4ec3f')
            .then(response => response.json())
            .then(data => setFavorites(data)); */
    }, []);
    //add a counter state when it changes it fires

    function _recommendationCard(x: any, type: string) {
        setView("details");
        setCurrentRecommendation(JSON.stringify(x));
        setCurrentType(type);
    };

    function addToFavorites(id: Number) {
        console.log(id);
        var selectedRecommendation = recommendations.filter(x => x.id == id);
        if(favorites.find(x => x.id == id) === undefined) {
            console.log("Object added to favorites");
            favorites.push(selectedRecommendation[0]);
            console.log("Selected Recommendation", selectedRecommendation);
            console.log("Favorites", favorites);
            //api call here
        } else {
            console.log("Object already exists");
        }
    };

    function removeFromFavorites(id: Number) {
        console.log(id);
        setFavorites(favorites.filter(x => x.id !== id));
        setView("favorites");
    }

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

                    {/* Yellow bar at the top of the page */}
                    {infobar === true && (
                    <View style={styles.displayView}>
                        <Text style={styles.displayText}>Saved! Check your favorites to see it.</Text>
                    </View>
                    )}

                    {/* Subcontainer */}
                    <View style={styles.subContainer}>
                        <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
                            
                        <TouchableOpacity style={{flex: 1}} onPress={() => {setView("recommendations"); setRecommendationsTabColor("#FFFFFF"); setRecommendationsTabTextColor("black"); setFavoritesTabColor("#00000050"); setFavoritesTabTextColor("white");}}>
                            <View style={{flex: 1, flexDirection: 'row', backgroundColor: recommendationsTabColor, marginRight: 5, borderRadius: 15}}>
                                <View style={{flex: 1}}>
                                    <Image style={{alignSelf: 'stretch', flex: 1, resizeMode: 'contain', width: 'auto' }} source={megaphone}></Image>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontFamily: 'NunitoSans-Regular', fontSize: 16, color: recommendationsTabTextColor}}>Recommendations</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                            
                        <TouchableOpacity style={{flex: 1}} onPress={() => {setView("favorites"); setRecommendationsTabColor("#00000050"); setRecommendationsTabTextColor("white"); setFavoritesTabColor("#FFFFFF"); setFavoritesTabTextColor("black");}}>
                            <View style={{flex: 1, flexDirection: 'row', backgroundColor: favoritesTabColor, marginRight: 5, borderRadius: 15}}>
                                <View style={{flex: 1}}>
                                    <Image style={{alignSelf: 'stretch', flex: 1, resizeMode: 'contain', width: 'auto' }} source={heart}></Image>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontFamily: 'NunitoSans-Regular', fontSize: 16, color: favoritesTabTextColor}}>Favorites</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                            
                        </View>
                            {(view === "recommendations" && recommendations.length === 0) &&
                            <>
                            <View style={{flex: 3}}>
                            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                <Card
                                    title={"Oops!"}
                                    titleFontSize={20}
                                    titleFontFamily={"NunitoSans-Bold"}
                                    subTitle={"You have no recommendations. Give us some info so we can start discovering some for you."}
                                    subTitleFontSize={14}
                                    subTitleFontFamily={"NunitoSans-Light"}
                                    backgroundColor={"white"}
                                    onPress={() => console.log("hello")}
                                    image={plus_sign_full}
                                    height={Dimensions.get('window').height / 4.7}>
                                </Card>
                            </View>
                            </View>
                            <View style={{flex: 7}}>
                                <Image source={girlPaper} style={{alignSelf: 'stretch', flex: 1, resizeMode: 'contain', width: 'auto', marginVertical: 20 }}></Image>
                            </View>
                            </>}

                            {(view === "recommendations" && recommendations.length !==0) &&
                            <>
                            <View style={{flex: 10}}>
                            <View style={styles.tipsView}>
                                <View style={{flex: 0.80, justifyContent: 'center', alignItems: 'center'}}>
                                        <FontAwesome5 name="lightbulb" size={30} color="#6F8FC9"/>
                                </View>
                                <View style={{flex: 6, alignItems: 'center'}}>
                                    <Text style={styles.recommendationsText}>
                                        Tap a recommendation to learn more
                                    </Text>
                                </View>
                            </View>
                        
                            <View style={styles.scrollviewStyle}>
                            <ScrollView
                                persistentScrollbar={true}>
                                <View style={{flex: 1,  flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
                                
                                {recommendations.map(x => {
                                    //console.log("hello");
                                    
                                    //pick words instead of characters up to 50
                                    var substr = x.description.substr(0,50) + " ...";
                                    return (
                                        <View>
                                    <RecommendationCardProps
                                        categoryLabel={x.name}
                                        categoryColor={x.categoryColor}
                                        description={substr}
                                        descriptionColor={"black"}
                                        backgroundColor={"white"}
                                        image={plus_sign_full}
                                        onPress={() => {
                                            _recommendationCard(x,"recommendations");
                                        }}>
                                    </RecommendationCardProps>
                                    <View style={{height: 20}}></View>
                                    </View>
                                    )
                                    //}
                                }
                                )}
                                </View>
                                </ScrollView>
                                </View>
                                </View>
                            </>}

                            {(view === "favorites" && favorites.length === 0) &&
                            <>
                            <View style={{flex: 3}}>
                            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                <Card
                                    title={"You have no favorites"}
                                    titleFontSize={20}
                                    titleFontFamily={"NunitoSans-Bold"}
                                    subTitle={"Consider adding some. Browse through recommendations and choose the ones you like."}
                                    subTitleFontSize={14}
                                    subTitleFontFamily={"NunitoSans-Light"}
                                    backgroundColor={"white"}
                                    onPress={() => {setView("recommendations"); setRecommendationsTabColor("#FFFFFF"); setRecommendationsTabTextColor("black"); setFavoritesTabColor("#00000050"); setFavoritesTabTextColor("white");}}
                                    image={plus_sign_full}
                                    height={Dimensions.get('window').height / 4.7}>
                                </Card>
                            </View>
                            </View>
                            <View style={{flex: 7}}>
                                <Image source={boyHeart} style={{alignSelf: 'stretch', flex: 1, resizeMode: 'contain', width: 'auto', marginVertical: 20 }}></Image>
                            </View>
                            </>}

                            {(view === "favorites" && favorites.length !==0) &&
                            <>
                            <View style={{flex: 10}}>
                            <View style={styles.tipsView}>
                                <View style={{flex: 0.80}}>
                                    <Image style={{alignSelf: 'stretch', flex: 1, resizeMode: 'contain', width: 'auto' }} source={lightBulbYellow}></Image>
                                </View>
                                <View style={{flex: 6, alignItems: 'center'}}>
                                    <Text style={styles.recommendationsText}>
                                        Tap a favorite to learn more
                                    </Text>
                                </View>
                            </View>
                        
                            <View style={styles.scrollviewStyle}>
                            <ScrollView
                                persistentScrollbar={true}>
                                <View style={{flex: 1,  flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
                                
                                {favorites.map(x => {
                                    //console.log("hello");
                                    
                                    //pick words instead of characters up to 50
                                    var substr = x.description.substr(0,50) + " ...";
                                    return (
                                        <View>
                                    <RecommendationCardProps
                                        categoryLabel={x.name}
                                        categoryColor={x.categoryColor}
                                        description={substr}
                                        descriptionColor={"black"}
                                        backgroundColor={"white"}
                                        image={plus_sign_full}
                                        onPress={() => {
                                            _recommendationCard(x,"favorites");
                                        }}>
                                    </RecommendationCardProps>
                                    <View style={{height: 20}}></View>
                                    </View>
                                    )
                                    //}
                                }
                                )}
                                </View>
                                </ScrollView>
                                </View>
                                </View>
                            </>}

                            {(view === "details" && currentType === "recommendations") &&
                            <>
                                <View style={{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
                                    <DetailsCard
                                        id={JSON.parse(currentRecommendation).id}
                                        name={JSON.parse(currentRecommendation).name}
                                        categoryColor={JSON.parse(currentRecommendation).categoryColor}
                                        description={JSON.parse(currentRecommendation).description}
                                        favorites={JSON.stringify(favorites)}
                                        onPressBack={() => setView("recommendations")}
                                        onPressSave={() => {addToFavorites(JSON.parse(currentRecommendation).id); showView();}}>
                                    </DetailsCard>
                                </View>
                            </>
                            }

                            {(view === "details" && currentType === "favorites") &&
                            <>
                                <View style={{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
                                    {/* <Text>{JSON.parse(currentRecommendation).name}</Text> */}
                                    <DetailsCard
                                        id={JSON.parse(currentRecommendation).id}
                                        name={JSON.parse(currentRecommendation).name}
                                        categoryColor={JSON.parse(currentRecommendation).categoryColor}
                                        description={JSON.parse(currentRecommendation).description}
                                        onPressBack={() => setView("favorites")}
                                        onPressRemove={() => removeFromFavorites(JSON.parse(currentRecommendation).id)}>
                                    </DetailsCard>
                                </View>
                            </>
                            }
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
  subContainer: {
      flex: 6,
      flexDirection: 'column',
  },
  categoryLabel: {
      fontFamily: "NunitoSans-Bold",
      fontSize: 16
  },
  tipsView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: (Dimensions.get('window').width - Dimensions.get('window').width / 1.2) / 2,
      backgroundColor: 'white',
      marginBottom: 10,
      borderRadius: 5
  },
  recommendationsText: {
      fontFamily: "NunitoSans-Regular",
      fontSize: 16,
      color: 'black'
  },
  scrollviewStyle: {
      flex: 9,
  },
  displayView: {
      position: "absolute",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height / 20,
      backgroundColor: '#ADFF2F',
      justifyContent: 'center',
  },
  displayText: {
      marginLeft: Dimensions.get('window').height / 20,
      fontFamily: "NunitoSans-Regular",
      fontSize: 16,
      color: 'black'
  }
});

export default notifications;