import { useState } from "react"
import { StyleSheet, Text, View, Image, Button, TextInput, Switch } from 'react-native';


const Count = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('Tekstas')
    const [switcher, setSwitcher] = useState(true)
    const countUp = () => { setCount(count + 1) }
    const countDown = () => { setCount(count - 1) }
    const powerUp = () => { setCount(count * count) }
    return (
        <View style={styles.container}>
            <Text>{count}</Text>
            <Button title="count up" onPress={countUp} />
            <Button title="count Down" onPress={countDown} />
            <Button title="power Up" onPress={powerUp} />
            <Button title="Reset" onPress={() => { setCount(0) }} />
            <TextInput value={text} onChange={(event) => { setText(event.currentTarget.value); }} />
            <Switch value={switcher} onChange={() => { setSwitcher(!switcher) }} />
            <Tekstas tekstas={'dar teksto'} />
            <Image
                style={styles.img}
                source={"https://cdn.vox-cdn.com/thumbor/SiIyeqmKIJGcOJccz94pHgwmgvQ=/0x0:1400x1400/1200x800/filters:focal(588x588:812x812):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68837730/poptart1redrainbowfix_1.0.gif"} />
        </View>
    )
}
export default Count

const Tekstas = (props) => {
    return (
        <View>
            <Text>{props.tekstas} Teksatas</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});