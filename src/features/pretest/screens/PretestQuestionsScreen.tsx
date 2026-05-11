import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Pressable, ScrollView } from 'react-native';
import { Text, Button, IconButton, useTheme, ProgressBar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/app/navigation/types';
import { PRETEST_QUESTIONS } from '../pretest.data';

type PretestQuestionsScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'PreTestQuestions'>;

interface PretestQuestionsScreenProps {
  navigation: PretestQuestionsScreenNavigationProp;
}

export function PretestQuestionsScreen({ navigation }: PretestQuestionsScreenProps) {
  const theme = useTheme();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const currentQuestion = PRETEST_QUESTIONS[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / PRETEST_QUESTIONS.length;

  const handleSelectOption = (value: number) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < PRETEST_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigation.navigate('SignUp');
      }
    }, 400);
  };



  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigation.goBack();
    }
  };

  const selectedValue = answers[currentQuestion.id];

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
            onPress={handleBack}
            iconColor={theme.colors.primary}
          />
          <View style={styles.progressContainer}>
            <ProgressBar
              progress={progress}
              color={theme.colors.primary}
              style={styles.progressBar}
            />
            <Text variant="labelMedium" style={[styles.progressText, { color: theme.colors.primary }]}>
              {currentQuestionIndex + 1} de {PRETEST_QUESTIONS.length}
            </Text>
          </View>
        </View>

        <View style={styles.questionContainer}>
          <Text
            variant="headlineSmall"
            style={[styles.questionText, { color: theme.colors.onSurface }]}
          >
            {currentQuestion.text}
          </Text>
        </View>

        <View style={styles.cardWrapper}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.optionsList}>
              {currentQuestion.options.map((option) => {
                const isSelected = selectedValue === option.value;
                return (
                  <Pressable
                    key={option.value}
                    onPress={() => handleSelectOption(option.value)}
                    style={[
                      styles.optionButton,
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
                    <Text style={styles.optionEmoji}>{option.emoji}</Text>
                    <Text
                      variant="bodyMedium"
                      style={[
                        styles.optionLabel,
                        {
                          color: isSelected
                            ? theme.colors.onPrimaryContainer
                            : theme.colors.onSurfaceVariant,
                          fontWeight: isSelected ? '600' : '500',
                        }
                      ]}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
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
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  progressContainer: {
    flex: 1,
    marginRight: 48,
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  progressText: {
    marginTop: 4,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 30,
  },
  cardWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 0,
    overflow: 'hidden',
  },
  questionContainer: {
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 24,
  },
  questionText: {
    textAlign: 'center',
    lineHeight: 34,
    fontWeight: 'bold',
  },
  optionsList: {
    gap: 10,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 18,
    borderWidth: 1.5,
    gap: 12,
  },
  optionEmoji: {
    fontSize: 24,
  },
  optionLabel: {
    flex: 1,
    lineHeight: 20,
  },
});
