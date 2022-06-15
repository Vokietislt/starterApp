import { useContext, useState } from "react"
import { TouchableOpacity, Text, View, TextInput } from "react-native"
import { TaskContext } from "../AppStates"
import { Styles } from "../css/mainCss"
const LogIn = ({ navigation }) => {
    const { user, setUser } = useContext(TaskContext)
    const [name, setName] = useState('')
    const [psw, setPsw] = useState('')
    const updateUser = () => {
        setUser({
            name: name,
            password: psw
        })
    }
    return (
        <View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}>
                    <Text> Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput
                    style={styles.TextInput}
                    value={name}
                    onChange={(e) => { setName(e.currentTarget.value); }}
                />
                <TextInput
                    style={styles.TextInput}
                    value={psw}
                    onChange={(e) => { setPsw(e.currentTarget.value) }}
                />
                <TouchableOpacity
                    onPress={() => {
                        updateUser()
                    }}
                >
                    <Text>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default LogIn

