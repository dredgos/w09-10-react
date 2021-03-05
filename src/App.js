import { BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import Stuff from './components/Stuff'

const App = () => (
  <Router>
    <Stuff displaySquare = {false}/>
  </Router>
)

export default App;
