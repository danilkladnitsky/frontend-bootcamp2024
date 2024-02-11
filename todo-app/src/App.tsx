import { useState } from 'react';
import { MantineProvider, createTheme } from '@mantine/core';

import { TodoInput } from './components/TodoInput/TodoInput';

import '@mantine/core/styles.css';
import { TodoItem } from './types/todo-item';
import { TodoItem as TodoItemView } from './components/TodoItem/TodoItem';

const theme = createTheme({});

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const onTodoAdd = (text: string) => {
    const newTodo: TodoItem = {
      id: Date.now().toString(),
      description: text,
    };

    setTodoList([...todoList, newTodo]);
  };

  const onTodoDelete = (id: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <main>
        <div>
          {todoList.map((todo) => (
            <TodoItemView item={todo} onDelete={onTodoDelete} key={todo.id} />
          ))}
        </div>
        <TodoInput onSubmit={onTodoAdd} />
      </main>
    </MantineProvider>
  );
}

export default App;
