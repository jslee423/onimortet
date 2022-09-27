import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'
import { useRef, useState } from "react";

const Controls = () => {
    const dispatch = useDispatch();
    const speed = useSelector((state) => state.game.speed);

    const timer = useRef(null);
    const timerRotate = useRef(null);
    const timerRight = useRef(null);
    const timerDown = useRef(null);
    const [action, setAction] = useState('');

    const leftPressed = () => {
        dispatch(moveLeft());
        timer.current = setTimeout(leftPressed, 110);
    };

    const rightPressed = () => {
        dispatch(moveRight());
        timerRight.current = setTimeout(rightPressed, 110);
    };

    const downPressed = () => {
        dispatch(moveDown());
        timerDown.current = setTimeout(downPressed, 110);
    };

    const rotatePressed = () => {
        dispatch(rotate());
        timerRotate.current = setTimeout(rotatePressed, 1000);
    };

    const stopTimer = () => {
        clearTimeout(timer.current);
    };
    const stopTimerRight = () => {
        clearTimeout(timerRight.current);
    };
    const stopTimerDown = () => {
        clearTimeout(timerDown.current);
    };
    const stopTimerRotate = () => {
        clearTimeout(timerRotate.current);
    };


    return (
        <View style={styles.controls}>
            <View style={styles.controlsLeftRightDown}>
                <View style={styles.controlsLeftRight}>
                    {/* left */}
                    <View
                        onTouchStart={leftPressed}
                        onTouchEnd={stopTimer}
                        style={[styles.button, styles.buttonLeftRight]}
                    >
                        <TouchableOpacity>
                            <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.textStyle]}>
                                LEFT
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* right */}
                    <View
                        onTouchStart={rightPressed}
                        onTouchEnd={stopTimerRight}
                        style={[styles.button, styles.buttonLeftRight]}
                    >
                        <TouchableOpacity>
                            <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.textStyle]}>
                                RIGHT
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* down */}
                <View
                    onTouchStart={downPressed}
                    onTouchEnd={stopTimerDown}
                    style={[styles.button, styles.buttonDown]}
                >
                    <TouchableOpacity>
                        <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.textStyle]}>
                            DOWN
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            
            <View style={styles.controlsRotate}>
                {/* rotate */}
                <View onTouchStart={rotatePressed} onTouchEnd={stopTimerRotate}>
                    <TouchableOpacity style={[styles.buttonRotate]}>
                        <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.textStyle]}>
                            ROTATE
                        </Text>
                    </TouchableOpacity>
                </View>
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
        alignItems: 'flex-end'
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