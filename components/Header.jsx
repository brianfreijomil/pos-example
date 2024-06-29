import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { router } from 'expo-router';

const Header = ({ title, sectionTitle, isHome, route }) => {
  return (
    <View className="w-full" style={styles.container}>
      <View style={styles.containerLeftHeader}>
        { !isHome ?
          <TouchableOpacity 
            onPress={() => router.replace(route)}
            style={styles.backContainer}>
            <AntDesign name="back" size={24} color="white" />
          </TouchableOpacity> : null
        }

        <View style={styles.titlesContainer}>
          <Text 
            className="text-zinc-50 font-bold text-xl" 
            style={styles.title}>
              {title}
          </Text>
          <Text style={styles.subtitle}>
            {sectionTitle}
          </Text>
        </View>
      </View>
      { isHome ? 
        <View className="p-2 rounded-full border-solid border-2 border-neutral-50">
          <AntDesign name="user" size={24} color="white" />
        </View> : null
      }

    </View>
  );
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 35,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#4C38A7",
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5, 
  },
  containerLeftHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backContainer: {
    marginRight: 15,
  },
  titlesContainer: {
    
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#CCCCCC',
    fontWeight: 'bold'
  }
});