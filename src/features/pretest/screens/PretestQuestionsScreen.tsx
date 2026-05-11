import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Pressable, ScrollView, BackHandler, Animated } from 'react-native';
import { Text, Button, IconButton, useTheme, ProgressBar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
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

  // Animation values
  const slideAnim = React.useRef(new Animated.Value(0)).current;
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  const currentQuestion = PRETEST_QUESTIONS[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / PRETEST_QUESTIONS.length;

  React.useEffect(() => {
    slideAnim.setValue(30);
    fadeAnim.setValue(0);

    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentQuestionIndex]);

  const handleSelectOption = (value: number) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < PRETEST_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigation.navigate('SignUp');
      }
    }, 600);
  };

  const handleNext = () => {
    if (currentQuestionIndex < PRETEST_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('SignUp');
    }
  };



  const handleBack = React.useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigation.goBack();
    }
  }, [currentQuestionIndex, navigation]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        handleBack();
        return true;
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    }, [handleBack])
  );

  const selectedValue = answers[currentQuestion.id];
  const AnimatedView = Animated.View as any;

  return (
    <ImageBackground
      source={require('../../../assets/final_bg.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>


        <AnimatedView
          style={[
            styles.animatedContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateX: slideAnim }]
            }
          ]}
        >
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
        </AnimatedView>

        <View style={styles.bottomNavigation}>
          <View style={styles.navigationRow}>
            <IconButton
              icon="chevron-left"
              size={38}
              onPress={handleBack}
              iconColor={theme.colors.primary}
            />

            <View style={styles.segmentedProgressContainer}>
              {PRETEST_QUESTIONS.map((_, index) => {
                const isCompleted = index < currentQuestionIndex;
                const isCurrent = index === currentQuestionIndex;
                return (
                  <View
                    key={index}
                    style={[
                      styles.progressSegment,
                      {
                        backgroundColor: isCompleted || isCurrent
                          ? theme.colors.primary
                          : 'rgba(255, 255, 255, 0.3)',
                        opacity: isCurrent ? 1 : isCompleted ? 0.8 : 0.5
                      }
                    ]}
                  />
                );
              })}
            </View>

            <IconButton
              icon="chevron-right"
              size={38}
              onPress={handleNext}
              disabled={!selectedValue}
              iconColor={theme.colors.primary}
            />
          </View>

          <Text variant="labelSmall" style={[styles.progressText, { color: theme.colors.primary }]}>
            Questão {currentQuestionIndex + 1} de {PRETEST_QUESTIONS.length}
          </Text>
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
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  progressText: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center'
  },
  bottomNavigation: {
    paddingHorizontal: 12,
    paddingBottom: 30,
  },
  navigationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  segmentedProgressContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  animatedContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 3,
  },
  cardWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 0,
    overflow: 'hidden',
  },
  questionContainer: {
    marginBottom: 10,
    marginTop: 50,
    paddingHorizontal: 20,
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
  footer: {
    padding: 24,
    paddingBottom: 32,
  },
  nextButton: {
    borderRadius: 16,
  },
  nextButtonContent: {
    height: 56,
  },
});
