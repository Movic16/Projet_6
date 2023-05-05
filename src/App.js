import '../src/Style/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Page/Home';
import About from './Page/About'
import PageError from './Page/PageError'
import Appartement from './Page/Appartement';

//Les routes
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/about" element= {<About />}/>
        <Route path="/Appt" element= {<Appartement />}/>
        <Route path="*" element= {<PageError />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
