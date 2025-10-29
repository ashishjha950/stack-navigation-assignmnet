import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Plans = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Your Plan</Text>

      {/* Row container */}
      <View style={styles.rowBox}>
        {/* LEFT — Yellow Card */}
        <View style={styles.leftBox}>
          <View style={styles.cardYellow}>
            <Text style={styles.level}>Medium</Text>
            <Text style={styles.activity}>Yoga Group</Text>
            <Text style={styles.info}>25 Nov. | 14:00 - 15:00</Text>
            <Text style={styles.info}>A5 Room</Text>

            <View style={styles.trainerBox}>
              <Image
                source={{
                  uri: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRwCTeWyTBfcCol9C87FAQl07X2v-3GNB_YgfcOQjQTosJBWCedJeIfzku5XLoWbGbMgV1VHX85nJECq4tlkEYPWuhAC3o1jCWL6.jpg?r=0e6",
                }}
                style={styles.trainerImg}
              />
              <Text style={styles.trainerName}>Trainer Tiffany Way</Text>
            </View>
          </View>
        </View>

        {/* RIGHT — Blue Card + Social Links */}
        <View style={styles.rightBox}>
          <View style={styles.cardBlue}>
            <Text style={styles.level}>Beginner</Text>
            <Text style={styles.activity}>Cardio Basics</Text>
            <Text style={styles.info}>26 Nov. | 10:00 - 11:00</Text>
            <Text style={styles.info}>Room B2</Text>

            <View style={styles.trainerBox}>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/en/9/9a/GutsBerserk.png",
                }}
                style={styles.trainerImg}
              />
              <Text style={styles.trainerName}>Trainer Guts</Text>
            </View>
          </View>

          <View style={styles.cardPink}>
            <Text style={styles.socialTitle}>Connect with us</Text>
            <View style={styles.socialRow}>
              <FontAwesome name="instagram" size={22} color="#fff" />
              <FontAwesome name="youtube-play" size={22} color="#fff" />
              <FontAwesome name="twitter" size={22} color="#fff" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
  },
  rowBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftBox: {
    flex: 1,
    marginRight: 8,
  },
  rightBox: {
    flex: 1,
    marginLeft: 8,
  },
  cardYellow: {
    backgroundColor: "#FFD54F",
    borderRadius: 16,
    padding: 16,
  },
  cardBlue: {
    backgroundColor: "#81D4FA",
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
  },
  cardPink: {
    backgroundColor: "#F48FB1",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },
  level: {
    backgroundColor: "rgba(255,255,255,0.3)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 8,
    fontSize: 12,
    marginBottom: 5,
  },
  activity: {
    fontSize: 18,
    fontWeight: "700",
  },
  info: {
    fontSize: 14,
    color: "#333",
    marginTop: 2,
  },
  trainerBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  trainerImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  trainerName: {
    fontWeight: "600",
  },
  socialTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 8,
  },
  socialRow: {
    flexDirection: "row",
    gap: 18,
  },
});

export default Plans;
