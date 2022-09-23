import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import ContainerView from '../components/ContainerView';
import { useSelector, useDispatch } from 'react-redux';
import { setDifficulty } from '../actions';

const SettingScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const difficulty = useSelector((state) => state.game.difficulty);
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
            <View style={[styles.playBtn, difficulty === 'EASY' ? { backgroundColor: '#00ff00' }
                                : difficulty === 'MEDIUM' ? { backgroundColor: '#ffc300' }
                                : difficulty === 'HARD' ? { backgroundColor: '#ff0000' }
                                : '']}>
                <Pressable style={styles.playBtnPress} onPress={() => dispatch(setDifficulty())}>
                    <Text style={[{ fontFamily: 'Righteous-Regular' }]}>
                        DIFFICULTY: 
                        <Text>
                            {difficulty}
                        </Text>
                    </Text>
                </Pressable>
            </View>
            <View style={styles.playBtn}>
                <Pressable style={styles.playBtnPress}>
                    <Text style={[{ fontFamily: 'Righteous-Regular' }]}>PROFILE</Text>
                </Pressable>
            </View>
            <View style={styles.playBtn}>
                <Pressable style={styles.playBtnPress}>
                    <Text style={[{ fontFamily: 'Righteous-Regular' }]}>RESET DATA</Text>
                </Pressable>
            </View>
            <View style={styles.playBtn}>
                <Pressable style={styles.playBtnPress}>
                    <Text style={[{ fontFamily: 'Righteous-Regular' }]}>LOGIN</Text>
                </Pressable>
            </View>
            {/* <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.headerTitle]}>COMING SOON!</Text> */}
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
    },
    playBtn: {
        backgroundColor: '#D3D3D3',
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
});

export default SettingScreen;