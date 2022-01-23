import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GOOGLE_MAPS_API_KEY } from '@env';



const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain'
                }}
                source={{
                    uri: 'https://links.papareact.com/gzs',
                }}
            />

            <GooglePlacesAutocomplete 
                placeholder='Where From?'
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                minLength={2}
                enablePoweredByContainer={false}
                onPress={(data, details = null) => {
                    console.log(data);
                    console.log(details);
                }}
                styles={{
                    container: {
                        flex: 0
                    },
                    textInput: {
                        fontSize: 18
                    }
                }}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
                    language: 'en'
                }}
            />

            <NavOptions />
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

});
