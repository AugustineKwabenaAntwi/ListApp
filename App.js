import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactsScreen from './ContactsScreen';
import Contact from './components/Contact';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContactsScreen/>
  
  
  
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop:100
  },
});
