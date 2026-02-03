import React, { useState } from 'react';
import { View, StyleSheet, ScrollView as RNScrollView, KeyboardAvoidingView as RNKeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { TextInput as PaperTextInput, Button, Text, Card, useTheme, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/app/navigation/types';

// Bypass TS issues with some React Native / Paper components
const TextInput: any = PaperTextInput;
const ScrollView: any = RNScrollView;
const KeyboardAvoidingView: any = RNKeyboardAvoidingView;

type SignUpScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignUp'>;

interface SignUpScreenProps {
  navigation: SignUpScreenNavigationProp;
}

export function SignUpScreen({ navigation }: SignUpScreenProps) {
  const theme = useTheme();
  const [fullName, setFullName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = () => {
    // Implement sign up logic
    console.log('Sign up pressed', { fullName, birthdate, email, phoneNumber });
  };

  return (
    <ImageBackground
      source={require('../../../assets/lavender_bg3.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <IconButton
                icon="chevron-left"
                size={30}
                onPress={() => navigation.goBack()}
                iconColor={theme.colors.primary}
              />
            </View>

            <View style={styles.content}>
              <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
                Crie sua conta ✨
              </Text>
              <Text variant="bodyLarge" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
                Comece sua jornada de autoconhecimento
              </Text>

              <Card mode="elevated" style={[styles.card, { backgroundColor: 'rgba(255, 255, 255, 0.8)' }]}>
                <Card.Content style={styles.cardContent}>
                  <TextInput
                    mode="outlined"
                    label="Nome completo*"
                    value={fullName}
                    onChangeText={setFullName}
                    style={styles.input}
                    outlineStyle={styles.inputOutline}
                  />

                  <TextInput
                    mode="outlined"
                    label="Data de nascimento*"
                    placeholder="DD/MM/AAAA"
                    value={birthdate}
                    onChangeText={setBirthdate}
                    style={styles.input}
                    outlineStyle={styles.inputOutline}
                    keyboardType="numeric"
                  />

                  <TextInput
                    mode="outlined"
                    label="E-mail*"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    outlineStyle={styles.inputOutline}
                  />

                  <TextInput
                    mode="outlined"
                    label="Telefone"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    style={styles.input}
                    keyboardType="phone-pad"
                    outlineStyle={styles.inputOutline}
                  />
                </Card.Content>
              </Card>

              <View style={styles.footer}>
                <Button
                  mode="contained"
                  onPress={handleSignUp}
                  style={styles.button}
                  contentStyle={styles.buttonContent}
                >
                  Criar conta
                </Button>

                <Button
                  mode="text"
                  textColor={theme.colors.primary}
                  onPress={() => navigation.navigate('SignIn')}
                >
                  Já tem uma conta? Entre
                </Button>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  content: {
    flex: 1,
    padding: 24,
    gap: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 16,
  },
  card: {
    borderRadius: 24,
    elevation: 2,
  },
  cardContent: {
    gap: 12,
    padding: 20,
  },
  input: {
    backgroundColor: 'transparent',
  },
  inputOutline: {
    borderRadius: 16,
  },
  footer: {
    marginTop: 16,
    gap: 8,
  },
  button: {
    borderRadius: 16,
  },
  buttonContent: {
    height: 56,
  },
});
