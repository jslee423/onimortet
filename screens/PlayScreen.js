import { StyleSheet, View, Text, Pressable } from 'react-native';
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
    const level = useSelector(state => state.game.level);
    const lines = useSelector(state => state.game.lines);
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
                <View>
                    <NextBlock />
                    <View style={styles.levelLineView}>
                        <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.levels]}>LEVEL</Text>
                        <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.levelCurrent]}>{level}</Text>
                        <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.lines]}>GOAL</Text>
                        <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.linesCurrent]}>{lines}</Text>
                    </View>
                </View>
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
        width: '90%',
        justifyContent: 'space-between'
    },
    levelLineView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    levels: {
        color: '#ffff',
        fontSize: 20,
        marginTop: 15
    },
    levelCurrent: {
        color: '#ffff',
        fontSize: 40
    },
    lines: {
        color: '#ffff',
        fontSize: 20,
    },
    linesCurrent: {
        color: '#ffff',
        fontSize: 40
    }
});

export default PlayScreen;