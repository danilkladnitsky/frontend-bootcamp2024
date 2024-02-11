import { Input, TextInput } from '@mantine/core';
import { ChangeEvent } from 'react';

import styles from './TodoDescriptionInput.module.scss';

interface Props {
  onChange: (text: string) => void;
  description: string;
}

export const TodoDescriptionInput = ({ onChange, description }: Props) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <TextInput value={description} className={styles.input} onChange={handleOnChange} />;
};
