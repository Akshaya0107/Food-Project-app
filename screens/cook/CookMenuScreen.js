import React, {
  useState,
  useMemo,
} from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  Switch,
  Modal,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function CookMenuScreen({
  navigation,
}) {
  const [search, setSearch] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [modalVisible, setModalVisible] =
    useState(false);

  const [isEditing, setIsEditing] =
    useState(false);

  const [editingId, setEditingId] =
    useState(null);

  const [dishName, setDishName] =
    useState("");

  const [dishCategory, setDishCategory] =
    useState("");

  const [dishPrice, setDishPrice] =
    useState("");

  const [dishImage, setDishImage] =
    useState("");

  const categories = [
    "All",
    "Healthy",
    "Protein",
    "Veg",
    "Main Course",
  ];

  const [menuItems, setMenuItems] =
    useState([
      {
        id: "1",
        name: "Protein Bowl",
        category: "Healthy",
        price: 220,
        available: true,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      },

      {
        id: "2",
        name: "Chicken Grill",
        category: "Protein",
        price: 280,
        available: true,
        image:
          "https://images.unsplash.com/photo-1532550907401-a500c9a57435",
      },

      {
        id: "3",
        name: "Veg Salad",
        category: "Veg",
        price: 180,
        available: false,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      },
    ]);

  const filteredItems = useMemo(() => {
    return menuItems.filter(
      (item) => {
        const matchSearch =
          item.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchCategory =
          selectedCategory ===
          "All"
            ? true
            : item.category ===
              selectedCategory;

        return (
          matchSearch &&
          matchCategory
        );
      }
    );
  }, [
    search,
    selectedCategory,
    menuItems,
  ]);

  const toggleAvailability = (
    id
  ) => {
    const updated =
      menuItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            available:
              !item.available,
          };
        }

        return item;
      });

    setMenuItems(updated);
  };

  const deleteDish = (id) => {
    Alert.alert(
      "Delete Dish",
      "Are you sure?",
      [
        {
          text: "Cancel",
        },

        {
          text: "Delete",

          onPress: () => {
            const updated =
              menuItems.filter(
                (item) =>
                  item.id !== id
              );

            setMenuItems(updated);
          },
        },
      ]
    );
  };

  const openAddModal = () => {
    setIsEditing(false);

    setDishName("");
    setDishCategory("");
    setDishPrice("");
    setDishImage("");

    setModalVisible(true);
  };

  const editDish = (item) => {
    setIsEditing(true);

    setEditingId(item.id);

    setDishName(item.name);

    setDishCategory(
      item.category
    );

    setDishPrice(
      item.price.toString()
    );

    setDishImage(item.image);

    setModalVisible(true);
  };

  const saveDish = () => {
    if (
      !dishName ||
      !dishCategory ||
      !dishPrice
    ) {
      Alert.alert(
        "Error",
        "Fill all fields"
      );

      return;
    }

    if (isEditing) {
      const updated =
        menuItems.map((item) => {
          if (
            item.id === editingId
          ) {
            return {
              ...item,
              name: dishName,
              category:
                dishCategory,
              price:
                Number(
                  dishPrice
                ),
              image:
                dishImage ||
                item.image,
            };
          }

          return item;
        });

      setMenuItems(updated);

      Alert.alert(
        "Success",
        "Dish Updated"
      );
    } else {
      const newDish = {
        id: Date.now().toString(),

        name: dishName,

        category: dishCategory,

        price: Number(
          dishPrice
        ),

        available: true,

        image:
          dishImage ||
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      };

      setMenuItems([
        newDish,
        ...menuItems,
      ]);

      Alert.alert(
        "Success",
        "Dish Added"
      );
    }

    setModalVisible(false);
  };

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.header}>
        <View>
          <Text
            style={styles.smallText}
          >
            Welcome Back 👋
          </Text>

          <Text style={styles.title}>
            Cook Menu
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              "CookHome"
            )
          }
        >
          <Ionicons
            name="home"
            size={28}
            color="#16b39a"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <Ionicons
          name="search"
          size={20}
          color="#777"
        />

        <TextInput
          placeholder="Search dishes..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={
          false
        }
        style={{ marginTop: 20 }}
      >
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.categoryBtn,

              selectedCategory ===
                item &&
                styles.activeCategory,
            ]}
            onPress={() =>
              setSelectedCategory(
                item
              )
            }
          >
            <Text
              style={[
                styles.categoryText,

                selectedCategory ===
                  item &&
                  styles.activeCategoryText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.addBtn}
        onPress={openAddModal}
      >
        <Ionicons
          name="add"
          size={22}
          color="#fff"
        />

        <Text
          style={styles.addBtnText}
        >
          Add Dish
        </Text>
      </TouchableOpacity>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) =>
          item.id
        }
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.foodImage}
            />

            <View
              style={styles.content}
            >
              <View
                style={
                  styles.rowBetween
                }
              >
                <Text
                  style={
                    styles.foodName
                  }
                >
                  {item.name}
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    deleteDish(
                      item.id
                    )
                  }
                >
                  <Ionicons
                    name="trash-outline"
                    size={22}
                    color="red"
                  />
                </TouchableOpacity>
              </View>

              <Text
                style={
                  styles.category
                }
              >
                {item.category}
              </Text>

              <Text
                style={styles.price}
              >
                ₹{item.price}
              </Text>

              <View
                style={
                  styles.actionRow
                }
              >
                <TouchableOpacity
                  style={
                    styles.editBtn
                  }
                  onPress={() =>
                    editDish(item)
                  }
                >
                  <Ionicons
                    name="create-outline"
                    size={18}
                    color="#16b39a"
                  />

                  <Text
                    style={
                      styles.editText
                    }
                  >
                    Edit
                  </Text>
                </TouchableOpacity>

                <Switch
                  value={
                    item.available
                  }
                  onValueChange={() =>
                    toggleAvailability(
                      item.id
                    )
                  }
                />
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              "CookHome"
            )
          }
        >
          <Ionicons
            name="home-outline"
            size={24}
            color="#777"
          />

          <Text
            style={styles.bottomText}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomItem}
        >
          <Ionicons
            name="restaurant"
            size={24}
            color="#16b39a"
          />

          <Text
            style={
              styles.activeBottomText
            }
          >
            Menu
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <View
          style={
            styles.modalOverlay
          }
        >
          <View
            style={
              styles.modalContainer
            }
          >
            <Text
              style={
                styles.modalTitle
              }
            >
              {isEditing
                ? "Edit Dish"
                : "Add Dish"}
            </Text>

            <TextInput
              placeholder="Dish Name"
              style={
                styles.modalInput
              }
              value={dishName}
              onChangeText={
                setDishName
              }
            />

            <TextInput
              placeholder="Category"
              style={
                styles.modalInput
              }
              value={dishCategory}
              onChangeText={
                setDishCategory
              }
            />

            <TextInput
              placeholder="Price"
              style={
                styles.modalInput
              }
              keyboardType="numeric"
              value={dishPrice}
              onChangeText={
                setDishPrice
              }
            />

            <TextInput
              placeholder="Image URL"
              style={
                styles.modalInput
              }
              value={dishImage}
              onChangeText={
                setDishImage
              }
            />

            <TouchableOpacity
              style={styles.saveBtn}
              onPress={saveDish}
            >
              <Text
                style={
                  styles.saveBtnText
                }
              >
                Save Dish
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                setModalVisible(false)
              }
            >
              <Text
                style={
                  styles.cancelText
                }
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      "#F5F5F5",
    paddingTop: 45,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
  },

  smallText: {
    color: "#777",
    fontSize: 14,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginTop: 4,
  },

  searchBox: {
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 58,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
  },

  categoryBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    height: 42,
    justifyContent: "center",
    borderRadius: 20,
    marginRight: 10,
  },

  activeCategory: {
    backgroundColor: "#16b39a",
  },

  categoryText: {
    color: "#555",
    fontWeight: "600",
  },

  activeCategoryText: {
    color: "#fff",
  },

  addBtn: {
    backgroundColor: "#16b39a",
    marginTop: 18,
    height: 56,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  addBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 18,
    padding: 14,
    flexDirection: "row",
  },

  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },

  content: {
    flex: 1,
    marginLeft: 15,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent:
      "space-between",
  },

  foodName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  category: {
    marginTop: 6,
    color: "#777",
  },

  price: {
    fontSize: 22,
    fontWeight: "700",
    color: "#16b39a",
    marginTop: 8,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  editBtn: {
    flexDirection: "row",
    alignItems: "center",
  },

  editText: {
    marginLeft: 5,
    color: "#16b39a",
    fontWeight: "700",
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 78,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent:
      "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ECECEC",
  },

  bottomItem: {
    alignItems: "center",
  },

  bottomText: {
    marginTop: 4,
    color: "#777",
  },

  activeBottomText: {
    marginTop: 4,
    color: "#16b39a",
    fontWeight: "700",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor:
      "rgba(0,0,0,0.5)",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  modalInput: {
    backgroundColor: "#F5F5F5",
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 15,
  },

  saveBtn: {
    backgroundColor: "#16b39a",
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  saveBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  cancelText: {
    textAlign: "center",
    marginTop: 18,
    color: "#777",
    fontWeight: "600",
  },
});