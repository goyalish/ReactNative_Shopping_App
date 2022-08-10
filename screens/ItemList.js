import { useEffect, useState } from 'react';
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, NativeModules } from 'react-native';
export default function ItemList() {

    var [getCartItems, setCartItems] = useState([]);
    var [getList, setList] = useState([]);
    var [getCartCount, setCartCount] = useState(0)
    const navigation = useNavigation();
    var items = {
        "data": [
            {
                "itemId": 1,
                "name": "item 1",
                "price": 20,
                "description": "some text description",
                "manufacturer": "Apple",
                "Image": "https://cdn.britannica.com/29/186029-050-DB36AE92/Variety-potatoes.jpg?w=690&h=388&c=crop",
                "quantity": 1
            },
            {
                "itemId": 2,
                "name": "item 2",
                "price": 50,
                "description": "some text description",
                "manufacturer": "Apple",
                "Image": "https://cdn.britannica.com/32/82532-050-10271206/peas.jpg?w=690&h=388&c=crop",
                "quantity": 1
            },
            {
                "itemId": 3,
                "name": "item 3",
                "price": 30,
                "description": "some text description",
                "manufacturer": "Samsung",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/48/12548-004-68A15563/Cucumber.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 4,
                "name": "item 4",
                "price": 10,
                "description": "some text description",
                "manufacturer": "Google",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/62/118162-050-56CC9480/cultivar-Thai-chili-peppers-fruits.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 5,
                "name": "item 5",
                "price": 10.2,
                "description": "some text description",
                "manufacturer": "Instagram",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/18/174518-050-AF7D36EC/sampling-diversity-pepper-genus-farmers-market.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 6,
                "name": "item 6",
                "price": 30.2,
                "description": "some text description",
                "manufacturer": "Netflix",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/88/218888-050-646B14A5/fruit-chayote-plant-Sechium-edule.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 7,
                "name": "item 7",
                "price": 20,
                "description": "some text description",
                "manufacturer": "Apple",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/29/186029-050-DB36AE92/Variety-potatoes.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 8,
                "name": "item 8",
                "price": 50,
                "description": "some text description",
                "manufacturer": "Apple",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/32/82532-050-10271206/peas.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 9,
                "name": "item 9",
                "price": 30,
                "description": "some text description",
                "manufacturer": "Samsung",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/48/12548-004-68A15563/Cucumber.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 10,
                "name": "item 10",
                "price": 10,
                "description": "some text description",
                "manufacturer": "Google",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/62/118162-050-56CC9480/cultivar-Thai-chili-peppers-fruits.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 11,
                "name": "item 11",
                "price": 10.2,
                "description": "some text description",
                "manufacturer": "Instagram",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/18/174518-050-AF7D36EC/sampling-diversity-pepper-genus-farmers-market.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 12,
                "name": "item 12",
                "price": 30.2,
                "description": "some text description",
                "manufacturer": "Netflix",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/88/218888-050-646B14A5/fruit-chayote-plant-Sechium-edule.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 13,
                "name": "item 13",
                "price": 20,
                "description": "some text description",
                "manufacturer": "Apple",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/29/186029-050-DB36AE92/Variety-potatoes.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 14,
                "name": "item 14",
                "price": 50,
                "description": "some text description",
                "manufacturer": "Apple",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/32/82532-050-10271206/peas.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 15,
                "name": "item 15",
                "price": 30,
                "description": "some text description",
                "manufacturer": "Samsung",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/48/12548-004-68A15563/Cucumber.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 16,
                "name": "item 16",
                "price": 10,
                "description": "some text description",
                "manufacturer": "Google",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/62/118162-050-56CC9480/cultivar-Thai-chili-peppers-fruits.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 17,
                "name": "item 17",
                "price": 10.2,
                "description": "some text description",
                "manufacturer": "Instagram",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/18/174518-050-AF7D36EC/sampling-diversity-pepper-genus-farmers-market.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 18,
                "name": "item 18",
                "price": 30.2,
                "description": "some text description",
                "manufacturer": "Netflix",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/88/218888-050-646B14A5/fruit-chayote-plant-Sechium-edule.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 19,
                "name": "item 19",
                "price": 10.2,
                "description": "some text description",
                "manufacturer": "Instagram",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/18/174518-050-AF7D36EC/sampling-diversity-pepper-genus-farmers-market.jpg?w=690&h=388&c=crop"
            },
            {
                "itemId": 20,
                "name": "item 20",
                "price": 30.2,
                "description": "some text description",
                "manufacturer": "Netflix",
                "quantity": 1,
                "Image": "https://cdn.britannica.com/88/218888-050-646B14A5/fruit-chayote-plant-Sechium-edule.jpg?w=690&h=388&c=crop"
            }
        ]
    };

    useEffect(() => {
        fetchResult()
    }, []);

    const addItem = (item) => {
        let isItemExist = false
        setCartCount(getCartCount + 1)
        getCartItems.forEach((prevItem) => {
            if (prevItem.itemId == item.itemId) {
                prevItem.quantity += 1;
                isItemExist = true
            }
        })
        if (!isItemExist) {
            setCartItems((prev) => [
                ...prev,
                item
            ])
        }
    }

    const purchaseCallback = () => {
        setCartItems([])
        setCartCount(0)
    }

    const goToCart = () => {
        navigation.navigate('CartList', { items: getCartItems, purchaseCallback: purchaseCallback });
    }

    const fetchResult = () => {
        var newData = items.data.slice(getList.length, (getList.length + 10))
        console.log("newData length: " + newData.length);
        setList((prev) => [
            ...prev,
            ...newData
        ])
    };

    const goToDetails = (item) => {
        navigation.navigate('ItemDetails', { item: item });
    }

    const _renderItem = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => goToDetails(item)}>
                <View style={styles.mainStyle}>
                    <View>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}> {item.description}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Price: {item.price}</Text>
                        <TouchableOpacity onPress={() => addItem(item)}>
                            <Text style={[styles.text, { color: 'red' }]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.formWrapper}>
            <Button onClick={goToCart} title="View Cart" />
            <Text style={styles.text}>Cart Items: {getCartCount}</Text>
            <FlatList
                data={getList}
                onEndReached={fetchResult}
                onEndReachedThreshold={0.7}
                renderItem={_renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    formWrapper: {
        flex: 1,
        display: "flex",
        padding: 30,
        backgroundColor: '#f4f4f4',
        flexDirection: "column",
    },
    btn: {
        backgroundColor: "grey",
        justifyContent: 'center',
        width: '80%',
        alignItems: 'center',
        height: 40,
        borderRadius: 5,
        marginVertical: 8
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    label: {
        marginVertical: 10,
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    mainStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'grey',
        padding: 10,
        marginVertical: 10
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
});