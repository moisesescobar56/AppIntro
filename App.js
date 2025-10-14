import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculadoraScreen from './screens/CalculadoraScreen';
import { Layout , Input } from './components';

export default function App() {
  return (
    <Layout title="Contacto" >
      <Input label="Email:" placeholder="name@mail.com" type="email-addres" />
      <Input label="Asunto:" placeholder="Consulta" />
      <Input label="Mensaje:" placeholder="Escribir aqui..." lines={10}/>
    </Layout>
  );
}
    