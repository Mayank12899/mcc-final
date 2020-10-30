import React, { Component } from 'react';
import {Text, View, StyleSheet} from "react-native";

import {Form, Item, Input, Body, CheckBox, Button} from 'native-base';

class Auth extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.top}></View>
            <View style={styles.middle}>
                <Text style={styles.textContainer}>
                    Login to Be Fucking Awesome
                </Text>
                <View style={styles.formArea}>

                </View>
            </View>
            
            <View style={styles.bottom}></View>
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
        marginBottom: 30,
        position: "relative",
        top: "20%",
        alignSelf: "center",
        fontFamily: "GoogleSans-Bold"

    },
    formArea:{

    },
    bottom:{

    }

  });

export default Auth;
