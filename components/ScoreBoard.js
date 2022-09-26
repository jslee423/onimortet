import {
    StyleSheet,
    View,
    Text,
} from "react-native";
import { useSelector } from "react-redux";

const ScoreBoard = (props) => {
    const game = useSelector((state) => state.game);
    const { score } = game;

    return (
        <View style={styles.scoreBoard}>
            <View style={styles.scoreLevel}>
                <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.label]}>SCORE</Text>
                <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.label]}>{ score }</Text>  
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
        marginBottom: '2%',
        display: 'flex',
        // flexDirection: 'row',
        // width: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: '#ffff',
        fontSize: 25
    },
    buttonDown: {
        backgroundColor: '#eec900'
    },
});

export default ScoreBoard;