import { View, Text, StyleSheet, Button, ScrollView, Image, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import logo from "../assets/logo2.png";
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';

export default function LoginScreen() {
  const { height } = Dimensions.get('window');
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  return (
    <ScrollView >
      <LinearGradient
        colors={['#586cd7', '#576cd6', '#4667ca']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 8, minHeight: height }}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={logo} />
          </View>
          <View style={styles.username}>
            <Text style={styles.heading}>Login</Text>
          </View>
          <View style={styles.username}>
            <LinearGradient
              colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.2)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.inputContainer}>
              <Icon name="user" size={20} color="#576cd6" style={styles.icon} />
              <TextInput style={styles.input} placeholder='Username' placeholderTextColor='#576cd6' value={name} onChangeText={(text) => setName(text)} />
            </LinearGradient>
          </View>
          <View style={styles.username}>
            <LinearGradient
              colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.2)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.inputContainer}>
              <Icon name="lock" size={20} color="#576cd6" style={styles.icon} />
              <TextInput style={styles.input} placeholder='Password' placeholderTextColor="#576cd6" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
            </LinearGradient>
          </View>

          <Button
            title="Button"
            onPress={() => {
              // Handle button press
            }}
            color="#334b86"
          />
        </View>

      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: 200,
    height: 200,
  },
  heading: {
    textAlign: 'center',
    fontSize: 28,
    color:'white',
    fontWeight:'bold',
    fontFamily: 'Montserrat',
  },
  username:{
    margin:20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    color: '#576cd6',
  }

})