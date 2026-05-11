import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { TextInput as PaperTextInput, Button, Text, Card, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/app/navigation/types';
import { useAuth } from '@/store/AuthContext';

const TextInput: any = PaperTextInput;

type SignInScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignIn'>;

interface SignInScreenProps {
  navigation: SignInScreenNavigationProp;
}

export function SignInScreen({ navigation }: SignInScreenProps) {
  const theme = useTheme();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    try {
      await signIn({ email, password });
    } catch (error: any) {
      Alert.alert('Erro no Login', error.response?.data?.message || 'Ocorreu um erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/final_bg.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
            Bem-vindo de volta 🌱
          </Text>
          <Text variant="bodyLarge" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
            Entre para continuar sua jornada
          </Text>

          <Card mode="contained" style={[styles.card, { backgroundColor: 'rgba(255, 255, 255, 0.8)' }]}>
            <Card.Content style={styles.cardContent}>
              <TextInput
                mode="outlined"
                label="E-mail"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                outlineStyle={styles.inputOutline}
              />

              <TextInput
                mode="outlined"
                label="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureTextEntry}
                right={
                  <TextInput.Icon
                    icon={secureTextEntry ? "eye" : "eye-off"}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                  />
                }
                style={styles.input}
                outlineStyle={styles.inputOutline}
              />

              <Button
                mode="text"
                onPress={() => navigation.navigate('ForgotPassword')}
                style={styles.forgotButton}
                compact
              >
                Esqueceu a senha?
              </Button>
            </Card.Content>
          </Card>

          <Button
            mode="contained"
            onPress={handleSignIn}
            loading={loading}
            disabled={loading}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Entrar
          </Button>

          <Button
            mode="text"
            textColor={theme.colors.primary}
            onPress={() => navigation.navigate('SignUp')}
          >
            Não tem conta? Cadastre-se
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
  content: {
    flex: 1,
    padding: 24,
    gap: 16,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 8,
  },
  card: {
    borderRadius: 20,
  },
  cardContent: {
    gap: 8,
    padding: 16,
  },
  input: {
    backgroundColor: 'transparent',
  },
  inputOutline: {
    borderRadius: 12,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  button: {
    borderRadius: 16,
  },
  buttonContent: {
    height: 52,
  },
});
