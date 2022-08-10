import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemList from "./screens/ItemList";
import ItemDetails from "./screens/ItemDetails";
import CartList from "./screens/CartList";

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="ItemList" component={ItemList} />
        <stack.Screen name="ItemDetails" component={ItemDetails} options={{ title: 'Details' }}/>
        <stack.Screen name="CartList" component={CartList} options={{ title: 'CartList' }}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

