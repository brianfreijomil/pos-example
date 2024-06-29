import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';

const signIn = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full h-full justify-center items-center px-4 my-6">
          <Text className="text-xl font-bold text-fuchsia-600">Sig In</Text>
          <TouchableOpacity onPress={() => router.replace("/home")} className="my-10 p-2 bg-black border-solid border-2 border-indigo-500/100 rounded-md">
            <Text className="font-bold text-white">
              ir al home
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn