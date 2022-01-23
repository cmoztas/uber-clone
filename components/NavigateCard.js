import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { withTheme } from 'react-native-elements';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { setDestination } from '../slices/navSlice'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Cagkan!</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        minLength={2}
                        returnKeyType={"search"}
                        query={{
                            key: GOOGLE_MAPS_API_KEY,
                            language: 'en'
                        }}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }));

                            navigation.navigate('RideOptionsCard');
                        }}
                    />
                </View>
                <NavFavourites />
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    }
});
