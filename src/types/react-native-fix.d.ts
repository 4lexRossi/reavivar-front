import 'react-native';
import {
  ViewProps,
  TextProps,
  ImageProps,
  ImageBackgroundProps,
  ScrollViewProps,
  TextInputProps,
  TouchableOpacityProps
} from 'react-native';
import { Component } from 'react';

declare module 'react-native' {
  interface View extends Component<ViewProps> { }
  interface Text extends Component<TextProps> { }
  interface Image extends Component<ImageProps> { }
  interface ImageBackground extends Component<ImageBackgroundProps> { }
  interface ScrollView extends Component<ScrollViewProps> { }
  interface TextInput extends Component<TextInputProps> { }
  interface TouchableOpacity extends Component<TouchableOpacityProps> { }
}

declare module 'react-native-safe-area-context' {
  import { SafeAreaViewProps } from 'react-native-safe-area-context';
  interface SafeAreaView extends Component<SafeAreaViewProps> { }
}
