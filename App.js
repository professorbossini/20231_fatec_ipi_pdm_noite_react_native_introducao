import { useState } from 'react'
//useState devolve uma coleção com duas coisas
//uma variável de estado
//e uma função capaz de atualizá-la
import {
  Button,
  Text, 
  View 
} from 'react-native'
//hook (16.8, useState)

export default function App() {
  const [texto, setTexto] = useState('Olá, React Native!!')
  return (
    <View style={{width: '100%', alignItems: 'center', padding: 20}}>
      <Text style={{width: '80%', borderColor: '#CCC', borderWidth: 1, textAlign: 'center', backgroundColor: '#DDD', padding: 8, marginBottom: 4}}>
        {texto}  
      </Text>
      <View style={{width: '80%'}}>
        <Button 
          title='OK'
          onPress={() => setTexto("Olá, React Native 2.0!!!")}          
        />
      </View>
    </View>
  )  
}



