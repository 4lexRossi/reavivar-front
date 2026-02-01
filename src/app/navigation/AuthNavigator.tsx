import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IntroScreen } from "@/features/auth/screens/IntroScreen";
import { PreTestScreen } from "@/features/auth/screens/PreTestScreen";
import { WelcomeScreen } from "@/features/auth/screens/WelcomeScreen";
import { SignInScreen } from "@/features/auth/screens/SignInScreen";
import type { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="PreTest" component={PreTestScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}
