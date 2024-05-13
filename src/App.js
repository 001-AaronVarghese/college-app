import logo from './logo.svg';
import './App.css';
import Homepg from './Component/Homepg';
import Gallery from './Component/Gallery';
import Aboutus from './Component/Aboutus';
import Contactus from './Component/Contactus';

function App() {
  return (
    <div >
      <Homepg/>
      <Aboutus/>
      <Gallery/>
      <Contactus/>
    </div>
  );
}

export default App;
