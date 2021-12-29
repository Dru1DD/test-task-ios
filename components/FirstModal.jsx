import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { mainPage as styles } from '../styles/mainPage'

export const FirstModel = () => {
    const [ hours, setHours ] = useState()
    const [ minutes, setMinutes ] = useState()
    const [ firstCount, setFirstCount ] = useState(() => {
        let arr = []
        for( let i = 0; i < 10; i++ ) {
            arr.push(`0${i}`)
        }
        for( let i = 10;  i < 24; i++ ) {
            arr.push(`${i}`)
        }

        return arr
    })
    const [ secondCount, setSecondCount ] = useState>(() => {
        let arr = []
        for( let i = 0; i < 10; i++ ) {
            arr.push(`0${i}`)
        }
        for( let i = 10; i < 60; i++ ) {
            arr.push(`${i}`)
        }
        return arr
    })
    return (
        <View style={styles.modalContainer}>
        <View style={styles.modelTime}>
            <Picker selectedValue={hours} onValueChange={(itemValue) => setHours(itemValue)}>
                {firstCount.map((item, idx) => {
                    return (
                        <Picker.Item label={item} value={item} key={idx} />
                    )
                })}
            </Picker>
            <Text style={styles.separetedSymbol}>:</Text>
            <Picker selectedValue={minutes} onValueChange={(itemValue) => setMinutes(itemValue)}>
                {secondCount.map((item, idx) => {
                    return (
                        <Picker.Item label={item} value={item} key={idx} />
                    )
                })}
            </Picker>
        </View>
        
        <View style={styles.line} />
        <Text>{`${hours} : ${minutes}`}</Text>  
    </View>
    )
}