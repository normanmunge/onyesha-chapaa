import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';


interface iconProps {
    icon: any;
    size?: number;
    color?: string;
    onPressHandler?: (params: any) => any;
}
const IconButton: React.FC<iconProps> = ({icon, size, color, onPressHandler}) => {
    const {buttonContainer, tapped} = styles;

    return <Pressable onPress={onPressHandler} style={({pressed}) => pressed && tapped}>
        <View style={buttonContainer}>
            <Ionicons name={icon} color={color} size={size}/>
        </View>
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    tapped: {
        opacity: 0.75
    }
})