import { View } from 'react-native'
import PlaceForm from '../components/Places/PlaceForm'
import { GlobalStyles } from '../GlobalStyle/style'

function AddPlaces({ navigation }) {
    function createPlaceHandler(place) {
        navigation.navigate('ShowPlaces', {place: place});
    }
    return (
        <View style={{ backgroundColor: GlobalStyles.colours.green100, flex: 1 }}>
            <PlaceForm onCreatePlace={createPlaceHandler} />
        </View>
    )
}


export default AddPlaces