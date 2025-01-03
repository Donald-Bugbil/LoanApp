# Loan Application Mobile App

A React Native mobile application for loan applications with features including eligibility checking, document upload, and loan status tracking.

## Tech Stack

- React Native (with Expo)
- React Navigation 6.x
- Expo Image Picker
- React Native Safe Area Context

## Features

- Multi-step loan application process
- Document upload functionality
- Real-time eligibility checking
- Progress tracking
- Form validation
- Responsive design

## Prerequisites

- Node.js >= 14.x
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/loan-app.git
cd loan-app
```

2. Install dependencies:
```bash
npm install
```

3. Install Expo CLI globally (if not already installed):
```bash
npm install -g expo-cli
```

## Project Structure

```
loan-app/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header/
│   │   └── ProgressBar/
│   ├── screens/           # Application screens
│   │   ├── HomeScreen/
│   │   ├── EligibilityScreen/
│   │   ├── LoanInfoScreen/
│   │   ├── DocumentUploadScreen/
│   │   ├── PreApprovalScreen/
│   │   └── SuccessScreen/
│   ├── navigation/        # Navigation configuration
│   └── utils/            # Utility functions
├── assets/              # Static assets
├── App.js              # Application entry point
└── package.json        # Project dependencies
```

## Running the App

1. Start the development server:
```bash
npx expo start
```

2. Run on Android:
```bash
npx expo start --android
```

3. Run on iOS:
```bash
npx expo start --ios
```

## Key Components

### Navigation
- Stack navigation using @react-navigation/native-stack
- Custom header components
- Progress tracking across screens

### Form Handling
- Input validation
- Error handling
- File upload support
- Progress tracking

## Screen Details

1. **Home Screen**
   - Menu options for different loan services
   - Navigation to loan application process

2. **Eligibility Screen**
   - Initial eligibility verification
   - Progress bar implementation
   - Navigation controls

3. **Loan Info Screen**
   - Loan amount input
   - Tenure selection
   - Interest rate display
   - Fee calculation

4. **Document Upload Screen**
   - ID card upload
   - Salary domiciliation letter upload
   - File type validation
   - Upload status indication

5. **Pre-approval Screen**
   - Loan approval status
   - Amount confirmation
   - Terms display

6. **Success Screen**
   - Application confirmation
   - Reference number display
   - Next steps information

## Development Guidelines

### Styling
- Use StyleSheet for component styling
- Follow platform-specific guidelines
- Implement responsive design patterns

### Component Structure
- Implement functional components
- Use React hooks for state management
- Follow container/presenter pattern

### Navigation
- Implement proper navigation lifecycle
- Handle back navigation
- Maintain navigation state
