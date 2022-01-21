import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    }
];

const NavOptions = () => {
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`m-2 pt-4 pr-2 pb-8 pl-6 w-40 bg-gray-200`}
                >
                    <View>
                        <Image
                            style={{width: 120, height: 120, resizeMode: 'contain'}}
                            source={{ uri: item.image}}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;
