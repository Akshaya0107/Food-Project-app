import { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { CartContext } from "../context/CartContext";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../services/firebaseConfig";

const db = getFirestore(app);

export default function CartScreen() {
  const { cart, removeFromCart, getTotal, clearCart } = useContext(CartContext);

  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Cart is empty ❌");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
  items: cart || [],
  total: getTotal(),
  createdAt: new Date()
});

      alert("Order Placed 🎉");
      clearCart(); // empty cart
    } catch (error) {
      alert("Error placing order");
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>🛒 Your Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{item.name} - ₹{item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />

      <Text style={{ marginTop: 20, fontSize: 18 }}>
        Total: ₹{getTotal()}
      </Text>

      <Button title="Place Order" onPress={placeOrder} />
    </View>
  );
}