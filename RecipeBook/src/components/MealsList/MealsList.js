import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem'

function MealsList(props) {
    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
        };
        return (
            <MealItem {...mealItemProps} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default MealsList