
import 'react-native';
import { ViewProps, TextProps } from 'react-native';
import { Component } from 'react';

declare module 'react-native' {
  // Augment the View class instance type to explicitly include proper Component members
  interface View extends Component<ViewProps> { }
  interface Text extends Component<TextProps> { }
}
