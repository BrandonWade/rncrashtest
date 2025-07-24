/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {
  Button,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

function ListScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Button title="Form" onPress={() => navigation.popTo('Form')} />
    </View>
  );
}

function FormScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Toast.show({
            type: 'success',
          });
          navigation.popTo('List');
        }}
      >
        <Text
          style={{ backgroundColor: 'skyblue', color: 'white', padding: 10 }}
        >
          Submit
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <>
          <TextInput placeholder="Title" />
          <TextInput placeholder="Description" />
        </>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <Toast position="top" autoHide visibilityTime={4000} />
    </>
  );
}
