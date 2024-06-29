import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'


const Welcome = () => {
  return (
    <SafeAreaView classname="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%",}}>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Text className="font-bold text-xl">
            Point of Sale App
          </Text>
          <TouchableOpacity onPress={() => router.push("/sign-in")} className="my-10 p-2 bg-black border-solid border-2 border-indigo-500/100 rounded-md">
            <Text className="font-bold text-white">
              ir al login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Welcome