import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function CalculadoraScreen(){

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    function calcular(){
        // Convertir a número
        const n1 = parseFloat(num1) || 0;
        const n2 = parseFloat(num2) || 0;
        setResultado(n1 + n2);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}> App de modulo {resultado} </Text>     
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#FFF",
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    color: "#000",
  }
});