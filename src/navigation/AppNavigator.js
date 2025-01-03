// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import EligibilityScreen from '../screens/EligibilityScreen';
import LoanInfoScreen from '../screens/LoanInfoScreen';
import DocumentUploadScreen from '../screens/DocumentUploadScreen';
import PreApprovalScreen from '../screens/PreApprovalScreen';
import SuccessScreen from '../screens/SuccessScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <>
       <StatusBar 
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={true}
      />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'white' }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Eligibility" 
          component={EligibilityScreen} 
        />
        <Stack.Screen 
          name="LoanInfo" 
          component={LoanInfoScreen} 
        />
        <Stack.Screen 
          name="DocumentUpload" 
          component={DocumentUploadScreen} 
        />
        <Stack.Screen 
          name="PreApproval" 
          component={PreApprovalScreen} 
        />
        <Stack.Screen 
          name="Success" 
          component={SuccessScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>

    </>
  );
};

export default AppNavigator;