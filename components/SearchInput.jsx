import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert, StyleSheet } from "react-native";

import { icons } from "../constants";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={query}
        placeholder="Buscar productos..."
        placeholderTextColor="#AAAAB4"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Consulta faltante",
              "Por favor ingrese algo para buscar resultados en la base de datos"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" tintColor="#AAAAB4"/>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    width: '80%',
    height: 60,
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  textInput: {
    fontSize: 14,
    fontWeight: "semibold",
    flex: 1,
    lineHeight: 1.5,
  }
});
