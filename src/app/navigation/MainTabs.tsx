import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { useAuth } from '@/store/AuthContext';
import { Button } from 'react-native-paper';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const { user, signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo, {user?.name}!</Text>
      <Button onPress={signOut}>Sair</Button>
    </View>
  );
}

export function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}
