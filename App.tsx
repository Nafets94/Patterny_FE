//react-native-gesture-handler at top according to reactnavigation.org/docs/
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Image } from 'react-native';

//npm packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//pages
import login from './pages/login';
import add from './pages/tabbarPages/add';
import calendar from './pages/tabbarPages/calendar';
import home from './pages/tabbarPages/home';
import more from './pages/tabbarPages/more';
import notifications from './pages/tabbarPages/notifications';
import RecommendationModal from './pages/modalPages/RecommendationModal';
import ActivityModal from './pages/modalPages/ActivityModal';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = !focused
                ? require('./assets/images/tabbarIconsV2/house_outlined.png')
                : require('./assets/images/tabbarIconsV2/house_shadow.png')
            } else if (route.name === 'Add Day') {
              iconName = !focused
                ? require('./assets/images/tabbarIconsV2/add_outlined.png')
                : require('./assets/images/tabbarIconsV2/add_shadow.png')
            } else if (route.name === 'Notifications') {
              iconName = !focused
                ? require('./assets/images/tabbarIconsV2/bell_outlined.png')
                : require('./assets/images/tabbarIconsV2/bell_shadow.png')
             } else if (route.name === 'Calendar') {
              iconName = !focused
                ? require('./assets/images/tabbarIconsV2/calendar_outlined.png')
                : require('./assets/images/tabbarIconsV2/calendar_shadow.png')
            } else if (route.name === 'More') {
              iconName = !focused
                ? require('./assets/images/tabbarIconsV2/more_outlined.png')
                : require('./assets/images/tabbarIconsV2/more_shadow.png')
            }

           // You can return any component that you like here!
           return <Image source={iconName} style={{width: 32, height: 32, marginTop: 4}} />
          },
        })}
        tabBarOptions={{
          activeTintColor: '#6F8FC9',
          inactiveTintColor: 'black',
          //showLabel: false
        }}
      >
          <Tab.Screen name="Home" component={home} />
          <Tab.Screen name="Add Day" component={add} />
          <Tab.Screen name="Notifications" component={notifications} />
          <Tab.Screen name="Calendar" component={calendar} />
          <Tab.Screen name="More" component={more} />
        </Tab.Navigator>
    );
  }



const MainStackScreen = () => {
  return (
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        {/* Main here is the screen we are navigating that contains the Tabbar,
        but it is a part of the Stack.Navigator as the route has to be available.
        The component for it is Tabs which is a Tab.Navigator for different screens*/}
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Main" component={Tabs} />
      </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="RecommendationModal"
          component={RecommendationModal}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ActivityModal"
          component={ActivityModal}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;