import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Header from '../../../components/Header';

const inventory = ['Productos','Categorias','Marcas','Descuentos'];
const sales = ['ventas','Analiticas','Gestion de cajas','Reportes'];

const BigCard = ({ title, dataCard, generalStyle, titleStyle, textStyle, icon, iconBoxStyle }) => {
  return (
    <View style={generalStyle}>
      <View style={{ paddingLeft: 20 }}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={textStyle}>{dataCard[0]}</Text>
        <Text style={textStyle}>{dataCard[1]}</Text>
        <Text style={textStyle}>{dataCard[2]}</Text>
        <Text style={textStyle}>{dataCard[3]}</Text>
      </View>
      <View style={iconBoxStyle}>
        <AntDesign name={icon} size={60} color={textStyle.color} />
      </View>
      </View>
  );
}

const SmallCard = ({ title, generalStyle, titleStyle, icon }) => {
  return (
    <View style={generalStyle}>
      <View>
          <Text style={titleStyle} >{title}</Text>
      </View>
      <View style={{marginBottom: 3}}>
        <AntDesign name={icon} size={50} color='white' />
      </View>
    </View>
  );
}

const home = () => {
  return (
    <SafeAreaView>
      <View className="h-full w-full bg-[#EFECFB]">
        <Header title="Lucas Amendola" sectionTitle="TiendasApp" isHome={true} />
        <BigCard title="INVENTARIO" dataCard={inventory} icon="exception1" generalStyle={styles.bigCard} titleStyle={styles.titleStyle} textStyle={styles.textCards} iconBoxStyle={styles.iconBoxStyle} />
        <BigCard title="CAJA" dataCard={sales} icon="isv" generalStyle={styles.bigCard} titleStyle={styles.titleStyle} textStyle={styles.textCards} iconBoxStyle={styles.iconBoxStyle} />
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 150,
          marginTop: 30,
          marginBottom: 30,
          marginHorizontal: 15,
        }}>
          <SmallCard title="PROVEEDORES" generalStyle={styles.smallCardStyle} titleStyle={styles.titleStyle} icon="contacts" color={styles.colorText} />
          <SmallCard title="USUARIOS" generalStyle={styles.smallCardStyle} titleStyle={styles.titleStyle} icon="team" color={styles.colorText} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  colorText: {
    color: 'white'
  },
  textCards: {
    color: 'white',
    fontWeight: 'semibold'
  },
  bigCard: {
    marginTop: 30,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#9080DE',
    height: 150,
    marginHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#8372D3',
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
  iconBoxStyle: {
    height: '100%',
    width: '40%',
    backgroundColor: '#5646A2',
    borderRadius: 20,
    paddingVertical: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#53439C',
  },
  smallCardStyle: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#9080DE',
    height: 150,
    width: 175,
    borderRadius: 20,
    backgroundColor: '#61549D',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },
  titleStyle: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 18, 
    letterSpacing: 2,
    marginBottom: 5
  }
})