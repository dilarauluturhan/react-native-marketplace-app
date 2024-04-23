import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function index() {
  return (
    <View className="flex-1">
      <Image
        src={
          "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="object-cover flex-1"
      />
      <View className="flex-1 items-center mt-[-10px] bg-[#EBEBEB] rounded-t-2xl shadow-lg">
        <View className="flex-row items-center justify-center gap-1 mt-4">
          <AntDesign name="shoppingcart" size={25} color="rgb(55 65 81)" />
          <Text className="text-[30px] font-bold text-gray-700 tracking-widest">
            GoSell
          </Text>
        </View>
        <Text className="text-[17px] w-72 mt-2 text-center">
          Buy sell <Text className="font-bold text-gray-700">GoSell</Text> where
          you can sell old item and make real money...
        </Text>
        <TouchableOpacity
          onPress={() => console.log("Sign in")}
          className="border p-3 bg-gray-200 border-gray-300 rounded-xl shadow-xl mt-10"
        >
          <Text className="text-gray-800 text-[18px] font-semibold text-center">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default index;
