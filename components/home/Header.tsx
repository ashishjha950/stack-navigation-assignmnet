import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileTop}>
        <TouchableOpacity>
            <Image
            source={{ uri: "https://investigativegeek.com/wp-content/uploads/2023/05/inosuke-demon-slayer.jpeg" }}
            style={styles.profilePhoto}
          />
        </TouchableOpacity>
        <View style={styles.namePlate}>
          <Text style={styles.greeting}>Hello, Enoske</Text>
          <Text style={styles.date}>Today 25 Nov.</Text>
        </View>
        <TouchableOpacity>
            <EvilIcons name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  namePlate:{
    display:"flex",
    alignItems:"center"
  },
  profileTop: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    color: "#555",
  },
});

export default Header;
