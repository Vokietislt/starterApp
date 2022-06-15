import { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/HomeStack';
import TaskContextProvider, { TaskContext } from './AppStates';
import LoginStack from './routes/LoginStack';

export default function App() {
  return (
    <TaskContextProvider>
      <Main />
    </TaskContextProvider>
  );
}

const Main = () => {
  const { user } = useContext(TaskContext)
  console.log(Object.keys(user).length, user)
  return (Object.keys(user).length <= 0 ? <LoginStack /> : <HomeStack />)
}


