import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const TabIcon = ({ icon, color, focused }) => {
  return (
    <View className={`${focused ? " rounded-full bg-violet-400":""} h-12 w-12 flex items-center justify-center`}>
      <AntDesign name={icon} size={focused ? 30:25} color={color} />
    </View>
  );
};

const TabLayout = () => {

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#3B3838",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            height: 70
          },
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="home"
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="sales"
          options={{
            title: "Ventas",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="isv"
                color={color}
                name="Ventas"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(inventory)"
          options={{
            title: "Inventario",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="exception1"
                color={color}
                name="Inventario"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            title: "Usuarios",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="team"
                color={color}
                name="Usuarios"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="supplier"
          options={{
            title: "Proveedores",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="contacts"
                color={color}
                name="Proveedores"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      <StatusBar backgroundColor="white" style="auto" />
    </>
  );
};

export default TabLayout;