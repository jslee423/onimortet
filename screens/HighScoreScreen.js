import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import ContainerView from '../components/ContainerView';
import * as Animatable from 'react-native-animatable';

const HighScoreScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Righteous-Regular': require('../assets/fonts/Righteous-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    };

    return (
        <ContainerView color='#ffc300'>
            <View style={styles.headerView}>
                <Pressable onPress={() => navigation.pop()}>
                    <Entypo name="back" size={40} color="#ffff" />
                </Pressable>
                    <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.headerTitle]}>HIGH SCORES</Text>
            </View>
            {/* <Animatable.View style={styles.scoreList}>
                <Text style={styles.text}>Test</Text>
            </Animatable.View> */}
            <Text style={[{ fontFamily: 'Righteous-Regular' }, styles.headerTitle]}>COMING SOON!</Text>
        </ContainerView>
    );
};

const styles = StyleSheet.create({
    headerView: {
        width: '80%',
        position: 'absolute',
        top: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        color: '#ffff',
        fontSize: 30
    },
    scoreList: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '80%',
        height: '60%',
        borderRadius: 15,
        // opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 50,
        color: 'white'
    }
});

export default HighScoreScreen;