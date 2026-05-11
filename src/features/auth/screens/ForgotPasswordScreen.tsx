import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Alert, Keyboard } from 'react-native';
import { TextInput as PaperTextInput, Button, Text, Card, useTheme, IconButton, Portal, Dialog } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/app/navigation/types';
import { useAuth } from '@/store/AuthContext';

const TextInput: any = PaperTextInput;

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'ForgotPassword'>;

interface ForgotPasswordScreenProps {
  navigation: ForgotPasswordScreenNavigationProp;
}

export function ForgotPasswordScreen({ navigation }: ForgotPasswordScreenProps) {
  const theme = useTheme();
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleResetPassword = async () => {
    Keyboard.dismiss();
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira seu e-mail.');
      return;
    }

    setLoading(true);
    try {
      const response = await forgotPassword(email);
      setDialogMessage(response.message);
      setDialogVisible(true);
    } catch (error: any) {
      Alert.alert('Erro', 'Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.');
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
            Recuperar Senha 🔑
          </Text>
          <Text variant="bodyLarge" style={[styles.subtitle, { color: theme.colors.onSurface }]}>
            Insira seu e-mail cadastrado para receber as instruções de recuperação.
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
            </Card.Content>
          </Card>

          <Button
            mode="contained"
            onPress={handleResetPassword}
            loading={loading}
            disabled={loading}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Enviar Instruções
          </Button>

          <Button
            mode="text"
            textColor={theme.colors.primary}
            onPress={() => navigation.navigate('SignIn')}
          >
            Voltar para o Login
          </Button>
        </View>

        <Portal>
          <Dialog
            visible={dialogVisible}
            onDismiss={() => {
              setDialogVisible(false);
              navigation.navigate('SignIn');
            }}
            style={styles.dialog}
          >
            <Dialog.Icon icon="email-check-outline" color={theme.colors.primary} size={40} />
            <Dialog.Title style={styles.dialogTitle}>Verifique seu E-mail</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium" style={styles.dialogMessage}>
                {dialogMessage}
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button 
                mode="contained"
                onPress={() => {
                  setDialogVisible(false);
                  navigation.navigate('SignIn');
                }}
                style={styles.dialogButton}
              >
                Entendido
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
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
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  content: {
    flex: 1,
    padding: 24,
    gap: 16,
    paddingTop: 40,
  },
  title: {
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 24,
    lineHeight: 24,
  },
  card: {
    borderRadius: 24,
    marginBottom: 8,
  },
  cardContent: {
    padding: 16,
  },
  input: {
    backgroundColor: 'transparent',
  },
  inputOutline: {
    borderRadius: 16,
  },
  button: {
    borderRadius: 16,
    marginTop: 8,
  },
  buttonContent: {
    height: 56,
  },
  dialog: {
    borderRadius: 28,
    backgroundColor: 'white',
    paddingVertical: 8,
  },
  dialogTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  dialogMessage: {
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.8,
  },
  dialogButton: {
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 8,
    flex: 1,
  },
});
