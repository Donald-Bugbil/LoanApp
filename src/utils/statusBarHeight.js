// src/utils/statusBarHeight.js
import { Platform, StatusBar } from 'react-native';

export const STATUSBAR_HEIGHT = Platform.select({
  ios: 44,
  android: StatusBar.currentHeight,
  default: 0
});