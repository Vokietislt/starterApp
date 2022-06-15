import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../css/mainCss"


const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => { navigation.navigate('Count') }}>
                <Text style={styles.btnText}>Count</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home