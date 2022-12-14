import { StyleSheet, View } from "react-native";

// Represents a grid square with a color
const GridSquare = (props) => {
    const color = `${props.color}`;
    const nextBlock = `${props.nextBlock}`
    return (
        <View style={
            [
                styles.gridSquare,
                styles[color === '0' ? 'color0'
                    : color === '1' ? 'color1'
                    : color === '2' ? 'color2'
                    : color === '3' ? 'color3'
                    : color === '4' ? 'color4'
                    : color === '5' ? 'color5'
                    : color === '6' ? 'color6'
                    : color === '7' ? 'color7'
                    : ''],
                props.nextBlock ? { width: 18, height: 18, borderRadius: 5 } : ''
            ]
        }>
            {color != '0' &&
                <View style={[
                    styles.sparkle,
                    props.nextBlock ? {
                        width: 3,
                        height: 3,
                        right: 2,
                        top: 2,
                        borderRadius: 5, } : ''
                ]}></View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    gridSquare: {
        borderStyle: 'solid',
        width: 22,
        height: 22,
        borderColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: 7,
        margin: 1
    },
    color0: {
        backgroundColor: 'rgb(32, 0, 64)'
    },
    // I
    color1: {
        backgroundColor: '#ff6600'
    },
    // T
    color2: {
        backgroundColor: '#eec900'
    },
    // L
    color3: {
        backgroundColor: '#0000ff'
    },
    // J
    color4: {
        backgroundColor: '#cc00ff'
    },
    // Z
    color5: {
        backgroundColor: '#50C878'
    },
    // S
    color6: {
        backgroundColor: '#66ccff'
    },
    // []
    color7: {
        backgroundColor: '#ff0000'
    },
    sparkle: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: 5,
        height: 5,
        right: 2,
        top: 2,
        borderRadius: 5,
        // opacity: 0.5
    }
});

export default GridSquare;