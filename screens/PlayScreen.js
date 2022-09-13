import { StyleSheet, Text, View, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Game from '../components/Game';
import { useSelector } from 'react-redux';
import ContainerView from '../components/ContainerView';

const PlayScreen = ({ navigation }) => {
    const gameOver = useSelector(state => state.game.gameOver);
    return (
        <ContainerView>
            <View style={styles.profileView}>
                <Pressable onPress={() => navigation.pop()} style={styles.profile}>
                    <FontAwesome5 name="pause" size={24} color="#ffff" />
                </Pressable>
            </View>
            <Text>gameover: {gameOver.toString()}</Text>
            <Game rows={20} columns={10} />
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
        // backgroundColor: '#ff9100',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 3,
        // borderColor: '#ffff'
    },
});

export default PlayScreen;