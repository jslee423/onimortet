import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import ContainerView from '../components/ContainerView';

const SettingScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Righteous-Regular': require('../assets/fonts/Righteous-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    };

    return (
        <ContainerView color='#f4effa'>
            <View style={styles.headerView}>
                <Pressable onPress={() => navigation.pop()}>
                    <Entypo name="back" size={40} color="#3c096c" />
                </Pressable>
                    <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.headerTitle]}>SETTINGS</Text>
            </View>
            <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.headerTitle]}>COMING SOON!</Text>
        </ContainerView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c096c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerView: {
        width: '80%',
        position: 'absolute',
        top: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        color: '#3c096c',
        fontSize: 30
    }
});

export default SettingScreen;