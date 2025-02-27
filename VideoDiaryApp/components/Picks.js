import React from 'react';
import { View } from 'react-native';

function Picks({ data, scaleFactor = 100 }) {
    const scaledData = data.filter((_, index) => index % scaleFactor === 0);

    return (
        <>
            {scaledData.map(({ id, height }) => (
                <View
                    key={id.toString()}
                    style={{
                        height,
                        width: 3,
                        backgroundColor: 'gray',
                        marginRight: 3,
                        marginLeft: id === 0 ? 3 : 0,
                        borderRadius: 5,
                    }}
                />
            ))}
        </>
    );
}

export default Picks;
