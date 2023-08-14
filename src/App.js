import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login2 from './components/Login2';

function App() {
  return (
   <Router>
      <Routes>
        <Route exact path = "/" Component={Home}/>
        <Route exact path = "/login" Component={Login2}/>
      </Routes>
   </Router>
  );
}

export default App;
