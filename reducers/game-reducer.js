import {
    MOVE_RIGHT,
    MOVE_LEFT,
    MOVE_DOWN,
    ROTATE,
    PAUSE,
    RESUME,
    RESTART,
    GAME_OVER,
    SHOW_MODAL,
    SET_DIFFICULTY
} from '../actions';
import {
    defaultState,
    nextRotation,
    canMoveTo,
    addBlockToGrid,
    checkRows,
    randomShape
} from '../utils';

const gameReducer = (state = defaultState(), action) => {
    const { shape, grid, x, y, rotation, nextShape, score, isRunning, showPauseScreen, difficulty, speed } = state;
    let diff = 'EASY';

    switch(action.type) {
        case ROTATE:
            const newRotation = nextRotation(shape, rotation);
            if (canMoveTo(shape, grid, x, y, newRotation)) {
                return { ...state, rotation: newRotation };
            }
            return state;
        case MOVE_RIGHT:
            if (canMoveTo(shape, grid, x + 1, y, rotation)) {
                return { ...state, x: x + 1 };
            }
            return state;
        case MOVE_LEFT:
            // subtract 1 from the x and check if this new position is possible by calling `canMoveTo()
            if (canMoveTo(shape, grid, x - 1, y, rotation)) {
                return { ...state, x: x - 1 };
            }
            return state;
        case MOVE_DOWN:
            // Get the next potential Y position
            const maybeY = y + 1;

            // Check if the current block can move here
            if (canMoveTo(shape, grid, x, maybeY, rotation)) {
                // If so move down don't place the block
                return { ...state, y: maybeY };
            }

            // If not place the block
            // (this returns an object with a grid and gameover bool)
            const obj = addBlockToGrid(shape, grid, x, y, rotation);
            const newGrid = obj.grid;
            const gameOver = obj.gameOver;

            if (gameOver) {
                // Game Over
                const newState = { ...state };
                newState.shape = 0;
                newState.grid = newGrid;
                return { ...state, gameOver: true };
            }

            // reset somethings to start a new shape/block
            const newState = defaultState();
            newState.grid = newGrid;
            newState.shape = nextShape;
            newState.score = score;
            newState.isRunning = isRunning;

            // TODO: Check and Set level
            // Score increases decrease interval
            newState.score = score + checkRows(newGrid);

            return newState;
        case RESUME:
            return {
                ...state,
                isRunning: true
            };
        case PAUSE:
            return {
                ...state,
                isRunning: false
            };
        case GAME_OVER:
            return state;
        case RESTART:
            const restartState = defaultState();
            let spd = 1000;
            if (difficulty === 'EASY') {
                spd = 1000;
            } else if (difficulty === 'MEDIUM') {
                spd = 800;
            } else if (difficulty === 'HARD') {
                spd = 600;
            }
            restartState.speed = spd;
            restartState.difficulty = difficulty;
            return restartState;
            // return defaultState();
        case SHOW_MODAL:
            return {
                ...state,
                showPauseScreen: !showPauseScreen
            };
        case SET_DIFFICULTY:
            if (difficulty === 'EASY') {
                diff = 'MEDIUM';
            } else if (difficulty === 'MEDIUM') {
                diff = 'HARD';
            } else if (difficulty === 'HARD') {
                diff = 'EASY';
            }
            return {
                ...state,
                difficulty: diff
            };
        default:
            return state;
    }
};

export default gameReducer;