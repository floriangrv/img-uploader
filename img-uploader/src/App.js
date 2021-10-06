import Upload from './components/Upload';
import './styles.css';

import {
  ChakraProvider
} from "@chakra-ui/react"

function App() {
  return (
     <ChakraProvider>
        <Upload/>
    </ChakraProvider>
    
  );
}

export default App;
