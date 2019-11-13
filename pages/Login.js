import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import LoginStyles from "../styles/LoginStyles";
import {Actions} from 'react-native-router-flux';
import firebase from 'react-native-firebase';

export default function Login(){
    let [pass, setPass] = useState(true);
    let passIcon = null;
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [errorMsg, setErrorMsg] = useState();

    if (pass===true){
        passIcon=require("../media/icon/eye-closed.png")
    } else {
        passIcon=require("../media/icon/eye.png")
    }

    let HandleLogin = () => {
        // TODO: Firebase stuff...
        let tempEmail = email, tempPassword = password;
        firebase
            .auth()
            .signInWithEmailAndPassword(tempEmail, tempPassword)
            .then(() => Actions.main())
            .catch(error => this.setState({ errorMessage: error.message }))
    };


    return(
        <View style={LoginStyles.wrapper}>
            <View style={LoginStyles.topWrapper}>
                <View style={LoginStyles.imgWrapper}>
                <Image
                    style={LoginStyles.img}
                    source={require('../media/imgs/logo.png')}
                />
                </View>
                <View style={LoginStyles.txtInpWrapper}>
                    <TextInput
                        style={LoginStyles.txtInp}
                        autoCapitalize="none"
                        placeholder="Email"
                        onChangeText={(val)=>setEmail(val)}
                        value={email}
                    />
                    <View style={LoginStyles.passInpWrapper}>
                        <TextInput
                            style={[LoginStyles.txtInp, LoginStyles.passInp]}
                            secureTextEntry={pass}
                            autoCapitalize="none"
                            placeholder="Password"
                            onChangeText={(val)=>setPassword(val)}
                            value={password}
                        />
                        <TouchableOpacity
                            style={LoginStyles.passImgWrapper}
                            onPress={()=>{setPass(!pass)}}
                        >
                            <Image
                                style={LoginStyles.passImg}
                                source={passIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <View style={LoginStyles.btnWrapper}>
                    <TouchableOpacity
                        style={[LoginStyles.btn, LoginStyles.loginBtn]}
                        onPress={HandleLogin}
                        // onPress={()=>Actions.main()}
                    >
                        <Text style={LoginStyles.loginBtnTxt}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[LoginStyles.btn, LoginStyles.registerBtn]}
                        onPress={() => Actions.register()}
                        >
                        <Text style={LoginStyles.registerBtnTxt}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={LoginStyles.forgetBtn}>
                        <Text style={LoginStyles.forgetBtnTxt}>Forget your password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};
