import '../src/Style/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Page/Home';
import About from './Page/About'

function App() {
  return (
    //  <div className="App">
    //  </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/about" element= {<About />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
