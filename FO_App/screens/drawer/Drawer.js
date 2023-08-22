import React from 'react'
import { Text, StyleSheet } from 'react-native'
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
                    drawerStyle: {
                        backgroundColor: '#DEE2E6'
                    },
                    drawerActiveTintColor: '#092E6E'
                }} >
                <drawer.Screen
                    name="PSA & SOBA"
                    component={PsaSoba}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >8</Text>
                        ) 
                    }} />
                <drawer.Screen
                    name="ETA"
                    component={Eta} 
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >10</Text>
                        ) 
                    }}/>
                <drawer.Screen
                    name="CRQ"
                    component={Crq} 
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >0</Text>
                        ) 
                    }}/>
                <drawer.Screen
                    name="I-PUS Parça"
                    component={I_pus_parca}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >1</Text>
                        ) 
                    }} />
                <drawer.Screen
                    name="Eskalasyon"
                    component={Eskalasyon}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >8</Text>
                        ) 
                    }} />
                <drawer.Screen
                    name="Rework"
                    component={Rework}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >4</Text>
                        ) 
                    }} />
                <drawer.Screen
                    name="Paketleme"
                    component={Paketleme} 
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >5</Text>
                        ) 
                    }}/>
                <drawer.Screen
                    name="SOBA/SC - CPA Onay"
                    component={Soba_sc_cpa_onay} 
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >16</Text>
                        ) 
                    }}/>
            </drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: 'red',
        borderRadius: 2,
        width: 30,
        textAlign: 'center',
        color: '#DEE2E6'
    }
})

export default Drawer