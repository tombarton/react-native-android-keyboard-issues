/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import {
  KeyboardProvider,
  KeyboardStickyView,
} from 'react-native-keyboard-controller';

const Tab = createBottomTabNavigator();

const Home = () => (
  <View>
    <Text>Hello World</Text>
  </View>
);

const Keyboard = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={{flex: 1}}>
      <BottomSheetModalProvider>
        <KeyboardProvider>
          <View style={{flex: 1}}>
            <Text>Hello World</Text>
          </View>
          <KeyboardStickyView
            offset={{
              opened: tabBarHeight,
            }}>
            <View>
              <Text>Sticky Text Input:</Text>
              <TextInput multiline placeholder="Hello world" />
            </View>
          </KeyboardStickyView>
        </KeyboardProvider>
      </BottomSheetModalProvider>
    </View>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Keyboard" component={Keyboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
