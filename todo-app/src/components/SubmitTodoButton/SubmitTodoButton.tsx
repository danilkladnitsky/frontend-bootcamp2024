import { Button } from '@mantine/core';

interface Props {
  onClick: () => void;
  disabled: boolean;
}

export const SubmitTodoButton = ({ onClick, disabled = true }: Props) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      Add Todo
    </Button>
  );
};
