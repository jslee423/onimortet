import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import GridSquare from './GridSquare'
import ScoreBoard from './ScoreBoard';
import { useSelector } from 'react-redux'
import { shapes } from '../utils'

// Draws the "next" block view showing the next block to drop
const NextBlock = (props) => {
    const nextShape = useSelector((state) => state.game.nextShape);
    const difficulty = useSelector((state) => state.game.difficulty);
    const box = shapes[nextShape][0]; // Get the first rotation
    // Map the block to the grid
    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square === 0 ? 0 : nextShape} nextBlock />;
        });
    })

    return (
        <View style={[difficulty === 'MEDIUM' ? styles.medDiff
            : difficulty === 'HARD' ? styles.hardDiff
            : '',
            styles.nextBlock]}
        >
            {grid}
        </View>
    );
};

const styles = StyleSheet.create({
    nextBlock: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 82,
        height: 82,
        backgroundColor: 'rgb(32, 0, 64)',
        borderRadius: 5
    },
    medDiff: {
        borderColor: 'yellow',
        borderWidth: 1,
    },
    hardDiff: {
        borderColor: 'red',
        borderWidth: 1,
    }
});

export default NextBlock;