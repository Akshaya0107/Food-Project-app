
import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function NotificationScreen({
  navigation,
}) {

  const [notifications, setNotifications] =
    useState([

      {
        id: '1',
        type: 'order',
        title: 'Order Accepted',
        desc:
          'Your homemade healthy meal order has been accepted 👨‍🍳',
        time: '2 mins ago',
      },

      {
        id: '2',
        type: 'delivery',
        title: 'Delivery Partner Assigned',
        desc:
          'Your Gastro Pulse order is on the way 🚚',
        time: '10 mins ago',
      },

      {
        id: '3',
        type: 'offer',
        title: 'Special Healthy Combo',
        desc:
          'Get 25% OFF on protein bowls and salads 🥗',
        time: '1 hour ago',
      },

      {
        id: '4',
        type: 'health',
        title: 'Daily Nutrition Reminder',
        desc:
          'Track today’s calorie and protein intake 💪',
        time: '3 hours ago',
      },

      {
        id: '5',
        type: 'success',
        title: 'Payment Successful',
        desc:
          'Your payment was completed successfully ✅',
        time: 'Yesterday',
      },

    ]);

  /* REMOVE NOTIFICATION */

  const removeNotification = (id) => {

    setNotifications(
      notifications.filter(
        item => item.id !== id
      )
    );
  };

  /* ICON */

  const getIcon = (type) => {

    switch (type) {

      case 'order':
        return 'restaurant';

      case 'delivery':
        return 'bicycle';

      case 'offer':
        return 'gift';

      case 'health':
        return 'fitness';

      case 'success':
        return 'checkmark-circle';

      default:
        return 'notifications';
    }
  };

  return (

    <SafeAreaView style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() =>
            navigation.goBack()
          }
        >

          <Ionicons
            name="arrow-back"
            size={22}
            color="#222"
          />

        </TouchableOpacity>

        <Text style={styles.title}>
          Notifications
        </Text>

        <View style={{ width: 40 }} />

      </View>

      {/* EMPTY */}

      {notifications.length === 0 ? (

        <View style={styles.emptyContainer}>

          <Ionicons
            name="notifications-off"
            size={70}
            color="#bbb"
          />

          <Text style={styles.emptyTitle}>
            No Notifications
          </Text>

          <Text style={styles.emptyDesc}>
            You're all caught up 🎉
          </Text>

        </View>

      ) : (

        <FlatList
          data={notifications}
          keyExtractor={(item) =>
            item.id
          }
          showsVerticalScrollIndicator={
            false
          }
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          renderItem={({ item }) => (

            <View style={styles.card}>

              {/* LEFT */}

              <View style={styles.left}>

                <View style={styles.iconBox}>

                  <Ionicons
                    name={getIcon(
                      item.type
                    )}
                    size={24}
                    color="#16b39a"
                  />

                </View>

                <View
                  style={{
                    marginLeft: 14,
                    flex: 1,
                  }}
                >

                  <Text
                    style={styles.heading}
                  >
                    {item.title}
                  </Text>

                  <Text style={styles.desc}>
                    {item.desc}
                  </Text>

                  <Text style={styles.time}>
                    {item.time}
                  </Text>

                </View>

              </View>

              {/* CLOSE */}

              <TouchableOpacity
                onPress={() =>
                  removeNotification(
                    item.id
                  )
                }
              >

                <Ionicons
                  name="close"
                  size={22}
                  color="#999"
                />

              </TouchableOpacity>

            </View>

          )}
        />

      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingTop: 15,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111',
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 22,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'flex-start',
    elevation: 3,
  },

  left: {
    flexDirection: 'row',
    flex: 1,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E9FAF6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },

  desc: {
    color: '#666',
    marginTop: 5,
    lineHeight: 20,
    fontSize: 13,
  },

  time: {
    color: '#999',
    marginTop: 8,
    fontSize: 12,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginTop: 20,
  },

  emptyDesc: {
    color: '#777',
    marginTop: 8,
    fontSize: 14,
  },

});