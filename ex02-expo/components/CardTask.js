import { Button, Switch, HStack, Text, VStack, Box } from "native-base";

export function CardTask({ task, onDelete, onCheck }) {
  return (
    <Box
      bg="gray.100"
      p={3}
      mb={2}
      borderRadius="lg"
      shadow={1}
      w="100%"
    >
      <HStack justifyContent="space-between" alignItems="center">
        <VStack>
          <Text fontSize="md">{task.description}</Text>
        </VStack>
        <HStack space={2} alignItems="center">
          <Switch
            isChecked={task.done}
            onToggle={() => onCheck(task)}
            colorScheme="blue"
          />
          <Button size="sm" colorScheme="red" onPress={() => onDelete(task.objectId)}>
            X
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}
