import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const PlayScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileView}>
                <Pressable style={styles.profile}>
                    <FontAwesome5 name="pause" size={24} color="#ffff" />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c096c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileView: {
        width: '80%',
        alignItems: 'flex-end',
        position: 'absolute',
        top: '8%'
    },
    profile: {
        backgroundColor: '#ff9100',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#ffff'
    },
});

export default PlayScreen;