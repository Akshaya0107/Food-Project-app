import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from "react-native";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../services/firebaseConfig";

const db = getFirestore(app);

export default function OrderHistoryScreen() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOrders(data);
    } catch (error) {
      console.log("Error fetching orders:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>🧾 Order</Text>

      {Array.isArray(item.items) &&
  item.items.map((food, index) => (
    <Text key={index}>
      • {food.name} - ₹{food.price}
    </Text>
  ))
}

      <Text style={styles.total}>Total: ₹{item.total}</Text>

      <Text style={styles.date}>
        {item.createdAt?.toDate().toLocaleString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📦 Order History</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff"
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5
  },
  total: {
    marginTop: 5,
    fontWeight: "bold"
  },
  date: {
    marginTop: 5,
    fontSize: 12,
    color: "gray"
  }
});