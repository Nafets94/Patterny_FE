import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Image, Text, Dimensions} from 'react-native';

//images
import login_blueGirl from "../assets/images/login_blueGirl.png";

//npm packages
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, SocialIcon} from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen'

//components
import ButtonLoginSignup from '../components/Button';

const login = ({ navigation } : any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    

    SplashScreen.hide();
  });

  return (
    <>
     <View style={styles.container}>

        <View style={styles.subContainer}>
          <Image source={login_blueGirl} style={styles.imageStyle}></Image>
            <Text style={styles.textStyle}>
              <Text style={{fontFamily: 'OpenSans-SemiBold'}}>Sign up</Text>
              <Text> or </Text>
              <Text style={{fontFamily: 'OpenSans-SemiBold'}}>log in</Text>
              {"\n"}to discover patterns in your life.
            </Text>
        </View>

        <Input
            placeholder="Email Address"
            inputStyle={{marginTop: Dimensions.get('window').height / 35}}
            leftIcon={{ type: 'MaterialCommunityIcons', name: 'email', color: '#808080'}}
            leftIconContainerStyle={{marginTop: Dimensions.get('window').height / 35, marginLeft: (Dimensions.get('window').width - Dimensions.get('window').width / 1.25) / 2}}
            onChangeText={value => setEmail(value)}    
        />
        <Input 
            placeholder="Password"
            secureTextEntry={true}
            inputStyle={{marginTop: -Dimensions.get('window').height / 100}}
            leftIcon={{ type: 'MaterialIcons', name: 'lock', color: '#808080'}}
            leftIconContainerStyle={{marginTop: -Dimensions.get('window').height / 100, marginLeft: (Dimensions.get('window').width - Dimensions.get('window').width / 1.25) / 2}}
            onChangeText={value => setPassword(value)}
        />

        <View style={{flexDirection: "row", justifyContent: 'space-evenly'}}>
            <ButtonLoginSignup
                label={"SIGN UP"}
                textColor = {"white"}
                backgroundColor = {"#1f1f1f"}
                fontSize = {22}
                fontFamily = {"OpenSans-SemiBold"}
                onPress={() => {console.log("Sign up credentials: "+email+" "+password)}}>
            </ButtonLoginSignup>

            <ButtonLoginSignup
                label={"LOG IN"}
                textColor = {"white"}
                backgroundColor = {"#6F8FC9"}
                fontSize = {22}
                fontFamily = {"OpenSans-SemiBold"}
                onPress={() => 
                    {console.log("Log in credentials: "+email+" "+password);
                    navigation.navigate('Main', {
                      screen: 'Home',
                      params: { user: 'email' },
                    })}}>
            </ButtonLoginSignup>
        </View>

        <View style={styles.subContainer}>
          <View style={{marginTop: Dimensions.get('window').width / 20}}>
              <Text style={{fontSize: 16, fontFamily: 'OpenSans-Regular', color: "#808080"}}>Forgot password?</Text>
          </View>
          <View style={{marginTop: Dimensions.get('window').width / 25}}>
              <Text style={{fontSize: 16, fontFamily: 'OpenSans-Regular', color: "#808080"}}>OR log in with</Text>
          </View>
        </View>

        <View style={styles.subContainer}>
          <View style={{width: Dimensions.get('window').width / 1.25}}>
            <SocialIcon
              title='Log In With Facebook'
              button
              type='facebook'
              onPress={() => console.log('Logged in with facebook')}
            />
            <SocialIcon
              title='Log In With Google&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' //spaces are added to match facebook text
              button
              type='google'
              onPress={() => console.log('Logged in with google')}
            />
          </View>
        </View>
     </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  subContainer: {
    alignItems: 'center' //horizontal middle
  },
  imageStyle: {
    width: Dimensions.get('window').width / 1.8,
    height: undefined,
    aspectRatio: 2126/1460,
    marginTop: Dimensions.get('window').width / 60
  },
  textStyle: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    width: Dimensions.get('window').width / 1.25,
    textAlign: 'center',
    marginTop: Dimensions.get('window').width / 60
  },
});

export default login;
