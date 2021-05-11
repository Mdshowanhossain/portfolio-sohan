import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/home"><Home /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/about"><About /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/skill"><Skills /></Route>
        </Switch>
        <Switch>
          <Route exact path="/work"><Projects/></Route>
        </Switch>
        <Switch>
          <Route exact path="/contacts"><Contact /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
