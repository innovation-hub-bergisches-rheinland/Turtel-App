import React, { useState } from 'react';
import {StyleSheet, View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import {InputOutline} from 'react-native-input-outline';
import Camera from '../../images/camera.jsx';
import OwnButton from '../Buttons/TurtelButton.js';
import OwnCheckButton from '../Buttons/TurtelCheckButton.js';
import * as ImagePicker from 'expo-image-picker';
import { OnboardingLocation } from './OnboardingLocation.js';

export function  Onboarding({ navigation }) {
    const [image, setImage] = useState(null);
    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(result.assets[0].uri);
        }
    };

    const onPressForward = () => {
        console.log(areacode + phoneNumber)
        if(areacode == null || phoneNumber == null) {
            Alert.alert("Achtung! Du musst eine Eingabe tätigen!")
        } else {
            navigation.navigate(Onboarding)
        }
    }

    return (
        <SafeAreaView style={style.pageStyle}>
            {image && <Image source={{ uri: image }} style={style.profilePicture} />}
            <Pressable onPress={pickImage}>
                <View style={style.imageContainer}>
                    <View style={!image ? style.selectImage: style.imageSelected}>
                        <Camera/>
                    </View>
                    {!image && <Text>Wähle ein Bild von Dir!</Text>}
                </View>
            </Pressable>
            <View style={!image ? style.inputContainer : style.inputContainerImageSelected}>
                <InputOutline placeholder='Name' style={style.input}/>
                <InputOutline placeholder='Geburtstag (TT/MM/JJJJ)' style={style.input}/>
                <View style={style.biological}>
                    <OwnCheckButton name="weiblich"/>
                    <OwnCheckButton name="männlich"/>
                    <OwnCheckButton name="divers"/>
                </View>
                <OwnButton name="Weiter" onPress={() => navigation.navigate(OnboardingLocation)} />
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create ( {
    pageStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    input: {
        height: 52,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#000',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    biological: {
        width: '90%',
        flexDirection: 'row',
        marginBottom: 12,
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
        borderWidth: 2,
        borderColor: '#9679C1',
        width: 100,
        borderRadius: 25,
        padding: 5,
        backgroundColor: 'white',
        opacity: 0.5,
    },
    profilePicture: {
        width: "100%",
        height: "50%",
        position: 'absolute',
        top: 0,
        left: 0,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    inputContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainerImageSelected: {
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        top: 10,
        alignItems: 'center',
        
    }
});