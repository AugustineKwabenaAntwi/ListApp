import React from 'react'
import {View,FlatList,Text} from 'react-native'
import Contact from './components/Contact'

export default function ContactsScreen() {
    const contacts = [
        {name:"Sam Bob",number:"043-565-7667"},
        {name:"kwame Brown",number:"023-535-2664"},
        {name:"timmy turner",number:"111-565-7890"},
        {name:"bugs bunny",number:"333-065-7665"},
        {name:"confidence chooby",number:"013-555-1345"},
        {name:"Zaddy thirsty",number:"993-765-7998"},

    ]



    return (
        <View>
            <FlatList
            data = {contacts}
            renderItem = {({item})=>{
                return <Contact
                name={item.name}
                phone = {item.number}
                />
            }}
            keyExtractor={(item)=>item.number}
            />
            
        </View>
    )
}
