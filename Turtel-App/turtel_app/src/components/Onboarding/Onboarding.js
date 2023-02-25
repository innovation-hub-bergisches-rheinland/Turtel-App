import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, SafeAreaView, Pressable, Image, Alert } from 'react-native';
import {InputOutline} from 'react-native-input-outline';
import Camera from '../../../assets/images/camera.jsx';
import OwnButton from '../Buttons/TurtelButton.js';
import * as ImagePicker from 'expo-image-picker';
import OwnCheckButton from '../Buttons/TurtelCheckButton.js';
import { OnboardingLocation } from './OnboardingLocation';

import DatePicker from 'react-native-date-picker'

export function Onboarding({ navigation }) {
    const [errorName, setErrorName] = useState(undefined);
    const [errorBirthday, setErrorBirthday] = useState(undefined);

    const [name, setName] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [6, 6],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(result.assets[0].uri);
        }
    };

    const [gender, setGender] = useState(null);
    const [activeGender, setActiveGender] = useState(false);
    const [hiddenGender, setGenderHidden] = useState(false);
    const changeGender = (newGender) => {
        setGenderHidden(newGender === "other" && !activeGender);
        setGender(newGender);
        setActiveGender(!activeGender);
        return !activeGender;
    };

    const checkInputs = () => {
        console.log("Name: " + name + ", Birthday: " + birthday + ", Gender: " + gender);
        if (birthday === null) {
            setErrorBirthday("Feld darf nicht leer sein!")
        }
        if (name === null) {
            setErrorName("Feld darf nicht leer sein!")
        }

        if (birthday != null & name != null & gender != null) {
            navigation.navigate(OnboardingLocation);
        }

    }

    return (
        <SafeAreaView style={style.pageStyle}>
            <KeyboardAvoidingView style={{ alignItems: 'center' }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                {image && <Image source={{ uri: image }} style={style.profilePicture} />}
                <View style={{ justifyContent: 'center', height: '100%', top: "5%" }}>
                    <Pressable onPress={pickImage}>
                        <View style={style.imageContainer}>
                            <View style={!image ? style.selectImage : style.imageSelected}>
                                <Camera />
                            </View>
                            {!image && <Text style={{ textAlign: 'center' }}>Wähle ein Bild von Dir!</Text>}
                        </View>
                    </Pressable>
                    <View style={!image ? style.inputContainer : style.inputContainerImageSelected}>
                        <InputOutline placeholder='Name' style={style.input} onChangeText={newText => setName(newText) & setErrorName(undefined)} inactiveColor="#000" error={errorName} />
                        <InputOutline placeholder='Geburtstag (TT/MM/JJJJ)' style={style.input}
                            onChangeText={newText => setBirthday(newText) & setErrorBirthday(undefined)}
                            inactiveColor="#000" error={errorBirthday} />

                        <View style={style.checkbuttonView}>
                            <OwnCheckButton name="männlich" onPress={() => changeGender("male")} style={style.button} />
                            <OwnCheckButton name="weiblich" onPress={() => changeGender("female")} style={style.button} />
                            <OwnCheckButton name="anderes" onPress={() => changeGender("other")} style={style.button} />
                        </View>
                        {hiddenGender && <InputOutline placeholder="Geschlecht" style={style.input} onChangeText={newText => setGender(newText)} inactiveColor={"#000"} />}
                        <OwnButton name="Weiter" style={{ width: 256 }} onPress={checkInputs} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
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
    },
    checkbuttonView: {
        width: '90%',
        marginBottom: 10,
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        flex: 1,
        borderColor: '#000'
    }
});