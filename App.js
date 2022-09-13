import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {   
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNavigator />
                <StatusBar style="auto" />
            </NavigationContainer>
        </Provider>
    );
};
