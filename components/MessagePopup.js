import { StyleSheet, View, Text, Modal, Pressable } from "react-native"
import { useSelector, useDispatch } from "react-redux";
import { showModal, restart } from "../actions";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Displays a message
const MessagePopup = ({ navigation }) => {
    const dispatch = useDispatch();
    const gameOver = useSelector((state) => state.game.gameOver);
    const showPauseScreen = useSelector((state) => state.game.showPauseScreen);

    return (
        <View style={styles.messagePopup}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={gameOver ? true : showPauseScreen}
                animationInTiming={800}
                animationOutTiming={800}
                backdropTransitionInTiming={800}
                backdropTransitionOutTiming={800}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalPause}>
                        <View style={styles.modalView}>
                            <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.modalHeader]}>GAME OVER</Text>
                            <View style={styles.homeBtn}>
                                <Pressable onPress={() => navigation.navigate('Home')} style={styles.btnPress}>
                                    <Ionicons name="home" size={24} color="#ffff" />
                                </Pressable>
                            </View>
                            <View style={styles.restartBtn}>
                                <Pressable onPress={(e) => {
                                        dispatch(showModal());
                                        dispatch(restart());
                                    }}
                                    style={styles.btnPress}
                                >
                                    <MaterialCommunityIcons name="restart" size={24} color="#ffff" />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
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
        marginBottom: 10,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 35,
        color: '#3c096c'
    },
    modalView: {
        width: '70%',
        height: '20%',
        backgroundColor: '#f4effa',
        borderRadius: 7,
        // opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeBtn: {
        backgroundColor: 'rgba(223, 173, 36, 1)',
        width: '60%',
        height: '25%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%',
    },
    restartBtn: {
        backgroundColor: 'rgba(240, 80, 195, 1)',
        width: '60%',
        height: '25%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnPress: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default MessagePopup;