import { Button, Group } from '@mantine/core';
import { TodoItem as TodoItemEntity } from '../../types/todo-item';

interface Props {
  item: TodoItemEntity;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ item, onDelete }: Props) => {
    const handleOnDelete = () => {
        onDelete(item.id);
    }

  return (
    <Group>
      {item.description}
      <Button onClick={handleOnDelete} color="red">delete</Button>
    </Group>
  );
};
