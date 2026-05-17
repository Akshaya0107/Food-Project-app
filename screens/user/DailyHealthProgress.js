// ======================================================
// FILE: screens/user/DailyHealthProgress.js
// GASTRO PULSE VERSION
// ======================================================

import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function DailyHealthProgress({
  navigation,
}) {
  return (
    <View style={styles.card}>

      {/* TOP */}
      <View style={styles.topRow}>
        <View>
          <Text style={styles.title}>
            Daily Nutrition Progress
          </Text>

          <Text style={styles.subTitle}>
            Track today's healthy meal intake
          </Text>
        </View>

        <View style={styles.iconBox}>
          <Ionicons
            name="fitness"
            size={24}
            color="#fff"
          />
        </View>
      </View>

      {/* CALORIES */}
      <View style={styles.row}>
        <Text style={styles.value}>
          1250
        </Text>

        <Text style={styles.target}>
          / 2000 kcal
        </Text>
      </View>

      {/* PROGRESS BAR */}
      <View style={styles.progressBg}>
        <View style={styles.progressFill} />
      </View>

      {/* STATS */}
      <View style={styles.statsRow}>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            82g
          </Text>

          <Text style={styles.statLabel}>
            Protein
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            145g
          </Text>

          <Text style={styles.statLabel}>
            Carbs
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            42g
          </Text>

          <Text style={styles.statLabel}>
            Fats
          </Text>
        </View>

      </View>

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            'HealthCentricMealForm'
          )
        }
      >
        <Text style={styles.buttonText}>
          Explore Healthy Meals
        </Text>

        <Ionicons
          name="arrow-forward"
          size={18}
          color="#fff"
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#E8FFF8',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111',
  },

  subTitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#16b39a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  value: {
    fontSize: 42,
    fontWeight: '800',
    color: '#111',
  },

  target: {
    fontSize: 15,
    color: '#666',
    marginLeft: 6,
    marginBottom: 8,
  },

  progressBg: {
    height: 10,
    backgroundColor: '#CDEEE5',
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 18,
  },

  progressFill: {
    width: '62%',
    height: 10,
    backgroundColor: '#16b39a',
    borderRadius: 30,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginTop: 24,
  },

  statCard: {
    backgroundColor: '#fff',
    width: '30%',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
  },

  statValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#16b39a',
  },

  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  button: {
    backgroundColor: '#16b39a',
    marginTop: 26,
    borderRadius: 16,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },

});