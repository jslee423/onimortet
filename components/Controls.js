import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'

const Controls = () => {
    const dispatch = useDispatch();
    const isRunning = useSelector((state) => state.isRunning);
    const gameOver = useSelector((state) => state.game.gameOver);

    return (
        <View style={styles.controls}>
            <View style={styles.controlsRotate}>
                {/* rotate */}
                <TouchableOpacity style={[styles.buttonRotate]} onPress={(e) => {
                    // if (!isRunning || gameOver) { return }
                    dispatch(rotate())
                }}>
                    <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.textStyle]}>
                        ROTATE
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.controlsLeftRightDown}>
                <View style={styles.controlsLeftRight}>
                    {/* left */}
                    <TouchableOpacity style={[styles.button, styles.buttonLeftRight]} onPress={(e) => {
                        // if (!isRunning || gameOver) { return }
                        dispatch(moveLeft())
                    }}>
                        <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.textStyle]}>
                            LEFT
                        </Text>
                    </TouchableOpacity>
                    {/* right */}
                    <TouchableOpacity style={[styles.button, styles.buttonLeftRight]} onPress={(e) => {
                        // if (!isRunning || gameOver) { return }
                        dispatch(moveRight())
                    }}>
                        <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.textStyle]}>
                            RIGHT
                        </Text>
                    </TouchableOpacity> 
                </View>
                {/* down */}
                <TouchableOpacity
                    style={[styles.button, styles.buttonDown]}
                    onPress={(e) => {
                        // if (!isRunning || gameOver) { return }
                        dispatch(moveDown())
                    }}
                >
                    <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.textStyle]}>
                        DOWN
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
        marginTop: '10%',
        width: '90%'
    },
    controlsRotate: {
        width: '50%',
    },
    controlsLeftRightDown: {
        width: '50%',
        alignItems: 'center'
    },
    controlsLeftRight: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 20,
        marginHorizontal: 5,
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonRotate: {
        backgroundColor: "#cc00ff",
        width: 130,
        height: 130,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLeftRight: {
        backgroundColor: '#3590f3',
    },
    buttonDown: {
        backgroundColor: '#eec900',
        width: '60%'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});

export default Controls;