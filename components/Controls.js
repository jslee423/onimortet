import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'

const Controls = (props) => {
    const dispatch = useDispatch();
    const isRunning = useSelector((state) => state.isRunning);
    const gameOver = useSelector((state) => state.game.gameOver);

    return (
        <View style={styles.controls}>
            <View style={styles.controlsLeftRight}>
                {/* left */}
                <TouchableOpacity style={[styles.button, styles.buttonLeftRight]} onPress={(e) => {
                    // if (!isRunning || gameOver) { return }
                    dispatch(moveLeft())
                }}>
                    <Text style={styles.textStyle}>
                        LEFT
                    </Text>
                </TouchableOpacity>
                {/* down */}
                <TouchableOpacity
                    style={[styles.button, styles.buttonDown]}
                    onPress={(e) => {
                        // if (!isRunning || gameOver) { return }
                        dispatch(moveDown())
                    }}
                >
                    <Text style={styles.textStyle}>
                        DOWN
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.controlsRotateDown}>
                {/* right */}
                <TouchableOpacity style={[styles.button, styles.buttonLeftRight]} onPress={(e) => {
                    // if (!isRunning || gameOver) { return }
                    dispatch(moveRight())
                }}>
                    <Text style={styles.textStyle}>
                        RIGHT
                    </Text>
                </TouchableOpacity> 
                {/* rotate */}
                <TouchableOpacity style={[styles.button, styles.buttonRestart]} onPress={(e) => {
                    // if (!isRunning || gameOver) { return }
                    dispatch(rotate())
                }}>
                    <Text style={styles.textStyle}>
                        ROTATE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    controls: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10%'
    },
    controlsLeftRight: {
        width: '45%'
    },
    controlsRotateDown: {
        width: '45%'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 20,
        marginHorizontal: 5
    },
    buttonRestart: {
        backgroundColor: "#cc00ff",
    },
    buttonLeftRight: {
        backgroundColor: 'rgba(255, 255, 255, 0.33)'
    },
    buttonDown: {
        backgroundColor: '#eec900'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});

export default Controls;