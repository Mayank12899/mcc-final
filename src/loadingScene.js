import React, { Component } from 'react';
import {StyleSheet,Image, Text, View, Button, Animated, LogBox} from "react-native";
// import Animated from 'react-native-reanimated';
LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
import {Actions} from 'react-native-router-flux';

const switchtoAuth = () =>{
    Actions.replace('Auth');
}

class load extends Component {
    state = {
        logoAnime: new Animated.Value(0),
        logoText: new Animated.Value(0),
        loadingSpinner: false,
    };
    componentDidMount(){
        const {logoAnime, logoText} = this.state;
        Animated.parallel([
          Animated.spring(logoAnime,{
              toValue: 1,
              tension: 10,
              friction: 2,
              duration: 1000,
          }).start(),
          Animated.timing(logoText, {
                  toValue: 1,
                  duration: 1200,
                  useNativeDriver: true 
              }),
        ]).start(()=>{
              this.setState({
                  loadingSpinner:true,
                  useNativeDriver: true
              });

              setTimeout(switchtoAuth, 2000);

            });

        console.log("I am mounted");

    }
    render() {

    return (
        <View style={styles.container}>
            <Animated.View style={{
                opacity: this.state.logoAnime,
                top: this.state.logoAnime.interpolate({
                    inputRange: [0, 1],
                    outputRange: [80, 0],
                })

            }}>
                <Image 
                    source={require("../assets/logo.png")}
                    style={{height: 100, width: 250}}
                />
            </Animated.View>
            <Animated.View style={{
                opacity: this.state.logoText,

            }}>
            <Text style={styles.logoText}>
                Something for Everyone
            </Text>
            </Animated.View>
            
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#5257F2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText:{
        color: "#FFFFFF",
        fontSize: 20,
        margin:20,
        // fontFamily: "OpenSans_400Regular"

    }
});

export default load;
