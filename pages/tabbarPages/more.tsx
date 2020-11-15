import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

const more = ( {route, navigation } : any) => {
    const [data, setData] = useState("");
    //const { name } = route.params;

    useEffect(() => {
        fetch('http://10.0.2.2:5000/api/values/')
            .then(response => response.json())
            .then(data => setData(JSON.stringify(data)));
    });

    return (
        <>
            <View style={styles.container}>
                <View style={styles.twoColumns}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontFamily: 'OpenSans-SemiBold'}}>Welcome,</Text>
                        <Text style={{fontFamily: 'OpenSans-SemiBold'}}>Johnatan</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Row 2</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    
                </View>
                {data!="" && <Text>{data}</Text>}
                <Text onPress={() => 
                        {console.log("Login Screen");
                        navigation.navigate('Login')}}>Main</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    twoColumns: {
      flex: 2,
      flexDirection: 'row',
    },
    subContainer: {
      flex: 4,
    },
  });

export default more;