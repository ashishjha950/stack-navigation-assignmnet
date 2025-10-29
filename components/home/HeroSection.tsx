import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import heroImage from "@/assets/images/hero-section.png";

const HeroSection = () => {
  return (
    <View style={styles.section}>
      <View>
        <Text style={styles.title}>Daily challenge</Text>
        <Text style={styles.note}>Do your plan before 09:00 AM</Text>

        <View style={styles.row}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLXNimqLIb9jYZo0d6Oqs98jmaepv8ORTEw&s",
            }}
            style={styles.face}
          />
          <Image
            source={{
              uri: "https://media.gettyimages.com/id/2063799507/photo/business-portrait-and-black-man-in-city-outdoor-for-career-or-job-of-businessman-face.jpg?s=612x612&w=gi&k=20&c=aV_6jGmVEE5WQR6F__JPMwAxJZiPBBIg-a0pdzKgL6A=",
            }}
            style={styles.face}
          />
          <Image
            source={{
              uri: "https://media.gettyimages.com/id/1475830052/photo/a-sports-spectator-celebrates-and-high-fives-the-person-next-to-him.jpg?s=612x612&w=0&k=20&c=1Y86m8BAXvPkF_2D23_UC2TgTNuoxhXivNghZPOswd0=",
            }}
            style={styles.face}
          />
          <View style={styles.extra}>
            <Text style={styles.extraText}>+4</Text>
          </View>
        </View>
      </View>

      <Image source={heroImage} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#9b6af5ff",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  note: {
    fontSize: 10,
    color: "#f1f1f1",
    marginVertical: 6,
  },
  row: {
    flexDirection: "row",
  },
  face: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: -8,
    borderWidth: 2,
    borderColor: "#fff",
  },
  extra: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  extraText: {
    fontWeight: "600",
    fontSize: 12,
  },
  image: {
    width: 90,
    height: 90,
    marginLeft: 10,
  },
});

export default HeroSection;
