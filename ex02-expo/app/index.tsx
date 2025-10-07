import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [idade, onChangeIdade] = useState("");
  const anoNasc = new Date().getFullYear() - parseInt(idade);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Olá Turma!</Text>
      <Image
        style={styles.avatar}
        source={require("@/assets/images/avatar.jpg")}
        resizeMode="cover"
      />
      <Text style={styles.text}>
        Este é um App de exemplo da disciplina Programação Web e Mobile do Curso
        de Ciência da Computação da Universidade Católica de Pernambuco
        (semestre 2025.2)
      </Text>
      {!isNaN(anoNasc) && <Text>Você nasceu em {anoNasc}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={onChangeIdade}
        value={idade}
        placeholder="Qual a sua idade?"
        keyboardType="numeric"
      />
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => Alert.alert("Botão OK pressionado")}
          title="     OK     "
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => Alert.alert("Botão Cancel pressionado")}
          title="Cancel"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={styles.space} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "beige",
    padding: 15,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 30,
  },
  avatar: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  text: {
    fontSize: 16,
    marginTop: 30,
  },
  input: {
    height: 45,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  space: {
    height: 70,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
  },
});
