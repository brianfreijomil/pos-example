import React from 'react'
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const HomeLayout = () => {
    return (
        <>
          <Stack>
            <Stack.Screen
              name="home"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="profile"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
    
          <StatusBar backgroundColor="#5646A2" style="light" />
        </>
      );
}

export default HomeLayout