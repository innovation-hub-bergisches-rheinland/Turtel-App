import React, { useState } from 'react';
import {StyleSheet, View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import {InputOutline} from 'react-native-input-outline';
import Camera from '../../images/camera.jsx';
import OwnButton from '../TurtelButton.js';
import * as ImagePicker from 'expo-image-picker';

export function  Onboarding({ navigation }) {
    const [image, setImage] = useState(null);
    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [6, 6],
            quality: 1,
        });

        if(!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(result.assets[0].uri);
        }
    };

    const [genderSelected, setGenderSelected] = useState(false);
    const onGenderPress = () => {
        setGenderSelected(!genderSelected);
        return !genderSelected;
    }

    return (
        <SafeAreaView style={style.pageStyle}>
            {image && <Image source={{ uri:image }} style={style.profilePicture} />}
            <View style={{justifyContent: 'center', height: '100%', top: "5%"}}>
                <Pressable onPress={pickImage}>
                    <View style={style.imageContainer}>
                        <View style={!image ? style.selectImage: style.imageSelected}>
                            <Camera/>
                        </View>
                        {!image && <Text style={{textAlign: 'center'}}>Wähle ein Bild von Dir!</Text>}
                    </View>
                </Pressable>
                <View style={!image ? style.inputContainer : style.inputContainerImageSelected}>
                    <InputOutline placeholder='Name' style={style.input}/>
                    <InputOutline placeholder='Geburtstag (TT/MM/JJJJ)' style={style.input}/>
                    <OwnButton name="Weiter" style={{ width: 256}} onPress={() => navigation.navigate(Register)} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create ( {
    pageStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 52,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#000'
    },
    biological: {
        width: '90%',
        flexDirection: 'row',
    },
    selectImage: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#9679C1',
        borderRadius: 25,
        width: 100,
        padding: 5,
        marginBottom: 5
    },
    imageSelected: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#9679C1',
        width: 100,
        borderRadius: 25,
        padding: 5,
        backgroundColor: 'white',
        opacity: 0.8,
    },
    profilePicture: {
        width: "100%",
        height: "50%",
        position: 'absolute',
        top: 0,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        alignSelf: 'center',
        alignContent: 'center'
    },
    inputContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainerImageSelected: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});