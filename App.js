import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';



export default function App() {
  const [contacts, setContacts ] = useState([])
  const [buttonPressed, setButtonpressed] = useState();
  
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data)
        }
      }
    })();
  }, []);


    


  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>


      <Button
  onPress={buttonPressed}
  title="Get contacts"
  color="#841584"
      />

      <Text></Text>
      <Text></Text>


      <FlatList 
        data={contacts}
        renderItem={({item}) => {
          return (
            <Text>{`${item.name} (${item.phoneNumbers ? item.phoneNumbers[0].number : ''})`}</Text>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});