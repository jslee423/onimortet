import { StyleSheet, View, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import ContainerView from '../components/ContainerView';
import GridBoard from '../components/GridBoard';
import Controls from '../components/Controls';
import NextBlock from '../components/NextBlock';
import ScoreBoard from '../components/ScoreBoard';
import { pause } from '../actions';
import MessagePopup from '../components/MessagePopup';

const PlayScreen = ({ navigation }) => {
    const gameOver = useSelector(state => state.game.gameOver);
    const speed = useSelector(state => state.game.speed);
    const difficulty = useSelector(state => state.game.difficulty);
    const dispatch = useDispatch();

    const handlePause = () => {
        dispatch(pause());
        navigation.navigate('Pause');
    };

    return (
        <ContainerView>
            <View style={styles.pauseView}>
                <Pressable onPress={() => handlePause()} style={styles.pause}>
                    <FontAwesome5 name="pause" size={24} color="#ffff" />
                </Pressable>
            </View>
            <ScoreBoard />
            <View style={styles.playView}>
                <GridBoard />
                <NextBlock />
            </View>
            <Controls />
            <MessagePopup navigation={navigation} />
        </ContainerView>
    );
};

const styles = StyleSheet.create({
    pauseView: {
        width: '80%',
        alignItems: 'flex-end',
        position: 'absolute',
        top: '8%'
    },
    pause: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playView: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between'
    },
});

export default PlayScreen;