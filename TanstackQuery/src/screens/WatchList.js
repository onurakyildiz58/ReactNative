import React from 'react';
import { Text, View } from 'react-native';
import { s } from 'react-native-wind';

import CustomHeader from '../components/CustomHeader';

function WatchList() {
    return (
        <View style={s`flex-1`}>
            <CustomHeader title={'İzleme Listem'} />
            <View style={s`flex-1 items-center`}>
                <Text style={s`text-lg font-bold`}>Listemss</Text>
            </View>
        </View>
    );
}

export default WatchList;
