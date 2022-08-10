import { View, FlatList, TouchableOpacity, StyleSheet, Text, Alert, ScrollView } from "react-native";
import Button from "../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

export default function CartList() {
    const route = useRoute();
    const naviagtion = useNavigation()
    const [getItems, setItems] = useState([]);
    const [getFinalAmount, setFinalAmount] = useState(0)
    const [getDeductedAmount, setDeductedAmount] = useState(0)

    const setDisc = (finalTotal) => {
        if (finalTotal >= 80 && finalTotal < 100) {
            setDeductedAmount(finalTotal * 0.15)
        } else if (finalTotal >= 100) {
            setDeductedAmount(finalTotal * 0.2)
        } else {
            setDeductedAmount(0)
        }
    }

    useEffect(() => {
        setItems(route.params.items)
        console.log(route.params.items.length);
        let finalTotal = 0
        route.params.items.forEach((i) => {
            finalTotal += i.price * i.quantity
        })
        setFinalAmount(Math.round(finalTotal))
        setDisc(Math.round(finalTotal))
    }, []);



    const onPurchase = () => {
        Alert.alert(
            "",
            "Successfully purchased item for " + (getFinalAmount - getDeductedAmount),
            [
                {
                    text: "Ok",
                    onPress: () => {
                        route.params.purchaseCallback()
                        naviagtion.goBack()
                    },
                    style: "ok",
                },
            ]);
        // alert("Successfully purchased item for " + (getFinalAmount - getDeductedAmount))
    }

    const addItem = (item) => {
        getItems.forEach((i) => {
            if (i.itemId == item.itemId) {
                i.quantity++;
            }
        })
        setItems((prev) => [
            ...prev
        ])
        let updatedAmount = getFinalAmount + (item.price)
        setFinalAmount(Math.round(updatedAmount))
        setDisc(Math.round(updatedAmount))
    }

    const removeItem = (item) => {
        let resIndex = 0
        getItems.forEach((i, index) => {
            if (i.itemId == item.itemId) {
                resIndex = index;
                i.quantity--;
            }
        })
        if (getItems[resIndex].quantity == 0) {
            getItems.splice(resIndex, 1)
        }
        setItems((prev) => [
            ...prev
        ])
        let updatedAmount = getFinalAmount - (item.price)
        setFinalAmount(Math.round(updatedAmount))
        setDisc(Math.round(updatedAmount))
    }

    const _renderItem = ({ item }) => {

        return (
            <View style={styles.mainStyle}>
                <Text style={styles.text}>{item.name} * {item.quantity} = {item.price * item.quantity}</Text>
                <TouchableOpacity onPress={() => removeItem(item)}>
                    <Text style={[styles.button]}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addItem(item)}>
                    <Text style={[styles.button]}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ margin: 10 }}>
                <Button onClick={onPurchase} title="Purchase" />
                <FlatList nestedScrollEnabled
                    data={getItems}
                    renderItem={_renderItem}
                />

                <View style={styles.bottomView}>

                    <View style={styles.discountBox}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Discount</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>80 or more: 15%</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>100 or more: 20%</Text>
                    </View>
                    <View style={{ marginEnd: 48, marginTop: 10 }}>
                        <Text style={[{ marginBottom: 10 }, styles.text]}>Final Total: {getFinalAmount}</Text>
                        <Text style={[styles.text]}>Deducted: {getDeductedAmount}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bottomView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
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
        justifyContent: 'space-evenly',
        borderWidth: 2,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
    },
    button: {
        height: 30,
        borderRadius: 25,
        color: "#FFFFFF",
        backgroundColor: "#0B3270",
        textAlign: "center",
        fontSize: 20,
        width: 30
    },
    discountBox: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 12,
        width: '40%',
    }
});