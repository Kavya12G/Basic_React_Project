import Home from './Home'
import Contact from './Contact'
import About from './About'
import Greeting from './Greeting'

function App() {
  return (
    <div>
    <h1>Hello From React JS</h1>
    <Greeting name = {'Akash'}/>
    <Greeting name = {'Ayush'}/>
 { /*<Home name = {'Pooja'} age = {24} />
    <About/>
    <Contact/> */}
    </div>
  );
}

export default App;
