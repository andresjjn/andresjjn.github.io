import './App.scss';
import logo from './images/logo.png'
// import coming from './images/coming.gif'
// import qr from './images/QRCode.jpeg'
import SocialFollow from "./components/SocialFollow"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="blink-image" />
          <div className='buttons'>
            <SocialFollow />  
          </div>
        <button className="myButton">
        <a className='contact' href='https://forms.gle/baZy2b2RmtWaXo4ZA'> Contact us </a>
        </button>
      </header>
    </div>
  );
}

export default App;
