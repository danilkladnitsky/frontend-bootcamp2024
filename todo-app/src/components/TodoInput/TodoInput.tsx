import { Group } from '@mantine/core';
import { SubmitTodoButton } from '../SubmitTodoButton/SubmitTodoButton';
import { TodoDescriptionInput } from '../TodoDescriptionInput/TodoDescriptionInput';
import { useState } from 'react';

interface TodoInputProps {
  onSubmit: (text: string) => void;
}

export const TodoInput = ({ onSubmit }: TodoInputProps) => {
  const [todoDescription, setTodoDescription] = useState('');

  const handleTodoAdd = () => {
    onSubmit(todoDescription);
    setTodoDescription('');
  };

  return (
    <Group>
      <TodoDescriptionInput description={todoDescription} onChange={setTodoDescription} />
      <SubmitTodoButton disabled={todoDescription.length === 0} onClick={handleTodoAdd} />
    </Group>
  );
};
