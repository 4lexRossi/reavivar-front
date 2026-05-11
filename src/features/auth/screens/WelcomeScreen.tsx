import React from "react";
import { View, StyleSheet, Pressable, ImageBackground } from "react-native";
import { Text, Button, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { MainStackParamList } from "@/app/navigation/MainNavigator";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<MainStackParamList, "Welcome">;

interface WelcomeScreenProps {
  navigation: WelcomeScreenNavigationProp;
}

interface MoodOption {
  emoji: string;
  label: string;
  value: string;
}

const moodOptions: MoodOption[] = [
  { emoji: "😄", label: "Excelente", value: "excelent" },
  { emoji: "🙂", label: "Bem", value: "good" },
  { emoji: "😐", label: "Ok", value: "ok" },
  { emoji: "😕", label: "Não muito bem", value: "so-so" },
  { emoji: "😦", label: "Ruim", value: "bad" },
];

export function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const theme = useTheme();
  const [selectedMood, setSelectedMood] = React.useState<string | null>(null);

  return (
    <ImageBackground
      source={require('../../../assets/final_bg.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.onSurface }]}>
            Reavivar 🌱
          </Text>

          <Text variant="titleMedium" style={[styles.question, { color: theme.colors.onSurface }]}>
            Como você está hoje?
          </Text>

          <View style={styles.moodList}>
            {moodOptions.map((mood) => {
              const isSelected = selectedMood === mood.value;
              return (
                <Pressable
                  key={mood.value}
                  onPress={() => setSelectedMood(mood.value)}
                  style={[
                    styles.moodButton,
                    {
                      backgroundColor: isSelected
                        ? theme.colors.primaryContainer
                        : 'rgba(255, 255, 255, 0.6)',
                      borderColor: isSelected
                        ? theme.colors.primary
                        : 'rgba(255, 255, 255, 0.3)',
                    },
                  ]}
                >
                  <Text style={styles.moodEmoji}>{mood.emoji}</Text>
                  <Text
                    variant="titleMedium"
                    style={[
                      styles.moodLabel,
                      {
                        color: isSelected
                          ? theme.colors.onPrimaryContainer
                          : theme.colors.onSurfaceVariant
                      }
                    ]}
                  >
                    {mood.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Button
            mode="contained"
            contentStyle={styles.continueButtonContent}
            style={styles.continueButton}
            disabled={!selectedMood}
            onPress={() => navigation.navigate("Tabs")}
          >
            Continuar
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
    marginBottom: 8,
  },
  question: {
    textAlign: 'center',
    marginBottom: 8,
  },
  moodList: {
    gap: 12,
  },
  moodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 16,
    borderWidth: 2,
    gap: 16,
  },
  moodEmoji: {
    fontSize: 32,
  },
  moodLabel: {
    flex: 1,
  },
  continueButton: {
    borderRadius: 16,
    marginTop: 8,
  },
  continueButtonContent: {
    height: 52,
  },
});
