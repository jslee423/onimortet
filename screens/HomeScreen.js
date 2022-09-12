import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image
} from 'react-native';
import { useFonts } from 'expo-font';
import {
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome5
} from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Righteous-Regular': require('../assets/fonts/Righteous-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileView}>
                <Pressable style={styles.profile}>
                    <FontAwesome5 name="user-alt" size={24} color="#ffff" />
                </Pressable>
            </View>
            <View style={styles.title}>
                <Image source={require('../assets/images/pngegg.png')} style={styles.logo} />
                <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.titleText]}>ONIMORTET</Text>

            </View>
            <Pressable
                style={styles.playBtn}
                onPress={() => navigation.navigate('Play')}
            >
                <Ionicons name="ios-play" size={24} color="black" />
            </Pressable>
            <View style={styles.secondRowBtnView}>
                <Pressable
                    style={styles.highScoreBtn}
                    onPress={() => navigation.navigate('Play')}
                >
                    <MaterialCommunityIcons name="crown" size={24} color="black" />
                </Pressable>
                <Pressable
                    style={styles.settingBtn}
                    onPress={() => navigation.navigate('Setting')}
                >
                    <Ionicons name="settings-sharp" size={24} color="black" />
                </Pressable>
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
    profileView: {
        width: '80%',
        alignItems: 'flex-end',
        position: 'absolute',
        top: '8%'
    },
    profile: {
        backgroundColor: '#ff9100',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#ffff'
    },
    logo: {
        width: 70,
        height: 140,
        resizeMode: 'contain'
    },
    title: {
        width: '80%',
        marginBottom: '100%',
        alignItems: 'center'
    },
    titleText: {
        color: '#ffff',
        fontSize: 45,
    },
    playBtn: {
        backgroundColor: '#b3e9c7',
        width: '80%',
        height: '7%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%'
    },
    secondRowBtnView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        height: '7%',
    },
    highScoreBtn: {
        backgroundColor: '#ffc300',
        height: '100%',
        width: '48%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    settingBtn: {
        backgroundColor: '#f4effa',
        height: '100%',
        width: '48%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;