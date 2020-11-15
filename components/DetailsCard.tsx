import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Dimensions, Image, _Text} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import heart from '../assets/images/icons/heart.png';
import whiteHeart from '../assets/images/icons/whiteHeart.png';

interface DetailsCardProps {
    id: string;
    name: string;
    categoryColor: string;
    description: string;
    favorites?: string;
    onPressBack: () => void;
    onPressSave?: () => void;
    onPressRemove?: () => void;
}


const DetailsCard : React.FC<DetailsCardProps> = ({id, name, categoryColor, description, favorites, onPressBack, onPressSave, onPressRemove} : DetailsCardProps) => {
    //const [_text, setText] = useState("");

    function _displayText(id: string, onPressSave?: () => void, favorites?: string) {
        if (onPressSave !== undefined) {
            var _id = parseInt(id);
            //var _favorites = JSON.parse(favorites);
            if ((favorites !== undefined) && (JSON.parse(favorites).find((x: any) => x.id == _id) !== undefined))
                return "Saved";
            else
                return "Save";
            }
        else {
            return "Remove";
            }
        }

    return(
        <>
            {/*the container has a flex 11 split the following way: 
            flex: 2 - title; flex: 6 - content; flex: 1 - empty view; flex: 1 - row buttons; flex: 1 - empty view*/}

            <View style={[styles.container, {backgroundColor: 'white'}]}>
                <View style={{flex: 2, justifyContent: 'center', marginLeft: Dimensions.get('window').width / 11}}>
                    <Text style={{color: categoryColor, fontSize: 20, fontFamily: 'NunitoSans-SemiBold'}}>{name}</Text>
                </View>
                <View style={{flex: 6, alignItems: 'center', marginHorizontal: Dimensions.get('window').width / 11}}>
                    <Text style={{color: 'black', fontSize: 14, fontFamily: 'NunitoSans-Regular'}}>{description}</Text>
                </View>
                <View style={{flex: 1}}></View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: Dimensions.get('window').width / 11}}>
                        <TouchableOpacity style={{flex: 1}} onPress={onPressBack}>
                            <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#6F8FC9', marginRight: 5, borderRadius: 15}}>
                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                                    <Ionicons name="ios-arrow-back" size={30} color="#FFFFFF"/>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontFamily: 'NunitoSans-Regular', fontSize: 16, color: 'white'}}>Back</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 1}} onPress={onPressSave !== undefined ? onPressSave : onPressRemove}>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#6F8FC9', marginRight: 5, borderRadius: 15}}>
                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image style={{alignSelf: 'stretch', flex: 1, resizeMode: 'contain', width: 'auto' }} source={whiteHeart}></Image>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontFamily: 'NunitoSans-Regular', fontSize: 16, color: 'white'}}>{_displayText(id, onPressSave, favorites)}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                </View>
                <View style={{flex: 1}}></View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').height / 1.6,
    },
})

export default DetailsCard;