import React, { useState } from 'react'
import { StyleSheet, View, Button, Image, Text } from 'react-native'

import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import { GlobalStyles } from '../../GlobalStyle/style';
import OutlinedBtn from '../UI/OutlinesBtn';



function ImagePicker() {
    const [pickedUri, setPickedUri] = useState('');
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }
        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficiant Permission', 'You need to grant camera permission');
            return false;
        }
        return true;
    }

    async function takePic() {
        const isAllowed = await verifyPermissions();
        if (!isAllowed) {
            return;
        }
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.6,
        });
        setPickedUri(image.assets[0].uri);
    }

    let imagePreview = <Text style={{color: GlobalStyles.colours.teal900}}>No image taken yet.</Text>

    if (pickedUri) {
        imagePreview = <Image source={{ uri: pickedUri }} style={styles.image} />
    }

    return (
        <View>
            <View style={styles.imageContainer}>{imagePreview}</View>
            <OutlinedBtn func={takePic} title={'Take a Picture'} name={'camera'} size={30} color={GlobalStyles.colours.teal900} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 200,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: GlobalStyles.colours.teal900,
        backgroundColor: GlobalStyles.colours.teal100
    },
    image: {
        height: '100%',
        width: '100%',
    }
})

export default ImagePicker