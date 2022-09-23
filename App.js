import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { Provider } from 'react-redux';
// import { store } from './redux/store';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

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
