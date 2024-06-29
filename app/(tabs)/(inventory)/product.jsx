import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../components/Header';
import { router, useLocalSearchParams } from "expo-router";
import PRODUCTS from "../../../constants/products";
import SearchInput from '../../../components/SearchInput';
import { AntDesign } from '@expo/vector-icons';
import InfiniteScrollList from '../../../components/infinite-scroll-list';

const CustomButtonAddItem = ({}) => {
  return (
    <TouchableOpacity
    style={styles.buttonAdd}
      onPress={()=>{router.replace}}
    >
      <AntDesign name='plus' size={32} color="white" />
    </TouchableOpacity>
  );
}

const product = () => {

  const { query } = useLocalSearchParams();

  return (
    <SafeAreaView >
      <Header title="Productos" sectionTitle="Inventario" isHome={false} route="inventory" />
      <View style={styles.searchContainer}>
        <SearchInput initialQuery={query} />
        <View style={styles.ficonFilterSearchContainer}>
          <AntDesign name='filter' size={24} color="#AAAAB4" />
        </View>
      </View>
      <InfiniteScrollList listItems={PRODUCTS} />
      <CustomButtonAddItem />
    </SafeAreaView>
  )
}

export default product

const styles = StyleSheet.create({
  container: {
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 15,
    marginHorizontal: 15,
  },
  ficonFilterSearchContainer: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CFCFCF',
  },
  itemList: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 0.5,
    borderTopColor: '#DCDCDC',
    borderTopWidth: 0.5,
    paddingVertical: 20
  },
  columnItemList: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '1F1E1E'
  },
  buttonAdd: {
    width: 70,
    height: 70,
    borderCurve: 'round',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#8B6DE2',
    backgroundColor: "#A78BFA",
    position: 'absolute',
    zIndex: 100,
    bottom: 270,
    right: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  }
})