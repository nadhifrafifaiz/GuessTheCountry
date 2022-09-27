import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


const IntroScreen = () => {
    // score = the variable, setScore = how we change variable, useState(0) = the initial value
    const [score, setScore] = useState(100)
    const [title, setTitle] = useState('game is on')



    const increaseNumber = () => {
        setScore(score + 10)
        alert('congrats ')
    }

    const decreaseNumber = () => {
        setScore(score - 10)
        alert('boo hoo')
    }

    // When the screen first load up
    useEffect(() => {
        setScore(0)
        alert('Welcome to the app')
    }, [])


    useEffect(() => {
        if(score>=50){
            setTitle("YOU  WIN")
        }
    }, [score])





    return (
        <View style={{
            flex: 1, justifyContent: "center", alignItems: "center", flexDirection: 'column'
        }}>
            <Text style={{ fontSize: 20 }}> {title} </Text>
            <Text style={{ fontSize: 20 }}> Score </Text>
            <Text style={{ fontSize: 20 }}> {score} </Text>


            <TouchableOpacity onPress={() => increaseNumber()}>
                <Text style={{ fontSize: 30 }}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => decreaseNumber()}>
                <Text style={{ fontSize: 30 }}>-</Text>
            </TouchableOpacity>

        </View>
    )
}

export default IntroScreen


