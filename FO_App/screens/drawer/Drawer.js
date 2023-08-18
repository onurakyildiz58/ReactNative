import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import PsaSoba from '../../screens/PsaSoba';
import Eta from '../../screens/Eta';
import Crq from '../../screens/Crq';
import I_pus_parca from '../../screens/I_pus_parca';
import Eskalasyon from '../../screens/Eskalasyon';
import Rework from '../../screens/Rework';
import Paketleme from '../../screens/Paketleme';
import Soba_sc_cpa_onay from '../../screens/Soba_sc_cpa_onay';


const drawer = createDrawerNavigator();

const Drawer = () => {
    return (
        <NavigationContainer >
            <drawer.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#DEE2E6'
                    },
                    headerTitleStyle: {
                        fontWeight: '700',
                        fontSize: 30,
                        color: '#343A40'
                    },
                    drawerStyle:{
                        backgroundColor: '#DEE2E6'
                    }
                }} >
                <drawer.Screen name="PSA & SOBA" component={PsaSoba}/>
                <drawer.Screen name="ETA" component={Eta} />
                <drawer.Screen name="CRQ" component={Crq} />
                <drawer.Screen name="I-PUS Parça" component={I_pus_parca} />
                <drawer.Screen name="Eskalasyon" component={Eskalasyon} />
                <drawer.Screen name="Rework" component={Rework} />
                <drawer.Screen name="Paketleme" component={Paketleme} />
                <drawer.Screen name="SOBA/SC - CPA Onay" component={Soba_sc_cpa_onay} />
            </drawer.Navigator>
        </NavigationContainer>
    )
}

export default Drawer