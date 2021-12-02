import React from 'react'
import {View, Text,Image,StyleSheet} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {SimpleLineIcons} from '@expo/vector-icons'

export default function Contact( {name,phone}) {
    return (
        <View style= {styles.container}>
            <Image source = {require("../assets/profile01.jpg")} style ={styles.Image}/>
            <View style = {styles.infocontainer}>
                <Text style = {styles.name} numberOfLines={1} >{name}</Text>
                <Text>{phone}</Text>
            </View>
            <View style = {styles.icon}>
                <MaterialIcons  name="local-phone" size={25} color="#009cf5"/>
            </View>

            <View style = {styles.icon}>
                <MaterialCommunityIcons name="message-processing" color="#009cf5" size={25}/>
            </View>

            <View style = {styles.icon}>
                <SimpleLineIcons name="options-vertical" color="#a8a8a8"size={25}/>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginHorizontal:20,
        alignContent:"center",
        marginVertical:20

    },
    Image:{
        width:50,
        height:50,
        borderRadius:50,
    },
    infocontainer:{
        justifyContent:"center",
        marginHorizontal:15,
        flex:4
    },
    name:{
        fontWeight:"bold",
        fontSize:17
    },
    icon:{
        flex:1
    }

})