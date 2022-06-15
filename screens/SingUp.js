import { TouchableOpacity, Text } from "react-native"

const SignUp = () => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Login')
            }}>
            <Text> Login</Text>
        </TouchableOpacity>
    )
}

export default SignUp