import ContainerView from "../components/ContainerView";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { resume, restart, pause } from "../actions";

const PauseScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const score = useSelector((state) => state.game.score);
    const level = useSelector((state) => state.game.level);

    const handleResume = () => {
        dispatch(resume());
        navigation.pop();
    };

    const handleRestart = () => {
        dispatch(restart());
        navigation.pop();
    }

    const handleHome = () => {
        dispatch(pause());
        navigation.navigate('Home');
    };

    return (
        <ContainerView color='rgba(132, 61, 198, 1)'>
            <View style={styles.headerView}>
                <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.headerTitle]}>PAUSED</Text>
            </View>
            <View style={styles.scoreLevel}>
                <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.scoreLevelText]}>LEVEL: {level}</Text>
                <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.scoreLevelText]}>SCORE: {score}</Text>
            </View>
            <View style={styles.profileView}>
                <Pressable style={styles.profile}>
                    <FontAwesome5 name="user-alt" size={70} color="#ffff" />
                </Pressable>
            </View>
            <View style={styles.resumeBtn}>
                <Pressable onPress={() => handleResume()} style={styles.btnPress}>
                    <Ionicons name="ios-play" size={24} color="#ffff" />
                    {/* <Text>RESUME</Text> */}
                </Pressable>
            </View>
            <View style={styles.restartBtn}>
                <Pressable onPress={() => handleRestart()} style={styles.btnPress}>
                    {/* <Ionicons name="ios-play" size={24} color="black" /> */}
                    <MaterialCommunityIcons name="restart" size={24} color="#ffff" />
                </Pressable>
            </View>
            <View style={styles.homeBtn}>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.btnPress}>
                    {/* <Ionicons name="ios-play" size={24} color="black" /> */}
                    <Ionicons name="home" size={24} color="#ffff" />
                </Pressable>
            </View>
        </ContainerView>
    );
};

const styles = StyleSheet.create({
    headerView: {
        width: '80%',
        position: 'absolute',
        top: '8%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#ffff',
        fontSize: 30
    },
    scoreLevel: {
        color: '#ffff',
        flexDirection: 'row',
    },
    scoreLevelText: {
        color: '#ffff',
        fontSize: 20,
        marginHorizontal: '10%'
    },
    profileView: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        marginBottom: '30%'
    },
    profile: {
        backgroundColor: '#ff9100',
        width: 150,
        height: 150,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: '#ffff'
    },
    resumeBtn: {
        backgroundColor: 'rgba(48, 211, 56, 1)',
        width: '80%',
        height: '7%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%'
    },
    restartBtn: {
        backgroundColor: 'rgba(240, 80, 195, 1)',
        width: '80%',
        height: '7%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%'
    },
    homeBtn: {
        backgroundColor: 'rgba(223, 173, 36, 1)',
        width: '80%',
        height: '7%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%',
        marginTop: '10%'
    },
    btnPress: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default PauseScreen;