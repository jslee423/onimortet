import { StyleSheet, View, Text, Alert, Modal, TouchableOpacity, Pressable } from "react-native"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resume, showModal, restart } from "../actions";

// Displays a message
const MessagePopup = (props) => {
    // const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const isRunning = useSelector((state) => state.game.isRunning);
    const gameOver = useSelector((state) => state.game.gameOver);
    const showPauseScreen = useSelector((state) => state.game.showPauseScreen);

    let message = '';
    let buttonText = '';
    let pauseStatus = '';

    if (gameOver) {
        message = 'GAME OVER';
        buttonText = 'RESTART';
        pauseStatus = 'gameover';
    } else if (!isRunning) {
        message = 'PAUSED';
        buttonText = 'RESUME';
        pauseStatus = 'pause';
    }

    return (
        <View style={styles.messagePopup}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={gameOver ? true : showPauseScreen}
                // onRequestClose={() => {
                //     Alert.alert("Modal has been closed.");
                //     setModalVisible(!modalVisible);
                // }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalPause}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalHeader}>{message}</Text>
                            {!gameOver &&
                                <TouchableOpacity style={[styles.button, styles.buttonResume]} onPress={(e) => {
                                    if (gameOver) { return }
                                    dispatch(resume());
                                    dispatch(showModal());
                                }}>
                                    <Text style={styles.textStyle}>{buttonText}</Text>
                                </TouchableOpacity>
                            }
                          
                                <TouchableOpacity style={[styles.button, styles.buttonRestart]} onPress={(e) => {
                                    if (gameOver) {
                                        dispatch(showModal());
                                        dispatch(restart());
                                    } else {
                                        dispatch(showModal());
                                        dispatch(restart());
                                    }
                                    
                                }}>
                                    <Text style={styles.textStyle}>RESTART</Text>
                                </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        backgroundColor: '#eaeaea',
        // opacity: 0.8
    },
    modalPause: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 20
    },
    buttonRestart: {
        backgroundColor: "#cc00ff",
    },
    buttonResume: {
        backgroundColor: "#0000ff",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalHeader: {
        marginBottom: 50,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 35
    }
});

export default MessagePopup;