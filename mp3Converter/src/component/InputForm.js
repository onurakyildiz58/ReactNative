import { useState } from "react";
import Input from "./Input"
import Button from "./Button"
import *  as OpenAnything from 'react-native-openanything'
import { View } from "react-native";

function InputForm() {
    const [link, setLink] = useState('');
    const [mp3, setMp3] = useState('');

    function getLink(enteredLink) {
        setLink(enteredLink);
    }

    function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }

    async function Download() {
        const ytId = youtube_parser(link);

        const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${ytId}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '*****',
                'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const mp3Link = result.link;
            setMp3(mp3Link);
            console.log(mp3);
            OpenAnything.Web(mp3);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Input func={getLink} value={link} />
            <Button func={Download} />
        </View>
    )
}


export default InputForm
