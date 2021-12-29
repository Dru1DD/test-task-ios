import React, {  useState } from 'react'
import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker''
import { mainPage as styles } from '../styles/mainPage'

export const SecondModel = () => {
    const [ tempValue, setTempValue ] = useState()
    const [ tempLabel, setTempLabel ] = useState(() => {
        let arr = []
        for(let i = -100; i <= 100; i++) {
            arr.push(`${i} °C`)
        }
        return arr
    })

    return (
        <View style={styles.modalContainer}>
            <Picker selectedValue={tempValue} onValueChange={(itemValue) => setTempValue(itemValue)}>
                {tempLabel.map((item, idx) => {
                    return (
                        <Picker.Item label={item} value={item} key={idx} />
                    )
                })}
            </Picker>
            <View style={styles.line} />
            <Text>{tempValue}</Text>               
        </View>
    )
}