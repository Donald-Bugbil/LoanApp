// src/components/ProgressBar/index.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ currentStep }) => {
  const steps = ['A', 'B', 'C', 'D', 'E'];
  
  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressBar}>
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <View style={[
              styles.progressStep,
              {
                backgroundColor: index <= currentStep ? '#1a365d' : '#fff',
                borderColor: '#1a365d',
              }
            ]}>
              <Text style={[
                styles.progressText,
                { color: index <= currentStep ? '#fff' : '#1a365d' }
              ]}>
                {step}
              </Text>
            </View>
            {index < steps.length - 1 && (
              <View style={[
                styles.progressLine,
                { backgroundColor: index < currentStep ? '#1a365d' : '#e2e8f0' }
              ]} />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    padding: 16,
    backgroundColor: '#f8fafc',
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressStep: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
  },
  progressLine: {
    width: 40,
    height: 2,
    marginHorizontal: 4,
  },
});

export default ProgressBar;