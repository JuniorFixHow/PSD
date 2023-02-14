import { View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'; 

const Home = () => {
    const [session, setSession] = useState(undefined);
   const image = {uri:'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
  return (
      <TouchableWithoutFeedback
        onPress={()=>Keyboard.dismiss()}
      >

    <View style={styles.main_container}>
      <Text style={styles.header}>Take Attendance</Text>
      <Text style={styles.header_text}>Current Classes</Text>
      <View style={[styles.container, styles.elevation]}>
        <View style={styles.picker}>
            <Picker 
            selectedValue={session}
            onValueChange={(item, index)=>setSession(item)}
            style={styles.pick}
            >
                <Picker.Item label='Select' value='class 1'/>
                <Picker.Item label='class one' value='class 1'/>
                <Picker.Item label='class two' value='class 2'/>
            </Picker>
            <TextInput keyboardType='numeric' placeholder='Enter ID' style={styles.input} />
        </View>
        <View style={styles.finger}>
            <Text>Scan your finger</Text>
            <Ionicons  name="finger-print" size={100} color="blueviolet" />
        </View>
      </View>
      <Image resizeMode='cover' style={styles.back} source={image}></Image>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    main_container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'gainsboro',
        width:'100%',
        position:'relative',
    },

    back:{
        width: '100%', 
        height: '20%', 
        position: 'absolute', 
        transform: [{ rotate: '360deg'}],
        top:0,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    container:{
        backgroundColor:'rgb(0, 165, 247)',
        width:'80%',
        alignItems:'center',
        padding:10,
        borderRadius:20,
    },
    elevation:{
        elevation: 20,
        shadowColor: '#52006A',
    },
    header:{
        fontSize:30,
        color:'orange',
        fontWeight:'bold',
        // marginBottom:,  
        zIndex:1,
        position:'absolute',
        top:50,
    },
    header_text:{
        fontSize:24,
        color:'teal',
        fontWeight:'bold',
        marginBottom:50,  
    },
    pick:{
        width:'100%',
        height:40,
        color:'rgba(0, 0, 0, 0.5)',
        textAlign:'left'        
    },
    picker:{
        width:'90%',
        height:40,
        borderColor:'gainsboro',
        borderBottomWidth:2,
        alignItems:'center',
        // justifyContent:'center'
    },

    input:{
        width:'100%',
        height:40,
        borderColor:'gainsboro',
        borderBottomWidth:2,
        color:'rgba(0, 0, 0, 0.5)',
    },
    finger:{
        marginTop:100,
    }
})

export default Home