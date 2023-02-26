import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {InputOutline} from 'react-native-input-outline';
import OwnButton from '../Buttons/TurtelButton.js';
import DropDownPicker from 'react-native-dropdown-picker';
import {OnboardingSearchRelation} from '../Onboarding/OnboardingSearchRelation';

export function  OnboardingLocation({ navigation }) {
    const [open, setOpen] = useState(false);
    const [areacode, setAreacode] = useState(null);
    const [items, setItems] = useState([
        {label: '5km', value: '5km'},
        {label: '10km', value: '10km'},
        {label: '15km', value: '15km'},
        {label: '20km', value: '20km'},
        {label: '25km', value: '25km'},
        {label: '50km', value: '50km'},
        
    ]);   
    const [city, setCity] = useState(null);


    return (
        <SafeAreaView style={style.pageStyle}>
            <KeyboardAvoidingView style={{alignItems: 'center'}} behavior={Platform.OS === "ios" ? "padding" : "height"} >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={{width: '100%', alignItems: 'center'}}>
                        <Text style={style.textStyle}>Ich wohne in</Text>
                        <InputOutline placeholder='Stadt/Ort' style={style.input} onChangeText={newText => setCity(newText)}/>
                        <Text style={style.textStyle}>Ich möchte Menschen kennenlernen, die nicht weiter entfernt wohnen, als</Text>
                        
                        <DropDownPicker 
                            placeholder='Entfernung'
                            open={open}
                            dropDownContainerStyle={style.containerStyle}
                            value={areacode}
                            items={items}
                            setOpen={setOpen}
                            setValue={setAreacode}
                            setItems={setItems}
                            style={style.input}
                        />
                        
                        <OwnButton name="Weiter" onPress={() => navigation.navigate(OnboardingSearchRelation)} />
                    </View>
                </TouchableWithoutFeedback>  
            </KeyboardAvoidingView>
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
    containerStyle: {
        width: "90%",
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textStyle: {
        textAlign: 'center',
        margin: 20,
        color: '#4C4C4C',
    }
});