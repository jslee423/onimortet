import { Text, View } from "react-native";
import { useGameOver } from '../hooks/useGameOver';

const Game = ({ rows, columns }) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    return (
        <View>
            <Text>gameOver: {gameOver}</Text>
        </View>
    );
};

export default Game;