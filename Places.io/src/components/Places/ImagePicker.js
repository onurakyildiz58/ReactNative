import React, { useState } from 'react'
import { StyleSheet, View, Button, Image, Text } from 'react-native'

import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import { GlobalStyles } from '../../GlobalStyle/style';

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

    let imagePreview = <Text>No image taken yet.</Text>

    if (pickedUri) {
        imagePreview = <Image source={{ uri: pickedUri }} style={styles.image} />
    }

    return (
        <View>
            <View style={styles.imageContainer}>{imagePreview}</View>
            <Button title='take image' onPress={takePic} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: GlobalStyles.colours.amber900,
        backgroundColor: GlobalStyles.colours.green200
    },
    image: {
        height: '100%',
        width: '100%',
    }
})

export default ImagePicker