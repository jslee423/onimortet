import {
    StyleSheet,
    View,
    Button,
    Text,
    TouchableOpacity,
    Alert,
    Modal
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pause, resume, restart, showModal } from "../actions";

const ScoreBoard = (props) => {
    const dispatch = useDispatch();
    const game = useSelector((state) => state.game);
    const { score, isRunning, gameOver } = game;

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

    /* Button Colors */
//     --button-color-t: rgba(200, 200, 200, 1);
//     --button-color-r: rgba(150, 150, 150, 1);
//     --button-color-b: rgba(120, 120, 120, 1);
//     --button-color-l: rgba(222, 222, 222, 1);
/* Score Board */
// .score-board-button {
//     display: block;
//     padding: 1em;
//     border-width: 5px;
//     border-top-color: var(--button-color-t);
//     border-left-color: var(--button-color-l);
//     border-right-color: var(--button-color-r);
//     border-bottom-color: var(--button-color-b);
//   }