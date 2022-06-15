import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Count from '../screens/Count';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Count" component={Count} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default HomeStack