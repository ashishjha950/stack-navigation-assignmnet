import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/home/Header'
import HeroSection from '@/components/home/HeroSection'
import Plans from '@/components/home/Plans'
import Calendar from '@/components/home/Calendar'

const home = () => {
  return (
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <Header/>
        <HeroSection/>
        <Calendar/>
        <Plans/>
      </SafeAreaView>
      </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE7F6", 
    paddingHorizontal: 20,
  },
});