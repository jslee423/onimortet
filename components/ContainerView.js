import { StyleSheet, View } from "react-native";

const ContainerView = (props) => {
    console.log(props.color);
    return (
        <View style={
                props.color ? [{ backgroundColor: props.color }, styles.container] 
                    : [styles.container, styles.containerColor]
            }
        >
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerColor: {
        backgroundColor: '#3c096c'
    }
});

export default ContainerView;