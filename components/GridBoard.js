import { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import GridSquare from "./GridSquare";
import { useSelector, useDispatch } from "react-redux";
import { shapes } from "../utils";
import { moveDown } from "../actions";

// Represents a 10 x 18 grid of grid squares
const GridBoard = (props) => {
    const requestRef = useRef();
    const lastUpdateTimeRef = useRef(0);
    const progressTimeRef = useRef(0);
    const dispatch = useDispatch();
    const game = useSelector((state) => state.game);
    const { grid, shape, rotation, x, y, isRunning, speed, difficulty } = game;
    const block = shapes[shape][rotation];
    const blockColor = shape;

    const update = (time) => {
        requestRef.current = requestAnimationFrame(update)
        if (!isRunning) {
            return;
        }
        if (!lastUpdateTimeRef.current) {
            lastUpdateTimeRef.current = time;
        }
        const deltaTime = time - lastUpdateTimeRef.current;
        progressTimeRef.current += deltaTime;
        if (progressTimeRef.current > speed) {
            dispatch(moveDown());
            progressTimeRef.current = 0;
        }
        lastUpdateTimeRef.current = time;
    };
    
    // map rows
    const gridSquares = grid.map((rowArray, row) => {
        // map columns
        return rowArray.map((square, col) => {
            // Find the block x and y on the shape grid
            // By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array as if it was superimposed over the main grid
            const blockX = col - x;
            const blockY = row - y;
            let color = square;
            // Map current falling block to grid.
            // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
            if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
                color = block[blockY][blockX] === 0 ? color : blockColor;
            }
            // Generate a unique key for every block
            const k = row * grid[0].length + col;
            // Generate a grid square
            return <GridSquare key={k} color={color} />
        });
    });

    useEffect(() => {
        requestRef.current = requestAnimationFrame(update)
        return () => cancelAnimationFrame(requestRef.current)
    }, [isRunning])
  
    // The components generated in makeGrid are rendered in div.grid-board
    return (
        <View style={[difficulty === 'MEDIUM' ? styles.medDiff
            : difficulty === 'HARD' ? styles.hardDiff
            : '',
            styles.gridBoard]}
        >
            {gridSquares}
        </View>
    );
};

const styles = StyleSheet.create({
    gridBoard: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 242,
        height: 434,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(32, 0, 64)',
        borderRadius: 7,
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

export default GridBoard;