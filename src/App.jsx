import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Nav from './Nav'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Projects/>} />
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
    <Nav/>
  </>
  );
}

export default App;
