import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Box,
  Button,
  Image,
  Input,
  Pressable,
  ScrollView,
  Text,
  VStack,
  HStack,
} from "native-base";

export default function Index() {
  const router = useRouter();
  const [idade, setIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const anoNasc = new Date().getFullYear() - parseInt(idade);

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", padding: 15, backgroundColor: "beige" }}>
      <Text fontSize="4xl" fontWeight="bold" mb={6}>
        Olá Turma!
      </Text>

      <Image
        source={require("@/assets/images/avatar.jpg")}
        alt="Avatar"
        size={150}
        borderRadius={75}
        mb={4}
      />

      <Pressable onPress={() => setShowDetails(!showDetails)}>
        <Text mt={4} fontSize="md" textAlign="center">
          {showDetails
            ? "Este é um App de exemplo da disciplina Programação Web e Mobile do Curso de Ciência da Computação da Universidade Católica de Pernambuco (semestre 2025.2)"
            : "Toque para ver mais..."}
        </Text>
      </Pressable>

      {!isNaN(anoNasc) && (
        <Text mt={3}>Você nasceu em {anoNasc}</Text>
      )}

      <Input
        mt={4}
        placeholder="Qual a sua idade?"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
        w="64"
      />

      <HStack mt={5} space={4}>
        <Button colorScheme="purple" onPress={() => alert("Botão OK pressionado")}>
          OK
        </Button>
        <Button colorScheme="purple" onPress={() => alert("Botão Cancel pressionado")}>
          Cancel
        </Button>
      </HStack>

      <Button mt={6} colorScheme="blue" onPress={() => router.navigate("/taskList")}>
        Ir para Lista de Tarefas
      </Button>

      <Box h={16} />
    </ScrollView>
  );
}
