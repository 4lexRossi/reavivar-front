import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "@/features/auth/screens/WelcomeScreen";
import { MainTabs } from "@/app/navigation/MainTabs";

export type MainStackParamList = {
  Welcome: undefined;
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Tabs" component={MainTabs} />
    </Stack.Navigator>
  );
}
