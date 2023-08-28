import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import PsaSoba from '../PsaSoba';
import Eta from '../Eta';
import Crq from '../Crq';
import I_pus_parca from '../I_pus_parca';
import Ipos from '../Ipos';
import Ipus from '../Ipus';
import Eskalasyon from '..//Eskalasyon';
import DummyParça from '../DummyParca.js';
import Rework from '../Rework';
import Paketleme from '../Paketleme';
import Soba_sc_cpa_onay from '../Soba_sc_cpa_onay';
import Edt from '../Edt';
import Pdcf from '../Pdcf';
import Verimlilik from '../Verimlilik';
import OdemeEmri from '../OdemeEmri';

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
                            <Text style={styles.icon} >1</Text>
                        )
                    }} />
                <drawer.Screen
                    name="ETA"
                    component={Eta}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >9</Text>
                        )
                    }} />
                    <drawer.Screen
                    name="Crq"
                    component={Crq}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >2</Text>
                        )
                    }} />
                    <drawer.Screen
                    name="I-Pus Parca"
                    component={I_pus_parca}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >3</Text>
                        )
                    }} />
                <drawer.Screen
                    name="I-POS"
                    component={Ipos}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >7</Text>
                        )
                    }} />
                <drawer.Screen
                    name="I-PUS"
                    component={Ipus}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >7</Text>
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
                    name="Dummy Parça"
                    component={DummyParça}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >7</Text>
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
                    }} />
                <drawer.Screen
                    name="SOBA/SC - CPA Onay"
                    component={Soba_sc_cpa_onay}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >16</Text>
                        )
                    }} />
                <drawer.Screen
                    name="ED&T"
                    component={Edt}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >3</Text>
                        )
                    }} />
                <drawer.Screen
                    name="PDCF"
                    component={Pdcf}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >1</Text>
                        )
                    }} />
                <drawer.Screen
                    name="Verimlilik Paket İndirimi"
                    component={Verimlilik}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >1</Text>
                        )
                    }} />
                <drawer.Screen
                    name="Ödeme Emri"
                    component={OdemeEmri}
                    options={{
                        drawerIcon: () => (
                            <Text style={styles.icon} >1</Text>
                        )
                    }} />
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