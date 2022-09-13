import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PlayScreen from '../screens/PlayScreen';
import SettingScreen from '../screens/SettingScreen';
import HighScoreScreen from '../screens/HighScoreScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
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
            <Stack.Screen
                name="HighScore"
                component={HighScoreScreen}
                options={{ title: 'HighScore', headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;