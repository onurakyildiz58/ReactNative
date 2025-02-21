import { TouchableOpacity, Text } from "react-native";
import { s } from 'react-native-wind';

function Btn({ children, onPress }) {
    return (
        <TouchableOpacity
            style={s`mx-4 p-4 bg-emerald-400 border border-emerald-800 rounded-lg`}
            onPress={onPress}
        >
            <Text style={s`text-center text-gray-900 text-xl font-bold`}>{children}</Text>
        </TouchableOpacity>
    );
}

export default Btn;