import Upload from './components/Upload';
import Loading from './components/Loading'
import Uploaded from './components/Uploaded'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles.css';

import {
  ChakraProvider
} from "@chakra-ui/react"

function App() {
  return (
     <ChakraProvider>
       <Router>
      <Switch>
      <Route exact path ="/">
        <Upload/>
      </Route>
      <Route exact path ="/uploaded">
        <Uploaded />
      </Route>
       </Switch>
       </Router>
    </ChakraProvider>
    
  );
}

export default App;
