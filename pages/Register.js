import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
// import ShadowView from 'react-native-simple-shadow-view/src/ShadowView';
// import firebase from 'react-native-firebase';
// import {Actions} from 'react-native-router-flux'
import RegisterStyles from "../styles/RegisterStyles";

export default function Register() {
    let [pass, setPass] = useState(true);
    let [firstName, setFirstName] = useState();
    let [lastName, setLastName] = useState();
    let [school, setSchool] = useState();
    let [subjects, setSubjects] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [errorMsg, setErrorMsg] = useState();
    let passIcon = null;

    if (pass===true){
        passIcon=require("../media/icon/eye-closed.png")
    } else {
        passIcon=require("../media/icon/eye.png")
    }

    // let handleSignUp = () => {
    //     // TODO: Firebase stuff...
    //     console.log('handleSignUp');
    //     firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(setEmail, setPassword)
    //       .then(() => Actions.login())
    //       .catch(error => setErrorMsg({ errorMessage: error.message }))
    // };


    return(
        <ScrollView style={RegisterStyles.wrapper}
                    showsVerticalScrollIndicator={false}>
            <View style={RegisterStyles.pgTitleWrapper}>
                <Text style={RegisterStyles.pgTitle}>Register</Text>
                <Text>Sign up for a teachShare account</Text>
            </View>
            <View>
                <View style={RegisterStyles.inpWrapper}>
                    <Text style={RegisterStyles.inpHeading}>First Name</Text>
                    <TextInput
                        style={RegisterStyles.inp}
                        placeholder={"Enter your first name"}
                        autoCapitalize="words"
                        value={null}
                        onChangeText={()=>{}}
                    />
                </View>
                <View style={RegisterStyles.inpWrapper}>
                    <Text style={RegisterStyles.inpHeading}>Last Name</Text>
                    <TextInput
                        style={RegisterStyles.inp}
                        placeholder={"Enter your last name"}
                        autoCapitalize="words"
                        value={null}
                        onValueChange={()=>{}}
                    />
                </View>
                <View style={RegisterStyles.inpWrapper}>
                    <Text style={RegisterStyles.inpHeading}>School</Text>
                    <TextInput
                      style={RegisterStyles.inp}
                      placeholder={"Enter your current workplace"}
                      autoCapitalize="words"
                      value={null}
                      onValueChange={()=>{}}
                    />
                </View>
                <View style={RegisterStyles.inpWrapper}>
                    <Text style={RegisterStyles.inpHeading}>Email</Text>
                    <TextInput
                        style={RegisterStyles.inp}
                        placeholder={"Enter a school username"}
                        value={null}
                        onValueChange={()=>{}}
                    />
                </View>
                <View style={RegisterStyles.inpWrapper}>
                    <Text style={RegisterStyles.inpHeading}>Password</Text>
                    <View style={RegisterStyles.passInpWrapper}>
                        <TextInput
                          style={[RegisterStyles.inp, RegisterStyles.passInp]}
                          secureTextEntry={pass}
                          autoCapitalize="none"
                          placeholder="Enter a password"
                        />
                        <TouchableOpacity
                          style={RegisterStyles.passImgWrapper}
                          onPress={()=>{setPass(!pass)}}
                        >
                            <Image
                              style={RegisterStyles.passImg}
                              source={passIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={RegisterStyles.btnWrapper}>
                <TouchableOpacity
                  style={RegisterStyles.registerBtn}
                  // onPress={handleSignUp}
                >
                    <Text style={RegisterStyles.registerBtnTxt}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={RegisterStyles.loginBtn}
                    // onPress={()=>{Actions.login()}}
                >
                    <Text style={RegisterStyles.loginBtnTxt}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
