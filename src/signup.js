import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, TextInput, LogBox} from "react-native";

import {Form, Item, Button} from 'native-base';


import {Actions} from 'react-native-router-flux';

import firebase from './config';

var db = firebase.firestore();

LogBox.ignoreAllLogs();

class signup extends Component{
    state = { email: '', password: '', errorMessage: null };
    handleSignUp = () => {
        const { email, password } = this.state
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => Actions.replace('Main'))
          .catch(error => this.setState({ errorMessage: error.message }))
      }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.top}></View>
                <View style={styles.middle}>
                <View style={{alignSelf: "center", top: 100}}>
                <Image  
                    source={require("../assets/logo.png")}
                    style={{height: 100, width: 250}}
                />
                </View>

                <Text style={styles.textContainer}>
                    You are ready to be awesome 
                </Text>
                <View style={styles.formArea}>
                    <Text style={[styles.textContainer, styles.signin]}>
                        Sign Up
                        
                    </Text>
                        {this.state.errorMessage &&
          <Text style={{ color: 'red', fontSize: 12, padding: 10, alignSelf: "center"}}>
            {this.state.errorMessage}
          </Text>}
                    <Form style={styles.mainForm}>
                        <Item style={styles.formItems}>
                        <TextInput
                            style={styles.Inputs}
                            autoCapitalize="none"
                            placeholder="Email"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />
                        </Item>
                        <Item style={styles.formItems}>
                            <TextInput
                                secureTextEntry
                                style={styles.Inputs}
                                autoCapitalize="none"
                                placeholder="Password"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            />
                        </Item>

                        <View style={styles.Button}>
                            <Button block style={styles.mainBtn} onPress={this.handleSignUp}>
                                <Text style={styles.textBtn}>
                                    Submit    
                                </Text>    
                            </Button>
                            <Text style={{position: 'relative', top: "45%", alignSelf:"center", color: "black", zIndex:2}} onPress={() => Actions.Auth()}> 
                    Already Have an Account? 

                </Text>
                

                        </View>
                    </Form>
                </View>
            </View>
                <View style={styles.bottom}>

                </View>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "relative",

    },
    top:{
        position: "relative",
        backgroundColor: "#5257f2",
        paddingRight: 12.7,
        paddingLeft: 12.7,
        height: 250
    },
    middle:{
        height: "100%",
        width: "100%",
        flex: 1,
        position: "absolute",
        zIndex: 2,
        backgroundColor: "transparent"
    },
    textContainer:{
        color: 'white',
        fontSize: 24,
        marginBottom: 10,
        position: "relative",
        top: "15%",
        alignSelf: "center",
        // fontFamily: "OpenSans_400Regular"

    },
    err:{
        color: "red",
        fontSize: 12,
        padding: 10,

    },
    signin:{
        top: 1,
        color: "#2d3057",
        margin: 15
    },
    formArea:{
        top: "20%",
        paddingBottom: 40,
        alignSelf: 'center',
        width: '80%',
        backgroundColor: '#ffff',
        paddingLeft: 12.7,
        paddingRight: 12.7,
        borderRadius: 20,
    },
    bottom:{
        position: 'relative',
        height: "100%",
        paddingLeft: 12.7,
        paddingRight: 12.7,
        backgroundColor: "#5257f2"
    },
    mainForm:{
    },
    formItems:{
        marginTop: 15,
        borderColor: "#2d3057",
    },
    Inputs:{
        fontSize: 12,
        padding: 10,
        width: "100%"
    },
    Button:{
        marginTop: 25,
        paddingRight: 12.7,
        paddingLeft: 12.7,
        borderRadius: 10,
        
    },
    mainBtn:{
        backgroundColor: "#1DDCAF",
        borderRadius: 10
    },
    textBtn:{
        color: "#2D3057"
    },
    buttonContainer:{
        margin: 20
    }
  });
export default signup;