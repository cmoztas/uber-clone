import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { selectOrigin } from '../slices/navSlice';

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
    const navigation = useNavigation();
    const origin=useSelector(selectOrigin);

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`m-2 pt-4 pr-2 pb-8 pl-6 w-40 bg-gray-200`}
                    onPress={() => navigation.navigate(item.screen)}
                    disabled={!origin}
                >
                    <View style={tw`${!origin && "opacity-20"}`}>
                        <Image
                            style={{width: 120, height: 120, resizeMode: 'contain'}}
                            source={{ uri: item.image}}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon 
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            type='antdesign'
                            name='arrowright'
                            color='#FFF'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;
