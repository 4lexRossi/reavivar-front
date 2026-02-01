import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, IconButton, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/app/navigation/types';

type PreTestScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'PreTest'>;

interface PreTestScreenProps {
  navigation: PreTestScreenNavigationProp;
}

export function PreTestScreen({ navigation }: PreTestScreenProps) {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#F9F7FF' }]}>
      <View style={styles.header}>
        <IconButton
          icon="chevron-left"
          size={30}
          onPress={() => navigation.goBack()}
          iconColor="#6B4EFF"
        />
        <View style={styles.cloudContainer}>
           <IconButton icon="cloud" iconColor="rgba(107, 78, 255, 0.1)" size={40} />
        </View>
      </View>

      <View style={styles.content}>
        <Text variant="headlineSmall" style={styles.title}>
          Antes de começar
        </Text>

        <Text variant="titleMedium" style={styles.subtitle}>
          Queremos te conhecer um pouco melhor.
        </Text>

        <Text variant="bodyLarge" style={styles.body}>
          São apenas 5 perguntas rápidas para personalizar sua experiência no Reavivar.
        </Text>

        <View style={styles.infoBox}>
          <IconButton icon="clock-outline" size={20} iconColor="#6B4EFF" />
          <Text style={styles.infoText}>Leva menos de 1 minuto</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Welcome')}
          style={styles.button}
          contentStyle={styles.buttonContent}
          buttonColor="#9B8BFF"
        >
          Iniciar teste
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    color: '#2D1F66',
    fontWeight: 'bold',
    marginBottom: 24,
  },
  subtitle: {
    color: '#2D1F66',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
  },
  body: {
    color: '#6B4EFF',
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 24,
    marginBottom: 40,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(107, 78, 255, 0.05)',
    borderRadius: 20,
    paddingRight: 20,
    paddingLeft: 4,
  },
  infoText: {
    color: '#6B4EFF',
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
