import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IntroScreen } from "@/features/onboarding/screens/IntroScreen";
import { PretestIntroScreen } from "@/features/pretest/screens/PretestIntroScreen";
import { WelcomeScreen } from "@/features/auth/screens/WelcomeScreen";
import { SignInScreen } from "@/features/auth/screens/SignInScreen";
import { SignUpScreen } from "@/features/auth/screens/SignUpScreen";
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
      <Stack.Screen name="PreTest" component={PretestIntroScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
