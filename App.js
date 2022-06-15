import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/HomeStack';
import TaskContextProvider from './AppStates';
export default function App() {
  return (
    <TaskContextProvider>
      <HomeStack />
    </TaskContextProvider>
  );
}


