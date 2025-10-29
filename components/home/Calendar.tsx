import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const Calendar = () => {
  const days = [
    { day: "Mon", date: 24 },
    { day: "Tue", date: 25 },
    { day: "Wed", date: 26 },
    { day: "Thu", date: 27 },
    { day: "Fri", date: 28 },
    { day: "Sat", date: 29 },
    { day: "Sun", date: 30 },
  ];

  const activeDate = 25; 
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {days.map((item, index) => (
          <TouchableOpacity key={index} style={[
            styles.card,
            item.date === activeDate && styles.activeCard
          ]}>
            <Text style={[
              styles.day,
              item.date === activeDate && styles.activeText
            ]}>
              {item.day}
            </Text>
            <Text style={[
              styles.date,
              item.date === activeDate && styles.activeText
            ]}>
              {item.date}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
    marginRight: 10,
  },
  activeCard: {
    backgroundColor: "#9c71ebff",
  },
  day: {
    fontSize: 13,
    color: "#777",
  },
  date: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  activeText: {
    color: "#fff",
  },
});

export default Calendar;
