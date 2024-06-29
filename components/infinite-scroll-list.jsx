import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, ActivityIndicator, View, Text } from 'react-native';


const ItemComponent = ({ item }) => {
    return (
      <View className="overflow-hidden w-full"
        style={ (item.id % 2 == 0) ? [styles.itemComponentPar, styles.itemComponent] : [styles.itemComponent]}>
        <Text style={styles.fieldStock}>{item.code}</Text>
        <Text style={styles.fieldName}>{item.name}</Text>
        <Text className="truncate" style={
            item.stock < 5 ? styles.stockMin : styles.fieldStock}
        >
            {item.stock}
        </Text>
      </View>
    );
  }

const InfiniteScrollList = ({listItems}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const loadMoreData = () => {
        //obtengo data
        if (listItems[page] && listItems[page] !== 'undefined') {
            const newData = listItems[page];
            setData([...data, ...newData]);
            setPage(page + 1);
            setLoading(false);
        }
        else if (listItems[page] === 'undefined') {
            setLoading(false);
            //console.error("No hay mas items");
        }
        else {
            setLoading(false);
            //console.error("No hay mas items");
        }
  }

//   const loadMoreData = () => {
//     if (!loading) {
//       setLoading(true);
//       fetch(`https://api.example.com/items?page=${page}`)
//         .then(response => response.json())
//         .then(newData => {
//           setData([...data, ...newData]);
//           setPage(page + 1);
//           setLoading(false);
//         })
//         .catch(error => {
//           setLoading(false);
//           console.error(error);
//         });
//     }
//   };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <FlatList
        style={styles.flatList}
        data={data}
        renderItem={({ item }) => <ItemComponent item={item} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => loading ? <ActivityIndicator /> : null}
        ListHeaderComponent={() => (
            <View style={styles.headerList}>
                <Text style={styles.codeStyle}>Codigo</Text>
                <Text style={styles.nameStyle}>Nombre</Text>
                <Text style={styles.stockStyle}>Stock</Text>
            </View>
        )}
    />
  );
};
export default InfiniteScrollList;

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: '#F3F3F3',
        marginBottom: 238
    },
    headerList: {
        height: 40,
        width: '100%',
        backgroundColor: '#E5DCF8',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    codeStyle: {
        textAlign: 'center',
        width: '25%',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1F1E1E'
    },
    nameStyle: {
        textAlign: 'center',
        width: '50%',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1F1E1E'
    },
    stockStyle: {
        textAlign: 'center',
        width: '25%',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1F1E1E'
    },
    stockMin: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        width: '25%',
    },
    itemComponentPar: {
        backgroundColor: '#EEEEEE'
    },
    itemComponent: {
        width: '100%',
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
    fieldItemComponent: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: '#1F1E1E'
    },
    fieldStock: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: '#1F1E1E',
        textAlign: 'center',
        width: '25%',
    },
    fieldName: {
        textAlign: 'center',
        width: '50%',
        fontSize: 16,
        fontWeight: 'semibold',
        color: '#1F1E1E'
    },
});