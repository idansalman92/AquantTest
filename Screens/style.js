import {StyleSheet, Dimensions, Platform} from 'react-native'
import Constants from 'expo-constants';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height; 
export const curHeight = Constants.statusBarHeight;

export default StyleSheet.create({});