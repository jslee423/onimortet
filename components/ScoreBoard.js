import {
    StyleSheet,
    View,
    Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

const ScoreBoard = (props) => {
    const dispatch = useDispatch();
    const game = useSelector((state) => state.game);
    const { score } = game;

    return (
        <View style={styles.scoreBoard}>
            <View style={styles.scoreLevel}>
                <Text style={[{ fontFamily: 'Righteous-Regular', marginRight: 50 }, styles.label]}>Level: 1</Text>
                <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.label]}>Score: { score }</Text>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scoreBoard: {
        marginTop: '10%',
        alignItems: 'center'
    },
    scoreLevel: {
        marginBottom: '5%',
        display: 'flex',
        flexDirection: 'row',
        // width: '60%',
        justifyContent: 'center'
    },
    label: {
        color: 'white',
        fontSize: 25
    },
    buttonDown: {
        backgroundColor: '#eec900'
    },
});

export default ScoreBoard;