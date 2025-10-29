import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Plans = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Your Plan</Text>

      <View style={styles.row}>

        <View style={styles.left}>
          <View style={styles.yellowCard}>
            <View>
              <Text style={styles.tag}>Medium</Text>
              <Text style={styles.title}>Yoga Group</Text>
              <Text style={styles.subText}>25 Nov. | 14:00 - 15:00</Text>
              <Text style={styles.subText}>A5 Room</Text>
            </View>

            <View style={styles.trainerRow}>
              <Image
                source={{
                  uri: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRwCTeWyTBfcCol9C87FAQl07X2v-3GNB_YgfcOQjQTosJBWCedJeIfzku5XLoWbGbMgV1VHX85nJECq4tlkEYPWuhAC3o1jCWL6.jpg?r=0e6",
                }}
                style={styles.avatar}
              />
              <Text style={styles.trainer}>Trainer Tiffany Way</Text>
            </View>
          </View>
        </View>


        <View style={styles.right}>
          <View style={styles.blueCard}>
            <Text style={styles.tag}>Beginner</Text>
            <Text style={styles.title}>Cardio Basics</Text>
            <Text style={styles.subText}>26 Nov. | 10:00 - 11:00</Text>
            <Text style={styles.subText}>Room B2</Text>

            <View style={styles.trainerRow}>
              <Image
                source={{
                  uri: "https://m.media-amazon.com/images/M/MV5BMjlmYTljNzEtYWVhYy00OGRmLWJmZGQtYTZjMmE3ZDk4ZWMzXkEyXkFqcGc@._V1_.jpg",
                }}
                style={styles.avatar}
              />
              <Text style={styles.trainer}>Trainer Guts</Text>
            </View>
          </View>

          <View style={styles.pinkCard}>
            <Text style={styles.socialText}>Connect with us</Text>
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
  wrapper: {
    marginTop: 25,
    paddingHorizontal: width * 0.05,
  },
  heading: {
    fontSize: width * 0.055,
    fontWeight: "700",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  left: {
    flex: 1,
    marginRight: 8,
  },
  right: {
    flex: 1,
    marginLeft: 8,
    justifyContent: "space-between",
  },
  yellowCard: {
    backgroundColor: "#FFD54F",
    borderRadius: 14,
    padding: width * 0.04,
    flex: 1,
    justifyContent: "space-between",
  },
  blueCard: {
    backgroundColor: "#81D4FA",
    borderRadius: 14,
    padding: width * 0.04,
    marginBottom: 10,
  },
  pinkCard: {
    backgroundColor: "#F48FB1",
    borderRadius: 14,
    padding: width * 0.04,
    alignItems: "center",
    justifyContent: "center",
  },
  tag: {
    backgroundColor: "rgba(255,255,255,0.3)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    fontSize: width * 0.03,
    marginBottom: 5,
  },
  title: {
    fontSize: width * 0.045,
    fontWeight: "700",
  },
  subText: {
    fontSize: width * 0.035,
    color: "#333",
    marginTop: 2,
  },
  trainerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  avatar: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * 0.04,
    marginRight: 8,
  },
  trainer: {
    fontWeight: "600",
  },
  socialText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: width * 0.04,
    marginBottom: 8,
  },
  socialRow: {
    flexDirection: "row",
    gap: 18,
  },
});

export default Plans;
