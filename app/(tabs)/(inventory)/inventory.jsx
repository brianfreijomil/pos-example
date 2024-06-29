import { ScrollView, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import Header from '../../../components/Header';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';

const sections = 
[
  [
    {
      "name": "Productos",
      "icon": "skin",
      "color": "#615EEA",
      "route": "product"
    },
    {
      "name": "Categorias",
      "icon": "database",
      "color": "#615EEA",
      "route": "product"
    }
  ],
  [
    {
      "name": "Marcas",
      "icon": "staro",
      "color": "#615EEA",
      "route": "product"
    },
    {
      "name": "Descuentos",
      "icon": "tagso",
      "color": "#615EEA",
      "route": "product"
    }
  ],
  [
    {
      "name": "Stock minimo",
      "icon": "exclamationcircleo",
      "color": "#615EEA",
      "route": "product"
    }
  ],
];

const CardSection = ({ item }) => {

  const [isPressed, setIsPressed] = useState(false);

  if (item) {
    return (
      <TouchableHighlight
        underlayColor="#615EEA"
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={()=>{router.replace(`/${item.route}`)}} 
        style={styles.cardSection}>
          <View style={styles.itemCard}>
            <AntDesign style={{paddingBottom: 20}} name={item.icon} size={60} color={!isPressed ? item.color:'white'} />
            <Text style={[styles.titleCardSection, isPressed && styles.btnPressedText]}>
                {item.name}
            </Text>
          </View>          
      </TouchableHighlight>
    );
  }
  else {
    return null;
  }
}

const CoupleSmallCard = ({ couple }) => {
  return (
    <View style={styles.couple}>
      <CardSection item={couple[0]} />
      <CardSection item={couple[1]}/>
    </View>
  );
}

const inventory = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#EFECFB'}}>
      <Header title="Inventario" sectionTitle="TiendasApp" isHome={false} route="/home"/>
      <ScrollView
        style={styles.containerScroll}>
        {sections.map((item, index) => (
          <CoupleSmallCard 
            key={index} 
            couple={item}
          />
      ))}
    </ScrollView>
    </SafeAreaView>
  )
}

export default inventory

const styles = StyleSheet.create({
  containerScroll: {
    paddingVertical: 30,
    backgroundColor: '#efecfb',
  },
  inventoryStyles: {
    height: '100%',
    width: '100%'
  },
  titleSection: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 18, 
    letterSpacing: 2,
    marginBottom: 5
  },
  couple: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 180,
    marginHorizontal: 15,
    marginBottom: 15
  },
  cardSection: {
    height: 180,
    width: 180,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 20,
  },
  itemCard: {
    width: 180,
    height: 180,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCardSection: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: '#6E6E6E',
    textAlign: 'center'
  },
  btnPressedText: {
    color: 'white',
    fontWeight: 'bold',
  },
})