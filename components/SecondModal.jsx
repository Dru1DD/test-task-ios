import React, {  useState } from 'react'
import { View, Text } from 'react-native'
import { Picker } from './Picker/Picker'
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
            <Picker {...{values, defaultValue}}/>
            <View style={styles.line} />
            <Text>{tempValue}</Text>               
        </View>
    )
}