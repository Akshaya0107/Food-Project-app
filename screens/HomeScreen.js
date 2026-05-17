import { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet
} from "react-native";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../services/firebaseConfig";
import { CartContext } from "../context/CartContext";

const db = getFirestore(app);

export default function HomeScreen({ navigation }) {
  const [foods, setFoods] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "foods"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFoods(data);
    } catch (error) {
      console.log("Error fetching foods:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>

      <Button
        title="Add to Cart"
        onPress={() => {
          addToCart(item);
          alert("Added to cart 🛒");
        }}
      />
      <Button
       title="View Orders 📦"
       onPress={() => navigation.navigate("Orders")}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Button */}
      <Button title="Go to Cart 🛒" onPress={() => navigation.navigate("Cart")} />

      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#f9f9f9"
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5
  },
  price: {
    fontSize: 16,
    marginBottom: 5
  }
});