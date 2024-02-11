import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = createTheme({});

function App() {
  return <MantineProvider theme={theme} defaultColorScheme="dark"></MantineProvider>;
}

export default App;
