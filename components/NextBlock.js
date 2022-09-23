import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import GridSquare from './GridSquare'
import ScoreBoard from './ScoreBoard';
import { useSelector } from 'react-redux'
import { shapes } from '../utils'

// Draws the "next" block view showing the next block to drop
const NextBlock = (props) => {
    const nextShape = useSelector((state) => state.game.nextShape)
    const box = shapes[nextShape][0] // Get the first rotation
    // Map the block to the grid
    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square === 0 ? 0 : nextShape} nextBlock />;
        });
    })

    return (
        <View style={styles.nextBlock}>
            {grid}
        </View>
    );
};

const styles = StyleSheet.create({
    nextBlock: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 72,
        height: 72,
        backgroundColor: 'rgb(32, 0, 64)',
        borderRadius: 5
    }
});

export default NextBlock;