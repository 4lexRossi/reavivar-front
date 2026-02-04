import React, { useState } from 'react';
import { View, StyleSheet, ScrollView as RNScrollView, KeyboardAvoidingView as RNKeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { TextInput as PaperTextInput, Button, Text, Card, useTheme, IconButton, HelperText } from 'react-native-paper';
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

interface ValidationErrors {
  fullName?: string;
  birthdate?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
}

export function SignUpScreen({ navigation }: SignUpScreenProps) {
  const theme = useTheme();

  // Field states
  const [fullName, setFullName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // UI states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Masking Birthdate: DD/MM/AAAA
  const maskBirthdate = (text: string) => {
    const cleaned = text.replace(/\D/g, '').slice(0, 8);
    let masked = cleaned;
    if (cleaned.length > 2) {
      masked = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    if (cleaned.length > 4) {
      masked = `${masked.slice(0, 5)}/${cleaned.slice(4)}`;
    }
    setBirthdate(masked);
  };

  // Masking Phone: (XX) XXXXX-XXXX
  const maskPhoneNumber = (text: string) => {
    const cleaned = text.replace(/\D/g, '').slice(0, 11);
    let masked = cleaned;
    if (cleaned.length > 0) {
      masked = `(${cleaned.slice(0, 2)}`;
    }
    if (cleaned.length > 2) {
      masked = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    }
    if (cleaned.length > 7) {
      masked = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }
    setPhoneNumber(masked);
  };

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Mandatory fields
    if (!fullName.trim()) newErrors.fullName = 'Nome completo é obrigatório';
    if (!birthdate.trim()) newErrors.birthdate = 'Data de nascimento é obrigatória';
    if (!email.trim()) newErrors.email = 'E-mail é obrigatório';
    if (!password.trim()) newErrors.password = 'Senha é obrigatória';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() && !emailRegex.test(email)) {
      newErrors.email = 'Digite um e-mail válido';
    }

    // Birthdate validation (DD/MM/AAAA)
    if (birthdate.trim()) {
      const dateParts = birthdate.split('/');
      if (dateParts.length !== 3 || birthdate.length !== 10) {
        newErrors.birthdate = 'Use o formato DD/MM/AAAA';
      } else {
        const day = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const year = parseInt(dateParts[2]);
        const date = new Date(year, month - 1, day);
        if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
          newErrors.birthdate = 'Data inválida';
        } else if (year < 1900 || year > new Date().getFullYear()) {
          newErrors.birthdate = 'Ano inválido';
        }
      }
    }

    // Password rules
    if (password.trim()) {
      if (password.length < 8) {
        newErrors.password = 'A senha deve ter no mínimo 8 caracteres';
      } else if (!/[A-Z]/.test(password)) {
        newErrors.password = 'A senha deve conter pelo menos uma letra maiúscula';
      } else if (!/[0-9]/.test(password)) {
        newErrors.password = 'A senha deve conter pelo menos um número';
      }
    }

    // Password confirmation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validate()) {
      console.log('Sign up validated', { fullName, birthdate, email, phoneNumber, password });
      // Proceed with registration
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/final_bg.png')}
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
                  <View>
                    <TextInput
                      mode="outlined"
                      label="Nome completo*"
                      value={fullName}
                      onChangeText={(t: string) => { setFullName(t); if (errors.fullName) setErrors({ ...errors, fullName: undefined }); }}
                      error={!!errors.fullName}
                      style={styles.input}
                      outlineStyle={styles.inputOutline}
                    />
                    {errors.fullName && <HelperText type="error" visible={!!errors.fullName}>{errors.fullName}</HelperText>}
                  </View>

                  <View>
                    <TextInput
                      mode="outlined"
                      label="Data de nascimento*"
                      placeholder="DD/MM/AAAA"
                      value={birthdate}
                      onChangeText={(t: string) => { maskBirthdate(t); if (errors.birthdate) setErrors({ ...errors, birthdate: undefined }); }}
                      error={!!errors.birthdate}
                      style={styles.input}
                      outlineStyle={styles.inputOutline}
                      keyboardType="numeric"
                    />
                    {errors.birthdate && <HelperText type="error" visible={!!errors.birthdate}>{errors.birthdate}</HelperText>}
                  </View>

                  <View>
                    <TextInput
                      mode="outlined"
                      label="E-mail*"
                      value={email}
                      onChangeText={(t: string) => { setEmail(t); if (errors.email) setErrors({ ...errors, email: undefined }); }}
                      error={!!errors.email}
                      style={styles.input}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      outlineStyle={styles.inputOutline}
                    />
                    {errors.email && <HelperText type="error" visible={!!errors.email}>{errors.email}</HelperText>}
                  </View>

                  <View>
                    <TextInput
                      mode="outlined"
                      label="Telefone"
                      value={phoneNumber}
                      onChangeText={maskPhoneNumber}
                      style={styles.input}
                      keyboardType="phone-pad"
                      outlineStyle={styles.inputOutline}
                    />
                  </View>

                  <View>
                    <TextInput
                      mode="outlined"
                      label="Senha*"
                      value={password}
                      onChangeText={(t: string) => { setPassword(t); if (errors.password) setErrors({ ...errors, password: undefined }); }}
                      error={!!errors.password}
                      secureTextEntry={!showPassword}
                      right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
                      style={styles.input}
                      outlineStyle={styles.inputOutline}
                    />
                    {errors.password && <HelperText type="error" visible={!!errors.password}>{errors.password}</HelperText>}
                  </View>

                  <View>
                    <TextInput
                      mode="outlined"
                      label="Confirmar Senha*"
                      value={confirmPassword}
                      onChangeText={(t: string) => { setConfirmPassword(t); if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: undefined }); }}
                      error={!!errors.confirmPassword}
                      secureTextEntry={!showConfirmPassword}
                      right={<TextInput.Icon icon={showConfirmPassword ? "eye-off" : "eye"} onPress={() => setShowConfirmPassword(!showConfirmPassword)} />}
                      style={styles.input}
                      outlineStyle={styles.inputOutline}
                    />
                    {errors.confirmPassword && <HelperText type="error" visible={!!errors.confirmPassword}>{errors.confirmPassword}</HelperText>}
                  </View>
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
    gap: 4,
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
    paddingBottom: 40,
  },
  button: {
    borderRadius: 16,
  },
  buttonContent: {
    height: 56,
  },
});
