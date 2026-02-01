import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput as PaperTextInput, Button, Text, Card, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const TextInput: any = PaperTextInput;

export function SignInScreen() {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text variant="headlineSmall" style={[styles.title, { color: theme.colors.onSurface }]}>
          Bem-vindo de volta 🌱
        </Text>
        <Text variant="bodyLarge" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
          Entre para continuar sua jornada
        </Text>

        <Card mode="elevated" style={[styles.card, { backgroundColor: theme.colors.surfaceVariant }]}>
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
              onPress={() => console.log('Forgot password pressed')}
              style={styles.forgotButton}
              compact
            >
              Esqueceu a senha?
            </Button>
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          onPress={() => console.log('Login pressed')}
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Entrar
        </Button>

        <Button
          mode="text"
          textColor={theme.colors.primary}
          onPress={() => console.log('SignUp pressed')}
        >
          Não tem conta? Cadastre-se
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
