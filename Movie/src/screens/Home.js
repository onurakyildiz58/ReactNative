import React from 'react';
import { Text, View } from 'react-native';
import { s } from 'react-native-wind';
import CustomIconHeader from '../components/ui/CustomIconHeader';

function Home() {
    return (
        <View style={s`flex-1`}>
            <CustomIconHeader title={'Ana Sayfa'} name={'search'} size={35} func={() => console.log('arama')}/>
                <View style={s`flex-1 items-center`}>
                    <Text style={s`text-lg font-bold`}>Filmleeeer</Text>
                </View>
        </View>
    );
}

export default Home;
