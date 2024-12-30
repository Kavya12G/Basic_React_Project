import {Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
export default function App() {
  return (
    <>
    <button><Link to='/'>Home</Link></button>
    <button><Link to='/Contact'>Contact</Link></button>
    <button><Link to='/About'>About</Link></button>
    <Routes>
      <Route path='/home' element={<Home />}></Route> 
      <Route path='/Contact' element={<Contact />}></Route>
      <Route path='/About' element={<About />}></Route>
    </Routes>
    </>
  );
}
