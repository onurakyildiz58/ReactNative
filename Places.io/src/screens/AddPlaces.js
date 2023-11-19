import { View } from 'react-native'
import PlaceForm from '../components/Places/PlaceForm'
import { GlobalStyles } from '../GlobalStyle/style'

function AddPlaces() {
    return (
        <View style={{ backgroundColor: GlobalStyles.colours.green100, flex: 1 }}>
            <PlaceForm />
        </View>
    )
}


export default AddPlaces