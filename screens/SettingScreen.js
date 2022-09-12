import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const SettingScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Righteous-Regular': require('../assets/fonts/Righteous-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Pressable onPress={() => navigation.pop()}>
                    <Entypo name="back" size={40} color="#ffff" />
                </Pressable>
                    <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.headerTitle]}>SETTINGS</Text>
            </View>
        </View>
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
        color: '#ffff',
        fontSize: 30
    }
});

export default SettingScreen;