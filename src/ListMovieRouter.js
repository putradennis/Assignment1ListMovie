import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from './screen/ListMovieApp/ScreensWishlist';
//import UserScreen from './screens/TugasFinal/ScreensWishlist/RemovelistItem';
import Home from './screens/TugasFinal/HomeWishlist/';
import Detail from './screens/TugasFinal/HomeWishlist/WishlistItem';
import {WishlistProvider} from './screens/TugasFinal/ProviderTugas';
import {AntDesign} from '@expo/vector-icons;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ListMovieRouter = () => {
  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={'Selamat datang'} component={Home} />
        <Stack.Screen name={'Detail Item'} component={Detail} />
      </Stack.Navigator>
    );
  };

  const SettingStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name={'Wishlist'} component={SettingScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <WishlistProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarStyle={{
            height: 70,
            paddingBottom: 10,
            paddingTop: 5,
          }}
          tabBarLabelStyle={{
            fontSize: 12,
          }}
          tabBarActiveTintColor="violet">
          <Tab.Screen
            name={'Home'}
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <AntIcon name="home" color={color} size={focused ? 24 : 20} />
              ),
            }}
          />
          <Tab.Screen
            name={'Wishlist Item'}
            component={SettingStack}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <AntIcon
                  name="book"
                  size={24}
                  color="black"
                  size={focused ? 24 : 20}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </WishlistProvider>
  );
};

export default ListMovieRouter;

