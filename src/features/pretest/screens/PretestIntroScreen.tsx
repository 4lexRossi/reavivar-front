import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text, Button, IconButton, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/app/navigation/types';

type PretestIntroScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'PreTest'>;

interface PretestIntroScreenProps {
  navigation: PretestIntroScreenNavigationProp;
}

export function PretestIntroScreen({ navigation }: PretestIntroScreenProps) {
  const theme = useTheme();

  return (
    <ImageBackground
      source={require('../../../assets/final_bg.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <IconButton
            icon="chevron-left"
            size={30}
            onPress={() => navigation.goBack()}
            iconColor={theme.colors.primary}
          />
          <View style={styles.cloudContainer}>
             <IconButton icon="cloud" iconColor={theme.colors.primary} style={{ opacity: 0.1 }} size={40} />
          </View>
        </View>

        <View style={styles.content}>
          <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
            Antes de começar
          </Text>

          <Text variant="titleMedium" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
            Queremos te conhecer um pouco melhor.
          </Text>

          <Text variant="bodyLarge" style={[styles.body, { color: theme.colors.primary }]}>
            São apenas 5 perguntas rápidas para personalizar sua experiência no Reavivar.
          </Text>

          <View style={[styles.infoBox, { backgroundColor: 'rgba(255, 255, 255, 0.6)' }]}>
            <IconButton icon="clock-outline" size={20} iconColor={theme.colors.primary} />
            <Text style={[styles.infoText, { color: theme.colors.primary }]}>Leva menos de 1 minuto</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Welcome')}
            style={styles.button}
            contentStyle={styles.buttonContent}
            buttonColor={theme.colors.primary}
          >
            Iniciar teste
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  cloudContainer: {
    marginRight: 16,
    opacity: 0.5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 24,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
  },
  body: {
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 24,
    marginBottom: 40,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingRight: 20,
    paddingLeft: 4,
  },
  infoText: {
    fontWeight: '500',
  },
  footer: {
    padding: 24,
    paddingBottom: 40,
  },
  button: {
    borderRadius: 20,
    elevation: 0,
  },
  buttonContent: {
    height: 56,
  },
});
