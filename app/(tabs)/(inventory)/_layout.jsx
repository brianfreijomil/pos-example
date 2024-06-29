import React from 'react'
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const InventoryLayout = () => {
    return (
        <>
          <Stack>
            <Stack.Screen
              name="inventory"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="product"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="category"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="brand"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="discount"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
    
          <StatusBar backgroundColor="#5646A2" style="light" />
        </>
      );
}

export default InventoryLayout;