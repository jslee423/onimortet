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
import * as Animatable from 'react-native-animatable';
import { useSelector, useDispatch } from 'react-redux';
// import { setGameOver } from '../redux/gameSlice';
import ContainerView from '../components/ContainerView';
import { restart } from '../actions';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const isRunning = useSelector((state) => state.game.isRunning);
    const gameOver = useSelector((state) => state.game.gameOver);
    const showPauseScreen = useSelector((state) => state.game.showPauseScreen);

    const [fontsLoaded] = useFonts({
        'Righteous-Regular': require('../assets/fonts/Righteous-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    };

    const play = () => {
        dispatch(restart());
        navigation.navigate('Play');
    };

    return (
        <ContainerView>
            <Animatable.View style={styles.profileView} animation='bounceInDown' delay={1500} duration={2200}>
                <Pressable style={styles.profile}>
                    <FontAwesome5 name="user-alt" size={24} color="#ffff" />
                </Pressable>
            </Animatable.View>
            <Animatable.View style={styles.title} animation='bounceInDown' delay={1000} duration={2200}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.titleText]}>ONIMORTET</Text>

            </Animatable.View>
            <Animatable.View style={styles.playBtn} animation='bounceInDown' delay={500} duration={2000}>
                <Pressable onPress={() => play()} style={styles.playBtnPress}>
                    <Ionicons name="ios-play" size={24} color="black" />
                </Pressable>
            </Animatable.View>
            <Animatable.View style={styles.secondRowBtnView} animation='bounceInDown' duration={2000}>
                <Pressable
                    style={styles.highScoreBtn}
                    onPress={() => navigation.navigate('HighScore')}
                >
                    <MaterialCommunityIcons name="crown" size={24} color="black" />
                </Pressable>
                <Pressable
                    style={styles.settingBtn}
                    onPress={() => navigation.navigate('Setting')}
                >
                    <Ionicons name="settings-sharp" size={24} color="black" />
                </Pressable>
            </Animatable.View>
        </ContainerView>
    );
};

const styles = StyleSheet.create({
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
    playBtnPress: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
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