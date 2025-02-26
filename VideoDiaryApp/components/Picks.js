import React from 'react'
import { View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons';
function Picks({ data, thumb }) {
    return (
        <>
            {thumb && <Icons name={'chevron-back'} size={15} color={'black'} />}
            {data.map(({ id, height }) => (
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
            {thumb && <Icons name={'chevron-forward'} size={15} color={'black'} />}
        </>
    )
}

export default Picks;
