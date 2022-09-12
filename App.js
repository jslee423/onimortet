import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PlayScreen from './screens/PlayScreen';
import SettingScreen from './screens/SettingScreen';

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Home', headerShown: false }}
                />
                <Stack.Screen
                    name="Play"
                    component={PlayScreen}
                    options={{ title: 'Play', headerShown: false }}
                />
                <Stack.Screen
                    name="Setting"
                    component={SettingScreen}
                    options={{ title: 'Setting', headerShown: false }}
                />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c096c',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
