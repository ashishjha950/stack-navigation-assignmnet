import React from "react";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.iconSelected,
              ]}
            >
              <Ionicons
                name="home-outline"
                size={24}
                color={focused ? "#fff" : "#000"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.iconSelected,
              ]}
            >
              <Feather
                name="grid"
                size={22}
                color={focused ? "#fff" : "#000"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="graph"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.iconSelected,
              ]}
            >
              <FontAwesome5
                name="chart-line"
                size={20}
                color={focused ? "#fff" : "#000"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.iconSelected,
              ]}
            >
              <Ionicons
                name="person-outline"
                size={22}
                color={focused ? "#fff" : "#000"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 20,
    right: 20,
    height: 65,
    borderRadius: 30,
    backgroundColor: "#f7f7f7",
    elevation: 10,
    borderTopWidth: 0,
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 20,
  },
  iconSelected: {
    backgroundColor: "#000", 
  },
});

export default _layout;
