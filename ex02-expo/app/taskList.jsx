import { addTask, deleteTask, getTasks, updateTask } from "@/api";
import { CardTask } from "@/components/CardTask";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  Button,
  FlatList,
  Input,
  Text,
  VStack,
  HStack,
  Box,
} from "native-base";

export default function TaskList() {
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();

  const { data, isFetching, error, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTasks,
  });

  const addMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setDescription("");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isFetching) return <Text>Carregando...</Text>;
  if (error) return <Text>Erro: {error.message}</Text>;
  if (!data) return <Text>Sem dados disponíveis</Text>;

  return (
    <VStack p={4} space={3}>
      <Text fontSize="2xl" fontWeight="bold" mb={2}>
        Task List
      </Text>

      <HStack space={2} alignItems="center">
        <Input
          flex={1}
          placeholder="Add a task"
          value={description}
          onChangeText={setDescription}
        />
        <Button onPress={() => addMutation.mutate({ description })}>
          Add
        </Button>
      </HStack>

      <Box my={3} bg="gray.400" h={0.5} w="90%" alignSelf="center" />

      <FlatList
        data={data.results}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => (
          <CardTask
            key={item.objectId}
            task={item}
            onDelete={deleteMutation.mutate}
            onCheck={updateMutation.mutate}
          />
        )}
      />

      {isPending && <Text>Pending...</Text>}
    </VStack>
  );
}
