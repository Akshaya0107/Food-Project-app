import React, {
  useState,
  useEffect,
} from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function DeliveryProfileScreen({
  navigation,
  route,
}) {

  const [onlineStatus, setOnlineStatus] =
    useState(true);

  useEffect(() => {

    if (
      route?.params?.onlineStatus !==
      undefined
    ) {

      setOnlineStatus(
        route.params.onlineStatus
      );

    }

  }, [route?.params]);

  const [editing, setEditing] =
    useState(false);

  const [profile, setProfile] =
    useState({

      name: "Arun Kumar",

      phone: "9876543210",

      email:
        "arunkumar@gmail.com",

      city:
        "Chennai, Tamil Nadu",

      vehicle:
        "Honda Activa TN09AB1234",

      experience:
        "3 Years",

      description:
        "Trusted delivery partner with fast delivery performance and excellent customer ratings.",

      image:
        "https://randomuser.me/api/portraits/men/32.jpg",

      rating: 4.8,

      totalDeliveries: 980,

      todayDeliveries: 12,

      todayEarnings: 1250,

      completedOrders: 920,

      cancelledOrders: 12,

    });

  const changePhoto = () => {

    const images = [

      "https://randomuser.me/api/portraits/men/32.jpg",

      "https://randomuser.me/api/portraits/men/45.jpg",

      "https://randomuser.me/api/portraits/men/60.jpg",

      "https://randomuser.me/api/portraits/men/75.jpg",

    ];

    const randomImage =
      images[
        Math.floor(
          Math.random() *
            images.length
        )
      ];

    setProfile({
      ...profile,
      image: randomImage,
    });

    Alert.alert(
      "Profile Updated",
      "Photo changed successfully"
    );

  };

  const saveProfile = () => {

    setEditing(false);

    Alert.alert(
      "Success",
      "Profile updated successfully"
    );

  };

  const logout = () => {

    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [

        {
          text: "Cancel",
          style: "cancel",
        },

        {
          text: "Logout",

          onPress: () =>
            navigation.replace(
              "Login"
            ),
        },

      ]
    );

  };

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}

        <View style={styles.header}>

          <View>

            <Text style={styles.smallText}>
              Delivery Partner 🚴
            </Text>

            <Text style={styles.name}>
              {profile.name}
            </Text>

          </View>

          <View
            style={[
              styles.badge,

              {
                backgroundColor:
                  onlineStatus
                    ? "#23B6A6"
                    : "#ff4d4d",
              },
            ]}
          >

            <Text style={styles.badgeText}>
              {onlineStatus
                ? "ONLINE"
                : "OFFLINE"}
            </Text>

          </View>

        </View>

        {/* PROFILE CARD */}

        <View style={styles.profileCard}>

          <View>

            <Image
              source={{
                uri: profile.image,
              }}
              style={styles.profileImage}
            />

            <TouchableOpacity
              style={styles.cameraBtn}
              onPress={changePhoto}
            >

              <Ionicons
                name="camera"
                size={18}
                color="#fff"
              />

            </TouchableOpacity>

          </View>

          <TextInput
            editable={editing}
            value={profile.name}
            onChangeText={text =>
              setProfile({
                ...profile,
                name: text,
              })
            }
            style={styles.nameInput}
          />

          <TextInput
            editable={editing}
            value={profile.vehicle}
            onChangeText={text =>
              setProfile({
                ...profile,
                vehicle: text,
              })
            }
            style={styles.vehicleInput}
          />

          <View style={styles.ratingRow}>

            <Ionicons
              name="star"
              size={18}
              color="#FFC107"
            />

            <Text style={styles.rating}>
              {profile.rating}
            </Text>

            <Text style={styles.deliveryCount}>
              • {profile.totalDeliveries} Deliveries
            </Text>

          </View>

        </View>

        {/* STATS */}

        <View style={styles.statsRow}>

          <View style={styles.statsCard}>

            <Ionicons
              name="cube-outline"
              size={28}
              color="#23B6A6"
            />

            <Text style={styles.statsValue}>
              {profile.todayDeliveries}
            </Text>

            <Text style={styles.statsLabel}>
              Today's Deliveries
            </Text>

          </View>

          <View style={styles.statsCard}>

            <Ionicons
              name="cash-outline"
              size={28}
              color="#FF9800"
            />

            <Text style={styles.statsValue}>
              ₹{profile.todayEarnings}
            </Text>

            <Text style={styles.statsLabel}>
              Today's Earnings
            </Text>

          </View>

        </View>

        {/* ANALYTICS */}

        <View style={styles.statsRow}>

          <View style={styles.statsCard}>

            <Ionicons
              name="checkmark-circle"
              size={28}
              color="#23B6A6"
            />

            <Text style={styles.statsValue}>
              {profile.completedOrders}
            </Text>

            <Text style={styles.statsLabel}>
              Completed Orders
            </Text>

          </View>

          <View style={styles.statsCard}>

            <Ionicons
              name="close-circle"
              size={28}
              color="#ff4d4d"
            />

            <Text style={styles.statsValue}>
              {profile.cancelledOrders}
            </Text>

            <Text style={styles.statsLabel}>
              Cancelled Orders
            </Text>

          </View>

        </View>

        {/* DETAILS */}

        <View style={styles.detailsCard}>

          <View style={styles.detailRow}>

            <Ionicons
              name="call-outline"
              size={22}
              color="#23B6A6"
            />

            <TextInput
              editable={editing}
              value={profile.phone}
              onChangeText={text =>
                setProfile({
                  ...profile,
                  phone: text,
                })
              }
              style={styles.detailInput}
            />

          </View>

          <View style={styles.detailRow}>

            <Ionicons
              name="mail-outline"
              size={22}
              color="#23B6A6"
            />

            <TextInput
              editable={editing}
              value={profile.email}
              onChangeText={text =>
                setProfile({
                  ...profile,
                  email: text,
                })
              }
              style={styles.detailInput}
            />

          </View>

          <View style={styles.detailRow}>

            <Ionicons
              name="location-outline"
              size={22}
              color="#23B6A6"
            />

            <TextInput
              editable={editing}
              value={profile.city}
              onChangeText={text =>
                setProfile({
                  ...profile,
                  city: text,
                })
              }
              style={styles.detailInput}
            />

          </View>

        </View>

        {/* ABOUT */}

        <View style={styles.aboutCard}>

          <Text style={styles.aboutTitle}>
            About Delivery Partner
          </Text>

          <TextInput
            editable={editing}
            multiline
            value={profile.description}
            onChangeText={text =>
              setProfile({
                ...profile,
                description: text,
              })
            }
            style={styles.aboutInput}
          />

        </View>

        {/* BUTTONS */}

        {!editing ? (

          <TouchableOpacity
            style={styles.editBtn}
            onPress={() =>
              setEditing(true)
            }
          >

            <Ionicons
              name="create-outline"
              size={20}
              color="#fff"
            />

            <Text style={styles.btnText}>
              Edit Profile
            </Text>

          </TouchableOpacity>

        ) : (

          <TouchableOpacity
            style={styles.saveBtn}
            onPress={saveProfile}
          >

            <Ionicons
              name="save-outline"
              size={20}
              color="#fff"
            />

            <Text style={styles.btnText}>
              Save Changes
            </Text>

          </TouchableOpacity>

        )}

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={logout}
        >

          <Ionicons
            name="log-out-outline"
            size={22}
            color="#fff"
          />

          <Text style={styles.btnText}>
            Logout
          </Text>

        </TouchableOpacity>

        <View style={{ height: 120 }} />

      </ScrollView>

      {/* BOTTOM TAB */}

      <View style={styles.bottomBar}>

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              "DeliveryHome"
            )
          }
        >

          <Ionicons
            name="home-outline"
            size={24}
            color="#777"
          />

          <Text style={styles.bottomText}>
            Home
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomItem}
          onPress={() =>
            navigation.navigate(
              "DeliveryEarnings"
            )
          }
        >

          <Ionicons
            name="wallet-outline"
            size={24}
            color="#777"
          />

          <Text style={styles.bottomText}>
            Earnings
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomItem}
        >

          <Ionicons
            name="person"
            size={24}
            color="#23B6A6"
          />

          <Text
            style={styles.activeBottomText}
          >
            Profile
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  smallText: {
    fontSize: 14,
    color: "#777",
  },

  name: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
    marginTop: 5,
  },

  badge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  badgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },

  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 28,
    alignItems: "center",
    padding: 25,
    marginBottom: 20,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  cameraBtn: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#23B6A6",
    justifyContent: "center",
    alignItems: "center",
  },

  nameInput: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginTop: 15,
  },

  vehicleInput: {
    color: "#666",
    marginTop: 5,
    textAlign: "center",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  rating: {
    marginLeft: 5,
    fontWeight: "700",
    color: "#111",
  },

  deliveryCount: {
    marginLeft: 8,
    color: "#777",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  statsCard: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 22,
    padding: 20,
    alignItems: "center",
  },

  statsValue: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
    color: "#111",
  },

  statsLabel: {
    color: "#777",
    marginTop: 5,
    textAlign: "center",
  },

  detailsCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 20,
    marginBottom: 20,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  detailInput: {
    marginLeft: 15,
    flex: 1,
    color: "#333",
  },

  aboutCard: {
    backgroundColor: "#fff",
    borderRadius: 22,
    padding: 20,
    marginBottom: 25,
  },

  aboutTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 12,
  },

  aboutInput: {
    color: "#555",
    lineHeight: 22,
  },

  editBtn: {
    backgroundColor: "#FF9800",
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
  },

  saveBtn: {
    backgroundColor: "#23B6A6",
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
  },

  logoutBtn: {
    backgroundColor: "#ff4d4d",
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  btnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 8,
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
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
    fontSize: 12,
  },

  activeBottomText: {
    marginTop: 4,
    color: "#23B6A6",
    fontWeight: "700",
    fontSize: 12,
  },

});