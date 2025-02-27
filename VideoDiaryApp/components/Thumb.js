import React from "react";
import { View, StyleSheet } from "react-native";
import Icons from 'react-native-vector-icons/Ionicons';

const Thumb = ({ side }) => {
    const borderRadius =
        side === 'left'
            ? { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }
            : { borderTopRightRadius: 8, borderBottomRightRadius: 8 };

    return (
        <View
            style={{...styles.iconCover, ...borderRadius }}>
            <Icons name={'ellipsis-vertical'} size={20} color={'black'} />
        </View>
    );
};

const styles = StyleSheet.create({
    iconCover: {
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        height: '100%',
        justifyContent: 'center',
    },
});

export default Thumb;
