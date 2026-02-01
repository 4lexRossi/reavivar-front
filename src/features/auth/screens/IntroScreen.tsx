import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/app/navigation/types';

type IntroScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Intro'>;

interface IntroScreenProps {
  navigation: IntroScreenNavigationProp;
}

export function IntroScreen({ navigation }: IntroScreenProps) {
  const theme = useTheme();

  return (
    <ImageBackground
      source={require('../../../assets/reavivar_img_intro.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text variant="displaySmall" style={[styles.title, { color: theme.colors.surface }]}>
            Reavivar
          </Text>
          <Text variant="titleMedium" style={[styles.subtitle, { color: theme.colors.surface, opacity: 0.9 }]}>
            Um espaço para entender como você está se sentindo.
          </Text>
        </View>

        <View style={styles.footer}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('PreTest')}
            style={styles.button}
            contentStyle={styles.buttonContent}
            buttonColor={theme.colors.surface + '33'}
            textColor={theme.colors.surface}
          >
            Começar
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Subtle overlay
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 40,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  subtitle: {
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    padding: 32,
    paddingBottom: 48,
  },
  button: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonContent: {
    height: 56,
  },
});
