/* This is a demo of increasing and decreasing intager i use useState hook bc in react does not rerender a component when variable changes
*  its increments a number but there is no display bc of rerender thing
*
*
*/


import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [newCount, setnewCount] = useState(0)
    const { countainer, txt, btn, text } = styles

    useEffect(() => {
        console.log('value is' + count)
        return () =>{
            console.log('useeffect cleanup')
        }
    }, [count]) //sadece count değeri için çıktı verir

    return (
        <View style={countainer}>
            <Text style={txt} >{count}</Text>
            <Text style={txt} >{newCount}</Text>
            <Pressable style={btn} onPress={() => setCount(count + 1)}>
                <Text style={text}>Up</Text>
            </Pressable>
            <Pressable style={btn} onPress={() => setCount(count - 1)}>
                <Text style={text}>Down</Text>
            </Pressable>
            <Pressable style={btn} onPress={() => setnewCount(newCount + 1)}>
                <Text style={text}>Up</Text>
            </Pressable>
            <Pressable style={btn} onPress={() => setnewCount(newCount - 1)}>
                <Text style={text}>Down</Text>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan'
    },
    txt: {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 100
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
})

export default Counter