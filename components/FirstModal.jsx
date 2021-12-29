import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Picker } from './Picker/Picker'
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
                <Picker {...{values: firstCount, defaultValue: 0}}/>
            <Text style={styles.separetedSymbol}>:</Text>
            <Picker {...{values: secondCount, defaultValue: 0}}/>
        </View>
        
        <View style={styles.line} />
        <Text>{`${hours} : ${minutes}`}</Text>  
    </View>
    )
}